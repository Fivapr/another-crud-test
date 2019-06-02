import React, { useState, Fragment } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
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

const LoginPage = ({ login }) => {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    login({ username, password });
  };

  return (
    <div className={classes.root}>
      <TextField
        label="username"
        className={classes.textField}
        value={username}
        onChange={e => setUsername(e.target.value)}
        margin="normal"
      />
      <TextField
        label="password"
        className={classes.textField}
        value={password}
        onChange={e => setPassword(e.target.value)}
        margin="normal"
      />
      <Button
        variant="contained"
        className={classes.button}
        onClick={handleLogin}
      >
        Login
      </Button>
    </div>
  );
};

export default LoginPage;
