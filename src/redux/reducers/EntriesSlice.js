import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  entries: [],
  addEntryModal: false,
  entryMessage: null,
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
      const url = "http://localhost:5000/api/leaderBoards/addEntry";
      const res = await axios.post(url, entry, config);
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
  },
  extraReducers(builder) {
    builder.addCase(addLeaderBoardEntry.fulfilled, (state, action) => {
      state.entryMessage = action.payload.message;
    });
  },
});

export const { setAddEntryOpen } = EntriesSlice.actions;

export default EntriesSlice.reducer;
