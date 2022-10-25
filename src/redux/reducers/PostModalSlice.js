import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  postIsOpen: false,
};

export const PostModalSlice = createSlice({
  name: "PostModal",
  initialState,
  reducers: {
    setPostOpen: (state) => {
      state.postIsOpen = !state.postIsOpen;
    },
  },
});

export const { setPostOpen } = PostModalSlice.actions;

export default PostModalSlice.reducer;
