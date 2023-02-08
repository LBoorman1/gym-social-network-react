import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  leaderBoards: [],
  userLeaderBoards: [],
  joiningMessage: null,
  activeLeaderBoard: null,
  activeLeaderBoardName: null,
};

export const getLeaderBoardsByUser = createAsyncThunk(
  "leaderBoards/getLeaderBoardsByUser",
  async (thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorisation: `Bearer ${token}`,
        },
      };
      const url = "http://localhost:5000/api/leaderBoards/retrieveByUser";
      const res = await axios.get(url, config);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

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
  async (leaderBoardId, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorisation: `Bearer ${token}`,
        },
      };
      const url = "http://localhost:5000/api/leaderBoards/join";
      const res = await axios.post(
        url,
        { leaderBoardId: leaderBoardId },
        config
      );
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
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
    setActiveLeaderBoard: (state, action) => {
      state.activeLeaderBoard = action.payload.id;
      state.activeLeaderBoardName = action.payload.name;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getLeaderBoards.fulfilled, (state, action) => {
        state.leaderBoards = state.leaderBoards = action.payload;
      })
      .addCase(addLeaderBoard.fulfilled, (state, action) => {
        state.leaderBoards.push(action.payload);
      })
      .addCase(joinLeaderBoard.fulfilled, (state, action) => {
        state.joiningMessage = action.payload.message;
        state.userLeaderBoards.push(action.payload.leaderBoard);
      })
      .addCase(getLeaderBoardsByUser.fulfilled, (state, action) => {
        state.userLeaderBoards = action.payload;
      });
  },
});

export const { setLeaderBoards, setActiveLeaderBoard } =
  LeaderBoardsSlice.actions;

export default LeaderBoardsSlice.reducer;
