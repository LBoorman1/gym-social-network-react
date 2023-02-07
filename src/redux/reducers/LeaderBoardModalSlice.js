import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  leaderBoardIsOpen: false,
  leaderBoardDisplayOpen: false,
};

export const LeaderBoardModalSlice = createSlice({
  name: "LeaderBoardModal",
  initialState,
  reducers: {
    setLeaderBoardOpen: (state) => {
      state.leaderBoardIsOpen = !state.leaderBoardIsOpen;
    },
    setLeaderBoardDisplayOpen: (state) => {
      state.leaderBoardDisplayOpen = !state.leaderBoardDisplayOpen;
    },
  },
});

export const { setLeaderBoardOpen, setLeaderBoardDisplayOpen } =
  LeaderBoardModalSlice.actions;

export default LeaderBoardModalSlice.reducer;
