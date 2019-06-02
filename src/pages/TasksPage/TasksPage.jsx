import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import Task from "../../components/Task";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }
});

const TasksPage = ({
  tasks,
  sortField,
  setSortField,
  sortDirection,
  setSortDirection,
  page,
  setPage,
  createTask
}) => {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const handleSortFieldChange = e => {
    setSortField({ sortField: e.target.value });
  };
  const handleSortDirectionChange = e => {
    setSortDirection({ sortDirection: e.target.value });
  };

  const decrementPage = () => {
    setPage({ page: page - 1 });
  };

  const incrementPage = () => {
    setPage({ page: page + 1 });
  };

  const handleCreateTask = () => {
    createTask({ username, email, text });
  };

  return (
    <div className={classes.root}>
      <Select value={sortField} onChange={handleSortFieldChange}>
        <MenuItem value="id">id</MenuItem>
        <MenuItem value="username">username</MenuItem>
        <MenuItem value="email">email</MenuItem>
        <MenuItem value="status">status</MenuItem>
      </Select>

      <Select value={sortDirection} onChange={handleSortDirectionChange}>
        <MenuItem value="asc">ascending</MenuItem>
        <MenuItem value="desc">descending</MenuItem>
      </Select>

      {tasks.map(task => (
        <Task task={task} key={task.id} />
      ))}

      <div>
        <Button
          variant="contained"
          className={classes.button}
          onClick={decrementPage}
        >
          Prev
        </Button>
        <span>{page}</span>
        <Button
          variant="contained"
          className={classes.button}
          onClick={incrementPage}
        >
          Next
        </Button>
      </div>
      <div className={classes.root}>
        <TextField
          label="username"
          className={classes.textField}
          value={username}
          onChange={e => setUsername(e.target.value)}
          margin="normal"
        />
        <TextField
          label="email"
          className={classes.textField}
          value={email}
          onChange={e => setEmail(e.target.value)}
          margin="normal"
        />
        <TextField
          label="text"
          className={classes.textField}
          value={text}
          onChange={e => setText(e.target.value)}
          margin="normal"
        />
        <Button
          variant="contained"
          className={classes.button}
          onClick={handleCreateTask}
        >
          Create
        </Button>
      </div>
    </div>
  );
};

TasksPage.defaultProps = {
  tasks: []
};

export default TasksPage;
