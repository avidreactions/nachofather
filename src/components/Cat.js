import React, { useState, useEffect } from "react";
import { Grid, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PetsIcon from "@material-ui/icons/Pets";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  dogContainer: {
    width: theme.spacing(60),
    height: theme.spacing(60),
  },
  dogImg: {
    maxWidth: "100%",
  },
}));

const Cat = () => {
  const classes = useStyles();
  const [catData, setCatData] = useState({});
  useEffect(() => {
    getCat();
    return () => {
      setCatData({});
    };
  }, []);

  const getCat = () => {
    axios
      .get("https://api.thecatapi.com/v1/images/search")
      .then((res) => {
        setCatData(res.data[0]);
      })
      .catch((err) => {});
  };

  console.log("howday", catData);
  return (
    <Grid container justify="center" direction="column" alignItems="center">
      {catData !== undefined && (
        <>
          <Grid item>
            <IconButton aria-label="delete" onClick={getCat}>
              <PetsIcon style={{ fontSize: "50px" }} />
              <p>Click Me for Another!</p>
            </IconButton>
          </Grid>
          <br />
          <Grid item className={classes.dogContainer}>
            <img src={catData.url} alt="doggo" className={classes.dogImg} />
          </Grid>
        </>
      )}
    </Grid>
  );
};
export default Cat;
