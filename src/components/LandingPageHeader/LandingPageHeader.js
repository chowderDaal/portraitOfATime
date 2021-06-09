//TODO: Convert link list to drawer menu
import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { useState, useEffect, useRef } from "react";
import "./landingPageHeader.css";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import Button from "@material-ui/core/Button";

const LandingPageHeader = () => {
  useEffect(() => {}, []);
  const preventDefault = (event) => event.preventDefault();
  return (
    <Paper elevation={0} className="LandingPageHeader noBorderRadius">
      <Grid container xs={12} lg={12} className="centerHorizontally">
        <Grid item xs={12} lg={11} className="displayFlex spaceBetween">
          <Grid item xs={12} lg={3}>
            <Logo width="150px" />
          </Grid>

          <Grid item lg={4} className="spaceEvenly centerVertically">
            <Link href="#" onClick={preventDefault} color="inherit">
              Contact
            </Link>
            <Link href="#" onClick={preventDefault} color="inherit">
              About
            </Link>
            <Link href="#" onClick={preventDefault} color="inherit">
              Login
            </Link>
            <Button size="medium" className="signupBtn">
              Sign Up
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};
export default LandingPageHeader;
