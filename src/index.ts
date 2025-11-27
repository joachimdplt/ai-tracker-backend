import express, { Request, Response } from 'express';
import cors from "cors";
import subscriptionRoutes from './routes/subscription.routes';
import userRoutes from './routes/user.routes';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/subscriptions', subscriptionRoutes);
app.use("/users", userRoutes);


app.listen(5001, () => {
  console.log("Server running on port 5001");
}); 