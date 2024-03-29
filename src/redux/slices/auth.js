import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: !!localStorage.getItem("userId"),
  email: null,
  token: null,
  id: null,
  name: null,
};

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser(state, id) {
      // localStorage.setItem('userId', id)
      state.isLoggedIn = !!localStorage.getItem("userId");
    },
    setUser(state, action) {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
      state.name = action.payload.name;
    },
    removeUser(state) {
      state.email = null;
      state.token = null;
      state.id = null;
      state.name = null;
    },
  },
});

const { actions, reducer } = authSlice;
export const { loginUser, setUser, removeUser } = actions;
export default reducer;
