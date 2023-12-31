import { createSlice } from "@reduxjs/toolkit";

const mobileMenuSlice = createSlice({
  name: "mobile",
  initialState: {
    isMenuOpen: false,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
  },
});

export const { toggleMenu, closeMenu } = mobileMenuSlice.actions;

export default mobileMenuSlice.reducer;
