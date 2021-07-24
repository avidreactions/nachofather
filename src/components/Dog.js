import React, { useState, useEffect } from "react";
import { Grid, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PetsIcon from "@material-ui/icons/Pets";
import axios from "axios";
import grass from "../files/images/grass1.png";
import doggy from "../files/images/doberman.png";

const useStyles = makeStyles((theme) => ({
  dogContainer: {
    width: theme.spacing(60),
    height: theme.spacing(60),
  },
  dogImg: {
    maxWidth: "100%",
  },
  getDogButton: {
    display: "inline-block",
    position: "absolute",
    top: "64px",
    left: "200px",
  },
  grass: {
    display: "inline-block",
    position: "absolute",
    bottom: "0",
    "& img": {
      width: "100%",
    },
  },
  doberman: {
    maxWidth: "200px",
    "& img": {
      width: "100%",
    },
    margin: theme.spacing(0, 3),
  },
  flip: {
    transform: "rotateY(180deg)",
  },
}));

const Dog = () => {
  const classes = useStyles();
  const [dogData, setDogData] = useState({});
  useEffect(() => {
    getDog();
    return () => {
      setDogData({});
    };
  }, []);

  const getDog = () => {
    axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then((res) => {
        setDogData(res.data.message);
      })
      .catch((err) => {});
  };

  console.log("howday", dogData);
  return (
    <Grid container justify="center" direction="row" alignItems="center">
      <Grid item className={`${classes.doberman} ${classes.flip}`}>
        <img src={doggy} alt="" />
      </Grid>
      <Grid item>
        <IconButton
          aria-label="delete"
          onClick={getDog}
          className={classes.getDogButton}
        >
          <PetsIcon style={{ fontSize: "50px" }} />
        </IconButton>
        <img src={dogData} alt="doggo" className={classes.dogImg} />
      </Grid>
      <Grid item className={classes.doberman}>
        <img src={doggy} alt="" />
      </Grid>
      <div className={classes.grass}>
        <img src={grass} alt="some grass" />
      </div>
    </Grid>
  );
};
export default Dog;
