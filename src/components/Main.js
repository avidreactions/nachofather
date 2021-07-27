import React, { useState } from "react";
import { Button, Grid, makeStyles, TextField } from "@material-ui/core";
import FadeIn from "react-fade-in";
import Glitch from "./Glitch";
import logo from "../files/images/logo.png";

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
    fontSize: "24px",
  },
  jobTitle: {
    transition: "2s",
    fontDize: "4em",
    fontFamily: "Ultra",
    display: "inline-block",
    position: "relative",
    bottom: "40px",
  },
  pfLogo: {
    maxWidth: theme.spacing(60),
    zIndex: "1",
    "& img": {
      width: "100%",
    },
  },
}));

const Main = () => {
  const classes = useStyles();
  const [fakePassword, setFakePassword] = useState("");
  const [showButton, setShowButton] = useState(false);

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
    <Grid
      container
      direction="column"
      justify="space-between"
      alignItems="center"
    >
      <Grid item>
        <Glitch fakePassword={fakePassword} />
      </Grid>
      {showButton && (
        <>
          <FadeIn item className={classes.pfLogo}>
            <img src={logo} alt="logo" />
          </FadeIn>
          <FadeIn>
            <Button
              href={process.env.REACT_APP_LOCATION}
              className={classes.obscureLink}
            >
              Enter Here
            </Button>
          </FadeIn>
        </>
      )}
      <form className={classes.obscureField} noValidate onSubmit={handleSubmit}>
        <TextField id="clearMe" onChange={handleChange} />
      </form>
    </Grid>
  );
};

export default Main;
