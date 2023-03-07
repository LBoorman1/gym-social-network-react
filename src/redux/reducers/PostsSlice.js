import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setPostOpen } from "./PostModalSlice";

const initialState = {
  posts: [],
};

//adding the async thunk for getting the posts
export const getPosts = createAsyncThunk(
  "posts/getPosts",
  async (activeCommunity, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const url = "http://localhost:5000/api/posts/retrieveByCommunity";
      const res = await axios.get(url, {
        params: {
          communityId: activeCommunity,
        },
        headers: {
          Authorisation: `Bearer ${token}`,
        },
      });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const addPost = createAsyncThunk(
  "posts/addPost",
  async (post, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const url = "http://localhost:5000/api/posts/create";
      const res = await axios.post(url, post, {
        headers: {
          Authorisation: `Bearer ${token}`,
        },
      });
      return res.data;
    } catch (error) {
      return error.message;
    }
  }
);

export const PostsSlice = createSlice({
  name: "Posts",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
      })
      .addCase(addPost.fulfilled, (state, action) => {
        state.posts.push(action.payload);
      });
  },
});

export const { setPosts } = PostsSlice.actions;

export default PostsSlice.reducer;
