import { createAction, createReducer } from "redux-act";

const initialState = {
  data: [],
  sortField: "id",
  sortDirection: "asc",
  page: 1
};

export const setTasks = createAction("tasks/setTasks");
export const setSortField = createAction("tasks/setSortField");
export const setSortDirection = createAction("tasks/setSortDirection");
export const setPage = createAction("tasks/setPage");

export const createTask = createAction("tasks/createTask");
export const editTask = createAction("tasks/editTask");

const reducer = createReducer({}, initialState)
  .on(setTasks, (state, data) => ({ ...state, data }))
  .on(setSortField, (state, { sortField }) => ({ ...state, sortField }))
  .on(setSortDirection, (state, { sortDirection }) => ({
    ...state,
    sortDirection
  }))
  .on(setPage, (state, { page }) => ({ ...state, page }));

export default reducer;
