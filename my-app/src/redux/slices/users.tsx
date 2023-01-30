import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: {
    items: [],
    status: "loading",
  },
};

const usersSlice = createSlice({
  name: "usersCollection",
  initialState,
  reducers: {},
});

export const usersReducers = usersSlice.reducer;
