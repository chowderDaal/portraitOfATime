import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { useState, useEffect, useRef } from "react";
import "./landingPage.css";
import { ReactComponent as Logo } from "../../assets/logo.svg";

const LandingPage = () => {
  useEffect(() => {}, []);

  return (
    <Paper elevation={0} className="LandingPage noBorderRadius">
      <Grid container xs={12} lg={12} className="centerHorizontally">
        <Grid item xs={12} lg={9}>
          <Logo width="200px" />
        </Grid>
      </Grid>
    </Paper>
  );
};
export default LandingPage;
