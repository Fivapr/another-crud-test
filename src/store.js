import { createStore, applyMiddleware } from "redux";
import { routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import createRootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

const initialState = {};
export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
const reducer = createRootReducer(history);

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(
    applyMiddleware(routerMiddleware(history), sagaMiddleware)
  )
);

sagaMiddleware.run(rootSaga);

export default store;
