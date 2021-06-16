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
    <Grid container justify="center" direction="column" alignItems="center">
      {dogData !== undefined && (
        <>
          <Grid item>
            <IconButton aria-label="delete" onClick={getDog}>
              <PetsIcon style={{ fontSize: "50px" }} />
              <p>Click Me for Another!</p>
            </IconButton>
          </Grid>
          <br />
          <Grid item className={classes.dogContainer}>
            <img src={dogData} alt="doggo" className={classes.dogImg} />
          </Grid>
        </>
      )}
    </Grid>
  );
};
export default Dog;
