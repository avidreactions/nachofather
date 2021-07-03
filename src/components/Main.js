import React, { useState } from "react";
import { Button, Grid, makeStyles } from "@material-ui/core";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  banner: {
    position: "relative",
    top: theme.spacing(30),
  },
  jokeContainer: {
    margin: theme.spacing(3),
    fontSize: theme.spacing(4),
  },
}));

const Main = () => {
  const classes = useStyles();
  const [showJoke, setShowJoke] = useState(false);
  const [joke, setJoke] = useState([]);
  const getJoke = () => {
    console.log("getting joke.....");
    axios
      .get("https://icanhazdadjoke.com", { headers: { Accept: "text/plain" } })
      .then((res) => {
        console.log("Jokes have been successfully retrieved!");
        setJoke(res.data);
      })
      .catch((err) => {
        console.log("there was an error: ", err);
      });
  };
  console.log("HERES THE JOKE!", joke);
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Grid item className={classes.jokeContainer}>
        {joke}
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            setShowJoke(!showJoke);
            getJoke();
          }}
        >
          get a joke
        </Button>
      </Grid>
    </Grid>
  );
};

export default Main;
