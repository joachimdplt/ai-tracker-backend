import { Request, Response } from "express";
import { createUser, getUserById } from "../services/user.service";
import { User } from "../models/user.model";

export const createUserProfile = (req: Request, res: Response) => {
  const { id, profile, subscription } = req.body;

  if (!id || !profile || !subscription) {
    return res.status(400).json({ error: "Missing user data" });
  }

  const user: User = {
    id,
    profile,
    subscription,
  };

  const saved = createUser(user);
  return res.json({ success: true, user: saved });
};

export const getUserProfile = (req: Request, res: Response) => {
  const id = req.params.id;

  const user = getUserById(id);
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  return res.json({ success: true, user });
};