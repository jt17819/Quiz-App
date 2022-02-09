import React from 'react';
import makeStyles from "@material-ui/core";

// Adding Material UI
const useStyles = makeStyles({
    mainStyle: {
      backgroundColor: "#7f7e7a"
    },
    cardStyle: {
      backgroundColor: "#140100"
    },
    box: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "90vh"
    },
    writing: {
      color: "#61DBFB",
      fontSize: "20px"
    }
  });

const classes = useStyles();

export default classes;