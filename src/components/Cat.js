import React, { useState, useEffect } from "react";
import { IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import grass from "../files/images/grass1.png";
import PetsIcon from "@material-ui/icons/Pets";

const useStyles = makeStyles((theme) => ({
  dogContainer: {
    width: theme.spacing(60),
    height: theme.spacing(60),
  },
  dogImg: {
    maxWidth: "100%",
  },
  catImgContainer: {
    maxHeight: theme.spacing(50),
    maxWidth: theme.spacing(50),
    display: "inline-block",
    position: "absolute",
    zIndex: "1",
    "& img": {
      width: "100%",
    },
    top: "80px",
    left: "416px",
  },

  grass: {
    display: "inline-block",
    position: "absolute",
    bottom: "0",
    "& img": {
      width: "100%",
    },
  },
  pageSize: {
    height: "100%",
  },
  catScreen: {
    position: "absolute",
    maxWidth: "675px",
    display: "inline-block",
    bottom: "80px",
    left: "375px",
    "& img": {
      width: "100%",
    },
  },
  getCatButton: {
    position: "absolute",
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
    <div className={classes.pageSize}>
      {catData !== undefined && (
        <div className={classes.catImgContainer}>
          <img src={catData.url} alt="cats" />
        </div>
      )}
      <IconButton
        aria-label="delete"
        onClick={getCatPics}
        className={classes.getCatButton}
      >
        <PetsIcon style={{ fontSize: "50px" }} />
      </IconButton>
      <div className={classes.grass}>
        <img src={grass} alt="some grass" />
      </div>
    </div>
  );
};
export default Cat;
