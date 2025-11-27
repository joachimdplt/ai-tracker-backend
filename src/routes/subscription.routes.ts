import { Router } from "express";
import { verifySubscription } from "../controllers/subscription.controller";

const router = Router();

// POST /subscription/verify
router.post("/verify", verifySubscription);

export default router;