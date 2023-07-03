import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getData = createAsyncThunk("counter/getData", async (_) => {
  const res = axios.get(
    "https://api.openweathermap.org/data/2.5/weather?q=cairo&appid=67e042512a5a6b7d860856140a0ab4c1"
  );
  return res;
});

export const specificCountry = createAsyncThunk(
  "counter/specificCountry",
  async (city) => {
    const res = axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=67e042512a5a6b7d860856140a0ab4c1`
    );
    return res;
  }
);

const CounterSlice = createSlice({
  name: "counter",
  initialState: {
    sum: 0,
    weather: [],
  },
  reducers: {
    increment: (state) => {
      state.sum++;
    },
    decrement: (state) => {
      state.sum--;
    },
  },
  extraReducers: {
    [getData.pending]: (state, action) => {
      console.log("loadingggg");
    },
    [getData.fulfilled]: (state, action) => {
      state.weather = action.payload.data;
    },
    [specificCountry.pending]: () => {
      console.log("ws3333333333333333333333");
    },
    [specificCountry.fulfilled]: (state, action) => {
      state.weather = action.payload.data;
    },
  },
});

export const { increment, decrement } = CounterSlice.actions;
export default CounterSlice.reducer;

//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
//67e042512a5a6b7d860856140a0ab4c1
