import express from "express";
import { createLeaderBoard } from "../controllers/leaderBoards.js";
import { authenticateToken } from "../middlewares/authenticateToken.js";

const router = express.Router();

router.post("/create", authenticateToken, createLeaderBoard);
// router.post("/join", authenticateToken, joinCommunity);
// router.get("/search", searchCommunity);
// router.get("/retrieve", authenticateToken, retrieveCommunities);

export default router;
