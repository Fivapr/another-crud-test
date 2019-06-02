import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import TasksPage from "./pages/TasksPage";
import LoginPage from "./pages/LoginPage";
import EditPage from "./pages/EditPage";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/" component={TasksPage} />
        <Route exact path="/edit/:id" component={EditPage} />
      </Switch>
    </Router>
  );
}

export default App;
