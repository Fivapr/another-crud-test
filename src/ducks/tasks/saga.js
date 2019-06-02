import {
  all,
  call,
  fork,
  put,
  take,
  takeEvery,
  select
} from "redux-saga/effects";
import {
  setTasks,
  setSortField,
  setSortDirection,
  setPage,
  createTask,
  editTask
} from "./reducer";
import { selectSortField, selectSortDirection, selectPage } from "./selectors";
import { push } from "connected-react-router";
import api from "../../api";

function* requestTasksSaga({ payload = {} } = {}) {
  // one of updated filters
  const { sortField, sortDirection, page } = payload;
  // rest of old filters
  const oldSortField = yield select(selectSortField);
  const oldSortDirection = yield select(selectSortDirection);
  const oldPage = yield select(selectPage);

  try {
    const { status = "", message = {} } = yield call(api.getTasks, {
      sortField: sortField || oldSortField,
      sortDirection: sortDirection || oldSortDirection,
      page: page || oldPage
    });
    const { tasks = [] } = message;

    if (status === "ok") {
      yield put(setTasks(tasks));
    }
  } catch (error) {
    console.log(error);
  }
}

function* editTaskSaga({ payload = {} } = {}) {
  const { id, text, status: taskStatus } = payload;

  try {
    const { status = "", message = {} } = yield call(api.editTask, {
      id,
      text,
      status: taskStatus
    });

    if (status === "ok") {
      yield put(push("/"));
      yield fork(requestTasksSaga);
    }
  } catch (error) {
    console.log(error);
  }
}

function* createTaskSaga({ payload = {} } = {}) {
  const { username, email, text } = payload;

  try {
    const { status = "", message = {} } = yield call(api.createTask, {
      username,
      email,
      text
    });

    if (status === "ok") {
      yield fork(requestTasksSaga);
    }
  } catch (error) {
    console.log(error);
  }
}

export default function* tasksSaga() {
  // init store
  yield fork(requestTasksSaga);
  // handle filter changes
  yield all([
    takeEvery(setSortField, requestTasksSaga),
    takeEvery(setSortDirection, requestTasksSaga),
    takeEvery(setPage, requestTasksSaga),

    takeEvery(editTask, editTaskSaga),
    takeEvery(createTask, createTaskSaga)
  ]);
}
