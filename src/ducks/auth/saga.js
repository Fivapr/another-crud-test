import { all, call, fork, put, take, takeEvery } from "redux-saga/effects";
import { login, loginSuccess, logout, logoutSuccess } from "./reducer";
import { push } from "connected-react-router";
import api from "../../api";

function* loginSaga({ payload } = {}) {
  const { username, password } = payload;

  try {
    yield call(api.login, { username, password });
    yield put(loginSuccess());
    yield put(push("/"));
  } catch (error) {
    console.log(error);
  }
}

function* logoutSaga() {
  try {
    yield call(api.logout);
    yield put(logoutSuccess());
    yield put(push("/login"));
  } catch (error) {
    console.log(error);
  }
}

export default function* loginRootSaga() {
  yield all([takeEvery(login, loginSaga), takeEvery(logout, logoutSaga)]);
}
