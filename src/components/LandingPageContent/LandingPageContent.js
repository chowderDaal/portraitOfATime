//TODO: Convert link list to drawer menu
import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { useState, useEffect, useRef } from "react";
import "./landingPageContent.css";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import Button from "@material-ui/core/Button";

const LandingPageContent = () => {
  return (
    <div className="LandingPageContent">
      <Paper
        elevation={6}
        className="dayCardHeight centerHorizontally dayCardPadding overFlowYAuto">
        <Grid item xs={12} lg={12}>
          <Grid item xs={12} lg={12} className="centerHorizontally">
            <Typography variant="h5">Make Journal Entries</Typography>
          </Grid>
          <Grid item xs={12} lg={12}>
            Lorem Ipsum
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};
export default LandingPageContent;
