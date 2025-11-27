import express, { Request, Response } from 'express';
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.listen(5001, () => {
  console.log("Server running on port 5001");
}); 