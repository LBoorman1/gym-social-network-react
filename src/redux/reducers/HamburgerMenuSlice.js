import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hamburgerIsOpen: false,
};

export const HamburgerMenuSlice = createSlice({
  name: "HamburgerMenu",
  initialState,
  reducers: {
    setHamburgerOpen: (state) => {
      state.hamburgerIsOpen = !state.hamburgerIsOpen;
    },
  },
});

export const { setHamburgerOpen } = HamburgerMenuSlice.actions;

export default HamburgerMenuSlice.reducer;
