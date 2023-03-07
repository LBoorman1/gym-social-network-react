import express from "express";

import {
  addEntry,
  addReport,
  getTopTenEntries,
  getUserProgress,
  getUserTopEntry,
} from "../controllers/entries.js";

import { authenticateToken } from "../middlewares/authenticateToken.js";

const router = express.Router();

router.post("/addEntry", authenticateToken, addEntry);
router.get("/getTopTen", authenticateToken, getTopTenEntries);
router.get("/getUserTop", authenticateToken, getUserTopEntry);
router.get("/getUserProgress", authenticateToken, getUserProgress);
router.post("/addReport", authenticateToken, addReport);

export default router;
