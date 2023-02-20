import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  addCommentModal: false,
};

export const addComment = createAsyncThunk(
  "comments/addComment",
  async (comment, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorisation: `Bearer ${token}`,
        },
      };
      const url = "http://localhost:5000/api/comments/create";
      const res = await axios.post(url, comment, config);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const CommentsSlice = createSlice({
  name: "Comments",
  initialState,
  reducers: {
    setAddCommentOpen: (state) => {
      state.addCommentModal = !state.addCommentModal;
    },
  },
});

export const { setAddCommentOpen } = CommentsSlice.actions;

export default CommentsSlice.reducer;
