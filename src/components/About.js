import React from "react";
import { makeStyles } from "@material-ui/core";
import pfamtx from "../files/images/pfamtx.jpg";

const useStyles = makeStyles((theme) => ({
  aboutContainer: {
    textAlign: "center",
    "& h1": {
      margin: theme.spacing(1, 0),
    },
  },
}));

const About = () => {
  const classes = useStyles();
  return (
    <div className={classes.aboutContainer}>
      <h1>Probably Flooding And Muddy in Texas</h1>
      <img src={pfamtx} alt="pfamtx" />
      <p>
        Howdy! This was a fun project website built for children using various
        API's.
      </p>
    </div>
  );
};

export default About;
