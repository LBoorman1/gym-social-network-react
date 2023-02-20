import express from "express";
import {
  createComment,
  deleteComment,
  getComments,
} from "../controllers/comments.js";

import { authenticateToken } from "../middlewares/authenticateToken.js";

const router = express.Router();

router.post("/create", authenticateToken, createComment);
router.get("/retrieve", authenticateToken, getComments);
router.post("/delete", authenticateToken, deleteComment);

export default router;
