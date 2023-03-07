import express from "express";
import {
  getPosts,
  createPost,
  retrieveByCommunity,
} from "../controllers/posts.js";
import { authenticateToken } from "../middlewares/authenticateToken.js";

const router = express.Router();

router.get("/", getPosts);
router.post("/create", authenticateToken, createPost);
router.get("/retrieveByCommunity", authenticateToken, retrieveByCommunity);

export default router;
