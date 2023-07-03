import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./CounterSlice";

const store = configureStore({
  reducer: {
    weather: CounterSlice,
  },
});

export default store;
