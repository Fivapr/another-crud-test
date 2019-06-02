import React, { useState, Fragment } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: 8,
    marginRight: 8,
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  }
}));

const EditPage = ({ editTask, location }) => {
  const id = location.state.id;
  const classes = useStyles();
  const [text, setText] = useState("");
  const [status, setStatus] = useState(0);

  const handleEdit = () => {
    editTask({ id, text, status });
  };

  return (
    <div className={classes.root}>
      <TextField
        label="text"
        className={classes.textField}
        value={text}
        onChange={e => setText(e.target.value)}
        margin="normal"
      />
      <Select value={status} onChange={e => setStatus(e.target.value)}>
        <MenuItem value={0}>0</MenuItem>
        <MenuItem value={10}>10</MenuItem>
      </Select>
      <Button
        variant="contained"
        className={classes.button}
        onClick={handleEdit}
      >
        Edit
      </Button>
    </div>
  );
};

export default EditPage;
