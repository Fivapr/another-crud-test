import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    margin: 8
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

function TaskCard({ task, history, loggedIn }) {
  console.log(task);
  const classes = useStyles();
  const linkToCard = () => {
    history.push(`edit/${task.id}`, { id: task.id });
  };

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {task.status === 10 ? "completed" : "uncompleted"}
        </Typography>
        <Typography variant="h5" component="h2">
          {task.username}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {task.email}
        </Typography>
        <Typography variant="body2" component="p">
          {task.text}
        </Typography>
      </CardContent>
      {loggedIn && (
        <CardActions>
          <Button size="small" onClick={linkToCard}>
            Edit
          </Button>
        </CardActions>
      )}
    </Card>
  );
}

export default TaskCard;
