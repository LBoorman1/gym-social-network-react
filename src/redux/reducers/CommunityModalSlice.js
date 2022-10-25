import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  communityIsOpen: false,
};

export const CommunityModalSlice = createSlice({
  name: "CommunityModal",
  initialState,
  reducers: {
    setCommunityOpen: (state) => {
      state.communityIsOpen = !state.communityIsOpen;
    },
  },
});

export const { setCommunityOpen } = CommunityModalSlice.actions;

export default CommunityModalSlice.reducer;
