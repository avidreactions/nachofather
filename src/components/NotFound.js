import React from "react";
import { makeStyles } from "@material-ui/core";
import nachofather from "../files/images/nachofather.jpg";

const useStyles = makeStyles((theme) => ({
  nachoContainer: {
    textAlign: "center",
    marginTop: theme.spacing(3),
  },
}));

const NotFound = () => {
  const classes = useStyles();
  return (
    <div className={classes.nachofather}>
      <img src={nachofather} alt="vader with nachos" />
    </div>
  );
};

export default NotFound;
