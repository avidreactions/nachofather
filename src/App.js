import React, { useState } from "react";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import { Menu, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Main from "./components/Main";
import About from "./components/About";
import NotFound from "./components/NotFound";
import Nav from "./components/Nav";
import "./App.css";

const useStyles = makeStyles((theme) => ({
  appContainer: {
    height: "100vh",
    width: "100vw",
  },
  viewArea: {
    marginTop: theme.spacing(1),
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
              Hello there
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
