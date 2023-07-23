import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "dark",
  userId: "63701cc1f03239b7f700000e",
};
// this is a user Id in the mock data. 

// kinda weird, we arent gonna be doing userauth which is dumb. 

// alright so basically, we stay logged into shubhs account then. It doesnt make sense to make all the loads an account so gonna have to see

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

export const { setMode } = globalSlice.actions;

export default globalSlice.reducer;
