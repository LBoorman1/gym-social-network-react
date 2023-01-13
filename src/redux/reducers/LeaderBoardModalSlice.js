import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  leaderBoardIsOpen: false,
};

export const LeaderBoardModalSlice = createSlice({
  name: "LeaderBoardModal",
  initialState,
  reducers: {
    setLeaderBoardOpen: (state) => {
      state.leaderBoardIsOpen = !state.leaderBoardIsOpen;
    },
  },
});

export const { setLeaderBoardOpen } = LeaderBoardModalSlice.actions;

export default LeaderBoardModalSlice.reducer;
