import { connect } from "react-redux";
import {
  selectTasks,
  selectSortField,
  selectSortDirection,
  selectPage
} from "../../ducks/tasks/selectors";

import {
  setSortField,
  setSortDirection,
  setPage,
  createTask
} from "../../ducks/tasks/reducer";

import TasksPage from "./TasksPage";

export default connect(
  state => ({
    tasks: selectTasks(state),
    sortField: selectSortField(state),
    sortDirection: selectSortDirection(state),
    page: selectPage(state)
  }),
  { setSortField, setSortDirection, setPage, createTask }
)(TasksPage);
