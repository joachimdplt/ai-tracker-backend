import { Request, Response } from "express";
import axios from "axios";

export const verifySubscription = async (req: Request, res: Response) => {
  const { receipt } = req.body;

  if (!receipt) {
    return res.status(400).json({ error: "Missing receipt" });
  }

  try {
    // URL Apple (production)
    const url = "https://buy.itunes.apple.com/verifyReceipt";

    const payload = {
      "receipt-data": receipt,
      //"password": process.env.APPLE_SHARED_SECRET,
      "password": "FAKE_SHARED_SECRET",
      "exclude-old-transactions": true
    };

    const response = await axios.post(url, payload, {
      headers: { "Content-Type": "application/json" },
    });

    const data = response.data;

    if (data.status === 0) {
      const latest = data.latest_receipt_info?.[0];

      return res.json({
        success: true,
        originalTransactionId: latest.original_transaction_id,
        purchaseDate: latest.purchase_date,
        expiresDate: latest.expires_date,
        productId: latest.product_id,
        raw: data,
      });
    }

    return res.json({ success: false, data });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};