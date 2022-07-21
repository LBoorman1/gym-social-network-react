import express from "express";
import { getPosts, createPost } from "../controllers/posts.js";
import { authenticateToken } from "../middlewares/authenticateToken.js";

const router = express.Router();

router.get("/", getPosts); //http://localhost:5000/posts
router.post("/", authenticateToken, createPost);

export default router;
