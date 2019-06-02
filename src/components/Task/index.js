import Task from "./Task";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { selectLoggedIn } from "../../ducks/auth/selectors";

export default connect(
  state => ({ loggedIn: selectLoggedIn(state) }),
  {}
)(withRouter(Task));
