import { configureStore } from "@reduxjs/toolkit";
import eatSlice from "./eatSliceReducer";
const store = configureStore({
  reducer: {
    eat: eatSlice,
  },
});
export default store;
