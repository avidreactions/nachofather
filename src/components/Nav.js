import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { randomIntGenerator } from "../utils/funky";
import Clock from "./Clock";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
  },
  appBar: {
    backgroundColor: "red",
  },
}));

const Nav = (props) => {
  const { openMenu } = props;
  const classes = useStyles();
  const backgroundPalette = [
    "purple",
    "red",
    "blue",
    "gold",
    "darkgreen",
    "darkgray",
    "lightblue",
    "seagreen",
    "magenta",
    "navy",
    "lavender",
    "lightgreen",
    "brown",
    "lightpink",
    "tan",
    "orange",
    "indigo",
    "black",
    "white",
    "pink",
  ];
  const [appBarColor, setAppBarColor] = useState(backgroundPalette[9]);

  const changeAppBarColor = () => {
    const randInt = randomIntGenerator(1, 21);
    setAppBarColor(backgroundPalette[randInt - 1]);
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        style={{
          backgroundColor: appBarColor,
          color:
            appBarColor === "white" || appBarColor === "lavender"
              ? "black"
              : "white",
        }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-controls="nacho-menu"
            onClick={(event) => {
              openMenu(event.currentTarget);
            }}
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.title}>
            <Clock />
          </div>
          <Button color="inherit" onClick={changeAppBarColor}>
            Click
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Nav;
