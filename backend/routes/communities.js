import express from "express";
import {
  createCommunity,
  joinCommunity,
  searchCommunity,
} from "../controllers/communities.js";
import { authenticateToken } from "../middlewares/authenticateToken.js";

const router = express.Router();

router.post("/create", authenticateToken, createCommunity);
router.post("/join", joinCommunity);
router.get("/search", searchCommunity);

export default router;
