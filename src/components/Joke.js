import React, { useState } from "react";
import { Grid, makeStyles, Button } from "@material-ui/core";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  jokeContainer: {
    margin: theme.spacing(3),
    fontSize: theme.spacing(4),
  },
}));

const Joke = () => {
  const classes = useStyles();
  const [showJoke, setShowJoke] = useState(false);
  const [joke, setJoke] = useState([]);

  const getJoke = () => {
    console.log("getting joke.....");
    axios
      .get("https://icanhazdadjoke.com", { headers: { Accept: "text/plain" } })
      .then((res) => {
        console.log("Jokes have been successfully retrieved!", res.data);
        setJoke(res.data);
      })
      .catch((err) => {
        console.log("there was an error: ", err);
      });
  };

  return (
    <Grid>
      <Grid item className={classes.jokeContainer}>
        {joke}
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          color="white"
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

export default Joke;
