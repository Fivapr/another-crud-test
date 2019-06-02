import { connect } from "react-redux";
import { login } from "../../ducks/auth/reducer";

import LoginPage from "./LoginPage";

export default connect(
  () => ({}),
  { login }
)(LoginPage);
