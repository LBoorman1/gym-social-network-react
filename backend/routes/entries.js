import express from "express";

import {
  addEntry,
  getTopTenEntries,
  getUserTopEntry,
} from "../controllers/entries.js";

import { authenticateToken } from "../middlewares/authenticateToken.js";

const router = express.Router();

router.post("/addEntry", authenticateToken, addEntry);
router.get("/getTopTen", authenticateToken, getTopTenEntries);
router.get("/getUserTop", authenticateToken, getUserTopEntry);

export default router;
