import Header from "./Header";

import { connect } from "react-redux";
import { selectLoggedIn } from "../../ducks/auth/selectors";
import { logout } from "../../ducks/auth/reducer";
import { withRouter } from "react-router";

export default connect(
  state => ({ loggedIn: selectLoggedIn(state) }),
  { logout }
)(withRouter(Header));
