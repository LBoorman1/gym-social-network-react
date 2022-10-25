import express from "express";
import { createCommunity, joinCommunity } from "../controllers/communities.js";
import { authenticateToken } from "../middlewares/authenticateToken.js";

const router = express.Router();

router.post("/create", authenticateToken, createCommunity);
router.post("/join", joinCommunity);

export default router;
