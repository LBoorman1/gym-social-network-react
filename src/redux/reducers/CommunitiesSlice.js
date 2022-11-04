//this slice handles storing the user's communities and holding the community
//that they are currently viewing.

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  communities: [],
  activeCommunity: "",
};

export const CommunitiesSlice = createSlice({
  name: "Communities",
  initialState,
  reducers: {
    setActiveCommunity: (state, action) => {
      state.activeCommunity = action.payload;
    },
    setCommunities: (state, action) => {
      state.communities = action.payload;
    },
  },
});

export const { setActiveCommunity, setCommunities } = CommunitiesSlice.actions;

export default CommunitiesSlice.reducer;
