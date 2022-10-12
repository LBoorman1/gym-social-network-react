import express from "express";
import { createCommunity, joinCommunity } from "../controllers/communities.js";

const router = express.Router();

router.post("/create", createCommunity);
router.post("/join", joinCommunity);

export default router;
