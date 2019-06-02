import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import auth from "./ducks/auth/reducer";
import tasks from "./ducks/tasks/reducer";

const rootReducer = history =>
  combineReducers({ router: connectRouter(history), auth, tasks });

export default rootReducer;
