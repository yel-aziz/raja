import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { string } from "prop-types";

export interface LoginState {
  statelogin: boolean;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  avatar: string;
}

const initialState: LoginState = {
  statelogin: false,
  firstName: "null",
  lastName: "null",
  phoneNumber: "null",
  avatar: "",
  email: "",
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    Auth: (state, action: PayloadAction<any>) => {
      state.statelogin = !state.statelogin;
      (state.firstName = action.payload.data.user.firstName),
        (state.lastName = action.payload.data.user.lastName),
        (state.phoneNumber = action.payload.data.user.phone),
        (state.avatar = action.payload.data.user.avatar);
      state.email = action.payload.data.user.email;

    },
    setLogin: (state, action: PayloadAction<any>) => {
      const data = JSON.parse(action.payload);

      state.statelogin = true;
      state.firstName = data.firstName;
      state.lastName = data.lastName;
      state.email = data.email;
      state.phoneNumber = data.phone;
      state.avatar = data.avatar;

    },
    setDeLogde: (state) => {
    

      state.statelogin = false;
    },
  },
});

export const { Auth, setLogin, setDeLogde } = loginSlice.actions;

export default loginSlice.reducer;
