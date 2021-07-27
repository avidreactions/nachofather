import React, { useState } from "react";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import { Menu, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Main from "./Main";
import About from "./About";
import NotFound from "./NotFound";
import Nav from "./Nav";
import SoundBoard from "./SoundBoard";
import Dog from "./Dog";
import Cat from "./Cat";
import "../styles/App.css";
require("dotenv").config({ path: "/file/.env" });

const useStyles = makeStyles((theme) => ({
  appContainer: {
    height: "100vh",
    width: "100vw",
  },
}));

const App = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const classes = useStyles();
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.appContainer}>
      <Router>
        <Nav openMenu={setAnchorEl} />
        <div className={classes.viewArea}>
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/about" component={About} />
            <Route path="/cats" component={Cat} />
            <Route path="/dogs" component={Dog} />
            <Route path="/sounds" component={SoundBoard} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>
            <Link to="/" className={classes.links}>
              Home
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link to="/cats" className={classes.links}>
              CATS!
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link to="/dogs" className={classes.links}>
              DOGS!
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link to="/sounds" className={classes.links}>
              Sound Room
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link to="/about" className={classes.links}>
              About
            </Link>
          </MenuItem>
        </Menu>
      </Router>
    </div>
  );
};

export default App;
