import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  leaderBoards: [],
};

export const getLeaderBoards = createAsyncThunk(
  "leaderBoards/getLeaderBoards",
  async (activeCommunity, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const url = "http://localhost:5000/api/leaderBoards/retrieveByCommunity";
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

export const addLeaderBoard = createAsyncThunk(
  "leaderBoards/addLeaderBoard",
  async (leaderBoard) => {
    try {
      const token = localStorage.getItem("token");
      const url = "http://localhost:5000/api/leaderBoards/create";
      const res = await axios.post(url, leaderBoard, {
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

export const joinLeaderBoard = createAsyncThunk(
  "leaderBoards/joinLeaderBoard",
  async (leaderBoard) => {
    try {
      const token = localStorage.getItem("token");
      const url = "http://localhost:5000/api/leaderBoards/join";
      const res = await axios.post(url, leaderBoard, {
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

export const LeaderBoardsSlice = createSlice({
  name: "LeaderBoards",
  initialState,
  reducers: {
    setLeaderBoards: (state, action) => {
      state.posts = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getLeaderBoards.fulfilled, (state, action) => {
        state.leaderBoards = state.leaderBoards = action.payload;
      })
      .addCase(addLeaderBoard.fulfilled, (state, action) => {
        state.leaderBoards.push(action.payload);
      });
  },
});

export const { setLeaderBoards } = LeaderBoardsSlice.actions;

export default LeaderBoardsSlice.reducer;
