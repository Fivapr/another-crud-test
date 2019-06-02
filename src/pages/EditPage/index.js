import EditPage from "./EditPage";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import { editTask } from "../../ducks/tasks/reducer";

export default connect(
  () => ({}),
  { editTask }
)(withRouter(EditPage));
