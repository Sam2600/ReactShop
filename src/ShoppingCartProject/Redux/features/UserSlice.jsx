import { createSlice } from "@reduxjs/toolkit";
import users from "../../../db/data.json";

const initialState = {
  name: null,
  email: null,
  isPremium: false,
  profile: "",
};

const UserSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    login: (state, action) => {
      const userData = users;

      const authUser = userData.find(
        (user) => user.email === action.payload?.email
      );

      console.log(authUser);

      if (authUser) {
        state.email = authUser.email;
        state.name = authUser.name;
        state.isPremium = authUser.isPremium;
        state.profile = authUser.profile;
      }
    },

    logout: (state, action) => {
      state.name = null;
      state.email = null;
      state.isPremium = false;
      state.profile = "";
    },
  },
});

export const user = (state) => state.user;

export const { login, logout } = UserSlice.actions;

export default UserSlice.reducer;
