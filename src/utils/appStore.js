import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import mobileReducer from "./mobileMenuSlice";

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
    mobile: mobileReducer,
  },
});

export default appStore;
