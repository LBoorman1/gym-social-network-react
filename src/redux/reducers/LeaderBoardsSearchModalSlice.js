import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  leaderBoardSearchIsOpen: false,
};

export const LeaderBoardsSearchModalSlice = createSlice({
  name: "LeaderBoardsSearchModal",
  initialState,
  reducers: {
    setLeaderBoardSearchOpen: (state) => {
      state.leaderBoardSearchIsOpen = !state.leaderBoardSearchIsOpen;
    },
  },
});

export const { setLeaderBoardSearchOpen } =
  LeaderBoardsSearchModalSlice.actions;

export default LeaderBoardsSearchModalSlice.reducer;
