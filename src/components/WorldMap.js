import React, { useState } from "react";
import axios from "axios";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import worldMap from "../files/images/worldmap.jpg";

const useStyles = makeStyles((theme) => ({
  nachoContainer: {
    textAlign: "center",
    marginTop: theme.spacing(3),
  },
}));

const WorldMap = () => {
  const classes = useStyles();
  const [countryData, setCountryData] = useState(null);
  const getCountry = () => {
    axios
      .get("https://restcountries.eu/rest/v2/name/kor")
      .then((res) => {
        setCountryData(res);
      })
      .catch((err) => {});
  };

  console.log("hayyyy this is country data", countryData);
  return (
    <div className={classes.nachoContainer}>
      <img src={worldMap} alt="the world chico" />
      <br />
      <Button variant="contained" color="secondary" onClick={getCountry}>
        What does this button do?
      </Button>
    </div>
  );
};

export default WorldMap;
