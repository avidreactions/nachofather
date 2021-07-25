import React, { useState, useEffect } from "react";
import { IconButton, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import grass from "../files/images/grass1.png";
import PetsIcon from "@material-ui/icons/Pets";

const useStyles = makeStyles((theme) => ({
  catPic: {
    width: "100%",
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

  getCatButton: {
    color: "red",
    opacity: "0.4",
  },
}));

const Cat = () => {
  const classes = useStyles();
  const [catData, setCatData] = useState({});

  useEffect(() => {
    getCatPics();
    return () => {
      setCatData({});
    };
  }, []); // eslint-disable-line

  const getCatPics = () => {
    axios
      .get("https://api.thecatapi.com/v1/images/search")
      .then((res) => {
        setCatData(res.data[0]);
        console.log(res.data[0]);
      })
      .catch((err) => {});
  };

  // const getPub = () => {
  //   axios
  //     .get("https://api.publicapis.org/random")
  //     .then((res) => {
  //       console.log("randomness!", res);
  //     })
  //     .catch((err) => console.log(err));
  // };

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      className={classes.pageSize}
    >
      <Grid item>
        <IconButton
          aria-label="delete"
          onClick={getCatPics}
          className={classes.getCatButton}
        >
          <PetsIcon style={{ fontSize: "50px" }} />
        </IconButton>
      </Grid>
      <Grid item>
        <img src={catData.url} alt="cats" className={classes.catPic} />
      </Grid>
      <Grid item className={classes.grass}>
        <img src={grass} alt="some grass" />
      </Grid>
      <div></div>
    </Grid>
  );
};
export default Cat;
