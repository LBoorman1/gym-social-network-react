import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
};

export const PostsSlice = createSlice({
  name: "Posts",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
  },
});

export const { setPosts } = PostsSlice.actions;

export default PostsSlice.reducer;
