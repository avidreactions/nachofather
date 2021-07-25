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
    left: "50%",
    transform: "translate(-50%)",
    zIndex: "1",
    color: "red",
    opacity: "0.4",
  },
  grass: {
    display: "inline-block",
    position: "absolute",
    bottom: "0",
    "& img": {
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  doberman: {
    maxWidth: "200px",
    "& img": {
      width: "100%",
    },
    margin: theme.spacing(0, 3),
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
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

  return (
    <Grid container justify="center" direction="row" alignItems="center">
      <Grid item className={`${classes.doberman} ${classes.flip}`}>
        <img src={doggy} alt="" />
      </Grid>
      <Grid item>
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item>
            <IconButton
              aria-label="delete"
              onClick={getDog}
              className={classes.getDogButton}
            >
              <PetsIcon style={{ fontSize: "50px" }} />
            </IconButton>
          </Grid>
          <Grid item>
            <img src={dogData} alt="doggo" className={classes.dogImg} />
          </Grid>
        </Grid>
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
