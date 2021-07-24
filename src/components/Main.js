import React, { useState } from "react";
import { Button, Grid, makeStyles, TextField } from "@material-ui/core";
import axios from "axios";
import Glitch from "./Glitch";

const useStyles = makeStyles((theme) => ({
  banner: {
    position: "relative",
    top: theme.spacing(30),
  },
  jokeContainer: {
    margin: theme.spacing(3),
    fontSize: theme.spacing(4),
  },
  obscureField: {
    opacity: "0.25",
    display: "inline-block",
    position: "absolute",
    bottom: "0",
    right: "0",
  },
  obscureLink: {
    display: "inline-block",
    position: "absolute",
    bottom: "0",
  },
}));

const Main = () => {
  const classes = useStyles();
  const [showJoke, setShowJoke] = useState(false);
  const [joke, setJoke] = useState([]);
  const [fakePassword, setFakePassword] = useState("");
  const [showButton, setShowButton] = useState(false);

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

  const clearMe = () => {
    const input = document.getElementById("clearMe");
    input.value = "";
  };

  const handleChange = (e) => {
    setFakePassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const password = process.env.REACT_APP_SUPER_REAL_PASSWORDS;
    if (fakePassword === password) {
      setShowButton(true);
    }

    setFakePassword("");
    clearMe();
  };
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
      <Grid>
        <Glitch />
      </Grid>
      {showButton && (
        <Button
          href={process.env.REACT_APP_LOCATION}
          className={classes.obscureLink}
        >
          Push me
        </Button>
      )}
      <form className={classes.obscureField} noValidate onSubmit={handleSubmit}>
        <TextField id="clearMe" onChange={handleChange} />
      </form>
    </Grid>
  );
};

export default Main;
