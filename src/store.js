import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./features/uiSlice";
export const store = configureStore({
  reducer: {
    ui: uiSlice,
  },
});
