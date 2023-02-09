import express from "express";
import {
  createLeaderBoard,
  joinLeaderBoard,
  retrieveByCommunity,
  retrieveByUser,
} from "../controllers/leaderBoards.js";
import { authenticateToken } from "../middlewares/authenticateToken.js";

const router = express.Router();

router.post("/create", authenticateToken, createLeaderBoard);
router.get("/retrieveByCommunity", authenticateToken, retrieveByCommunity);
router.post("/join", authenticateToken, joinLeaderBoard);
router.get("/retrieveByUser", authenticateToken, retrieveByUser);

export default router;
