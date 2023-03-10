import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  topTenEntries: [],
  addEntryModal: false,
  entryMessage: null,
  toUpdate: false,
  userTopEntry: [],
  userProgress: [],
  proofViewOpen: false,
  activeEntry: null,
};

export const addLeaderBoardEntry = createAsyncThunk(
  "entries/addLeaderBoardEntry",
  async (entry, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorisation: `Bearer ${token}`,
        },
      };
      const url = "http://localhost:5000/api/entries/addEntry";
      const res = await axios.post(url, entry, config);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const getTopTenEntries = createAsyncThunk(
  "entries/getTopTenEntries",
  async (leaderBoardId, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const url = "http://localhost:5000/api/entries/getTopTen";
      const res = await axios.get(url, {
        params: {
          leaderBoardId: leaderBoardId,
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

export const getUserTopEntry = createAsyncThunk(
  "entries/getUserTopEntry",
  async (leaderBoardId, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const url = "http://localhost:5000/api/entries/getUserTop";
      const res = await axios.get(url, {
        params: {
          leaderBoardId: leaderBoardId,
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

export const getUserProgress = createAsyncThunk(
  "entries/getUserProgress",
  async (leaderBoardId, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const url = "http://localhost:5000/api/entries/getUserProgress";
      const res = await axios.get(url, {
        params: {
          leaderBoardId: leaderBoardId,
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

export const addReport = createAsyncThunk(
  "entries/addReport",
  async (entryId, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorisation: `Bearer ${token}`,
        },
      };
      const url = "http://localhost:5000/api/entries/addReport";
      const res = await axios.post(url, entryId, config);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const EntriesSlice = createSlice({
  name: "Entries",
  initialState,
  reducers: {
    setAddEntryOpen: (state) => {
      state.addEntryModal = !state.addEntryModal;
    },
    setToUpdate: (state, action) => {
      state.toUpdate = action.payload;
    },
    setProofViewOpen: (state, action) => {
      state.proofViewOpen = !state.proofViewOpen;
      state.activeEntry = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(addLeaderBoardEntry.fulfilled, (state, action) => {
        state.entryMessage = action.payload.message;
        state.toUpdate = action.payload.toUpdate;
      })
      .addCase(getTopTenEntries.fulfilled, (state, action) => {
        state.topTenEntries = action.payload;
      })
      .addCase(getUserTopEntry.fulfilled, (state, action) => {
        state.userTopEntry = action.payload;
      })
      .addCase(getUserProgress.fulfilled, (state, action) => {
        state.userProgress = action.payload;
      });
  },
});

export const { setAddEntryOpen, setToUpdate, setProofViewOpen } =
  EntriesSlice.actions;

export default EntriesSlice.reducer;
