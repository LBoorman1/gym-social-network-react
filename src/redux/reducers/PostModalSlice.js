import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

export const PostModalSlice = createSlice({
  name: "PostModal",
  initialState,
  reducers: {
    setOpen: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { setOpen } = PostModalSlice.actions;

export default PostModalSlice.reducer;
