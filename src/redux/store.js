import { configureStore } from "@reduxjs/toolkit";
import userRedux from "./username/username";

export const store = configureStore({
  reducer: {
    username: userRedux,
  },
});

export default store;
