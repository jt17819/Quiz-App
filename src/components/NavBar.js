import React from 'react';
import { AppBar, Toolbar, CssBaseline, Typography, makeStyles, createTheme } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    style: {
        background: "#140100"
    },
    navlinks: {
        marginLeft: theme.spacing(10),
        display: "flex",
    },
    logo: {
        flexGrow: "1",
        cursor: "pointer",
        color: "#61DBFB"
    },
    link: {
        textDecoration: "none",
        color: "#61DBFB",
        fontSize: "20px",
        marginLeft: theme.spacing(20),
        "&:hover": {
            color: "yellow",
            borderBottom: "1px solid white",
        },
    },
}));

function NavBar () {
    const classes = useStyles();
    return (
        <AppBar position="static" className={classes.style}>
          <CssBaseline />
          <Toolbar>
            <Typography variant="h4" className={classes.logo}>
              Quizzical
            </Typography>
              <div className={classes.navlinks}>
                <Link to="/" className={classes.link}>
                  Home
                </Link>
                <Link to="/Quiz" className={classes.link}>
                  Quiz
                </Link>
                <Link to="/leaderboard" className={classes.link}>
                  Leaderboard
                </Link>
              </div>
          </Toolbar>
        </AppBar>
      );
}

export default NavBar;