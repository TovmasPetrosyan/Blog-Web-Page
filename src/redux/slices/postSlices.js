// reducers/postSlice.js
import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "posts",
  initialState: {
    userPosts: [],
    loading: false,
    error: null,
    // Add other state if needed
  },
  reducers: {
    setUserPosts: (state, action) => {
      state.userPosts = action.payload;
    },
    getUserPostsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    getUserPostsSuccess: (state, action) => {
      state.loading = false;
      state.userPosts = action.payload;
    },
    getUserPostsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    // Add other reducers if needed
  },
});

export const {
  setUserPosts,
  getUserPostsStart,
  getUserPostsSuccess,
  getUserPostsFailure,
} = postSlice.actions;
export const selectUserPosts = (state) => state.posts.userPosts;
export default postSlice.reducer;