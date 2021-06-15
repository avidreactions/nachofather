import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import vader from "../files/memes/nacho.jpg";

const useStyles = makeStyles((theme) => ({
  imageContainer: {},
}));

const Main = () => {
  const classes = useStyles();
  return (
    <Grid container justify="center">
      <Grid item className={classes.imageContainer}>
        <img src={vader} alt="Jarth Mader" />
      </Grid>
    </Grid>
  );
};

export default Main;
