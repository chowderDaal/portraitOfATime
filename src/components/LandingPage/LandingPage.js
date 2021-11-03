import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { useEffect } from "react";
import Hidden from "@material-ui/core/Hidden";
import "./landingPage.css";
import LandingPageCard from "../LandingPageCard/LandingPageCard";
import { ReactComponent as LandingPageSvg1 } from "../../assets/landingPage1.svg";
import { ReactComponent as LandingPageSvg2 } from "../../assets/landingPage2.svg";
import { ReactComponent as LandingPageSvg3 } from "../../assets/landingPage3.svg";
import { ReactComponent as Logo } from "../../assets/logo.svg";

const LandingPage = () => {
  useEffect(() => {}, []);

  return (
    <Paper
      elevation={0}
      className="LandingPage noBorderRadius centerHorizontally "
    >
      <Grid
        container
        xs={11}
        sm={11}
        md={10}
        lg={10}
        xl={9}
        className="centerHorizontally"
      >
        <Grid item xs={12} md={9} lg={9} className="headerMargin">
          <Logo width="200px" />
        </Grid>

        <Grid item xs={12} lg={9} className=" spaceBetween sectionMargin">
          <Grid item xs={12} lg={4}>
            <LandingPageCard primaryColor="#3494E6" secondaryColor="#EC6EAD" />
          </Grid>
          <Hidden mdDown>
            <LandingPageSvg1 width="60%" />
          </Hidden>
        </Grid>

        <Grid item xs={12} lg={9} className=" spaceBetween sectionMargin">
          <Hidden mdDown>
            <LandingPageSvg2 width="60%" />
          </Hidden>
          <Grid item xs={12} lg={4}>
            <LandingPageCard primaryColor="#FFAFBD" secondaryColor="#FFC3A0" />
          </Grid>
        </Grid>

        <Grid item xs={12} lg={9} className=" spaceBetween sectionMargin">
          <Grid item xs={12} lg={4}>
            <LandingPageCard primaryColor="#191654" secondaryColor="#43C6AC" />
          </Grid>
          <Hidden mdDown>
            <LandingPageSvg3 width="60%" />
          </Hidden>
        </Grid>
      </Grid>
    </Paper>
  );
};
export default LandingPage;
