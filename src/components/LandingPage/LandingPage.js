import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { useState, useEffect, useRef } from "react";
import "./landingPage.css";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import LandingPageHeader from "../LandingPageHeader/LandingPageHeader";
import LandingContent from "../LandingPageContent/LandingPageContent";

const LandingPage = () => {
  useEffect(() => {}, []);

  return (
    <Paper elevation={0} className="LandingPage noBorderRadius">
      <LandingPageHeader />

      <Grid xs={12} lg={11} className="centerHorizontally">
        <Grid lg={4}>
          <LandingContent />
        </Grid>
      </Grid>
    </Paper>
  );
};
export default LandingPage;
