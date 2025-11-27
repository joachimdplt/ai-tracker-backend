import { Router } from "express";
import { createUserProfile, getUserProfile } from "../controllers/user.controller";

const router = Router();

router.post("/create", createUserProfile);
router.get("/:id", getUserProfile);

export default router;