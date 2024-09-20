import { configureStore } from "@reduxjs/toolkit";
import eatSlice from "./eatSliceReducer";
const store = configureStore({
  reducer: {
    friends: eatSlice,
  },
});
export default store;
