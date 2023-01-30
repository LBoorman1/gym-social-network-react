import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";
import postRoutes from "./routes/posts.js";
import communityRoutes from "./routes/communities.js";
import leaderBoardRoutes from "./routes/leaderBoards.js";
import dotenv from "dotenv";
import { User } from "./models/user.js";
import PostMessage from "./models/postMessage.js";
import Community from "./models/community.js";
import CommunityUser from "./models/communityUser.js";
import leaderBoard from "./models/leaderBoard.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/communities", communityRoutes);
app.use("/api/leaderBoards", leaderBoardRoutes);

const CONNECTION_URL =
  "mongodb+srv://lukebwood:lukebwood123@cluster0.8ukh4lu.mongodb.net/?retryWrites=true&w=majority";
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

const findCommunities = async () => {
  const communities = await Community.find({});
  console.log(communities);
};

const findCommunityUsers = async () => {
  const communityUsers = await CommunityUser.find({});
  console.log(communityUsers);
};

//populate allows "joins" in mongoose. Means that all data will be shown from foreign object
const testPopulate = async () => {
  const testing = await CommunityUser.find({})
    .populate("community")
    .select("community");
  console.log(testing);
};

const findLeaderBoards = async () => {
  const leaderBoards = await leaderBoard.find({});
  console.log(leaderBoards);
};

// findLeaderBoards();
// testPopulate();
// findCommunityUsers();
// findCommunities();
// findUsers();
// findPosts();
// deleteAllPosts();
