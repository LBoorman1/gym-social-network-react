import express from "express";
import {
  createCommunity,
  joinCommunity,
  retrieveCommunities,
  searchCommunity,
} from "../controllers/communities.js";
import { authenticateToken } from "../middlewares/authenticateToken.js";

const router = express.Router();

router.post("/create", authenticateToken, createCommunity);
router.post("/join", authenticateToken, joinCommunity);
router.get("/search", searchCommunity);
router.get("/retrieve", authenticateToken, retrieveCommunities);

export default router;
