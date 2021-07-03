import React from "react";
import { IconButton, makeStyles, Grid } from "@material-ui/core";
import AirlineSeatLegroomReducedIcon from "@material-ui/icons/AirlineSeatLegroomReduced";
import FaceIcon from "@material-ui/icons/Face";
import Fart1 from "../files/sounds/fart1.mp3";
import Fart2 from "../files/sounds/fart2.mp3";
import Fart3 from "../files/sounds/fart3.mp3";
import Fart4 from "../files/sounds/fart4.mp3";
import Fart5 from "../files/sounds/fart5.mp3";
import Fart6 from "../files/sounds/fart6.mp3";
import OctoAlert from "../files/sounds/octo_alert.mp3";
import { randomIntGenerator } from "../utils/funky";

const useStyles = makeStyles((theme) => ({}));

const SoundBoard = () => {
  const classes = useStyles();
  const fartsArr = [Fart1, Fart2, Fart3, Fart4, Fart5, Fart6];
  const handleFart = () => {
    const fart = fartsArr[randomIntGenerator(1, 3) - 1];
    console.log("thbpbbthghthtppbtp", fartsArr);
    const thunder = new Audio(fart);
    thunder.play();
  };
  const handleOctoAlert = () => {
    const alert = new Audio(OctoAlert);
    alert.play();
  };
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      className={classes.cakeContainer}
    >
      <Grid item>
        <IconButton aria-label="delete" onClick={handleFart}>
          <AirlineSeatLegroomReducedIcon style={{ fontSize: "200px" }} />
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton aria-label="delete" onClick={handleOctoAlert}>
          <FaceIcon style={{ fontSize: "200px" }} />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default SoundBoard;
