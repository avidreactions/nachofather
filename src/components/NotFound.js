import React from "react";
import { makeStyles } from "@material-ui/core";
import eagle from "../files/images/404eagle.png";

const useStyles = makeStyles((theme) => ({
  eagle: {
    width: "50%",
    textAlign: "center",
    "& img": {
      width: "100%",
    },
  },
}));

const NotFound = () => {
  const classes = useStyles();
  return (
    <div className={classes.eagle}>
      <img src={eagle} alt="eagle" />
    </div>
  );
};

export default NotFound;
