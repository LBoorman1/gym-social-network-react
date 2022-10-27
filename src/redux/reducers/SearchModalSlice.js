import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchIsOpen: false,
};

export const SearchModalSlice = createSlice({
  name: "SearchModal",
  initialState,
  reducers: {
    setSearchOpen: (state) => {
      state.searchIsOpen = !state.searchIsOpen;
    },
  },
});

export const { setSearchOpen } = SearchModalSlice.actions;

export default SearchModalSlice.reducer;
