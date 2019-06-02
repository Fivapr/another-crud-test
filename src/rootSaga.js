import { fork, all } from "redux-saga/effects";
import auth from "./ducks/auth/saga";
import tasks from "./ducks/tasks/saga";

export default function* rootSaga() {
  yield all([fork(auth), fork(tasks)]);
}
