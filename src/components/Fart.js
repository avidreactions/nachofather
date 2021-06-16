import React from "react";
import { IconButton, makeStyles } from "@material-ui/core";
import AirlineSeatLegroomReducedIcon from "@material-ui/icons/AirlineSeatLegroomReduced";
import Fart1 from "../files/sounds/fart1.mp3";
import Fart2 from "../files/sounds/fart2.mp3";
import Fart3 from "../files/sounds/fart3.mp3";
import Fart4 from "../files/sounds/fart4.mp3";
import Fart5 from "../files/sounds/fart5.mp3";
import Fart6 from "../files/sounds/fart6.mp3";
import { randomIntGenerator } from "../utils/funky";

const useStyles = makeStyles((theme) => ({
  cakeContainer: {
    width: theme.spacing(50),
    height: theme.spacing(50),
  },
}));

const Fart = () => {
  const classes = useStyles();
  const fartsArr = [Fart1, Fart2, Fart3, Fart4, Fart5, Fart6];
  const handleFart = () => {
    const fart = fartsArr[randomIntGenerator(1, 3) - 1];
    console.log("thbpbbthghthtppbtp", fartsArr);
    const thunder = new Audio(fart);
    thunder.play();
  };
  return (
    <div className={classes.cakeContainer}>
      <IconButton aria-label="delete" onClick={handleFart}>
        <AirlineSeatLegroomReducedIcon style={{ fontSize: "400px" }} />
      </IconButton>
    </div>
  );
};

export default Fart;
