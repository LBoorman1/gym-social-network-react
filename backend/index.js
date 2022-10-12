import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";
import postRoutes from "./routes/posts.js";
import communityRoutes from "./routes/communities.js";
import dotenv from "dotenv";
import { User } from "./models/user.js";
import PostMessage from "./models/postMessage.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/communities", communityRoutes);

const CONNECTION_URL =
  "REDACTED";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log("Server running on :" + PORT)))
  .catch((error) => console.log(error.message));

const findUsers = async () => {
  const users = await User.find({});
  console.log(users);
};

const findPosts = async () => {
  const posts = await PostMessage.find({});
  console.log(posts);
};

const deleteAllPosts = async () => {
  await PostMessage.deleteMany();
};

// findUsers();
// findPosts();
// deleteAllPosts();
