import { createAction, createReducer } from "redux-act";

const initialState = { loggedIn: false };

export const login = createAction("auth/login");
export const loginSuccess = createAction("auth/loginSuccess");
export const logout = createAction("auth/logout");
export const logoutSuccess = createAction("auth/logoutSuccess");

const reducer = createReducer({}, initialState)
  .on(loginSuccess, state => ({ loggedIn: true }))
  .on(logoutSuccess, state => ({ loggedIn: false }));

export default reducer;
