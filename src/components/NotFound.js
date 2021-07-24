import React from "react";
import { makeStyles, Grid } from "@material-ui/core";
import nachofather from "../files/images/nachofather.jpg";

const useStyles = makeStyles((theme) => ({
  background: {
    height: "45vh",
    textAlign: "center",
    "& img": {
      width: "65%",
    },
  },
  title: {
    fontSize: theme.spacing(10),
    fontWeight: "bold",
  },
  bottomWording: {
    fontSize: theme.spacing(4),
  },
}));

const NotFound = () => {
  const classes = useStyles();
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Grid item>
        <p className={classes.title}>404</p>
      </Grid>
      <Grid item className={classes.background}>
        <img src={nachofather} alt="vader with nachos" />
      </Grid>
      <Grid item>
        <p className={classes.bottomWording}>That page doesn't exist...</p>
      </Grid>
    </Grid>
  );
};

export default NotFound;
