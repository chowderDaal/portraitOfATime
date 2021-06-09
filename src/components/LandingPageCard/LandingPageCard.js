import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import "./landingPageCard.css";

const LandingPageCard = (props) => {
  const [gradientStyle, setGradientStyle] = useState({
    backgroundImage:
      "linear-gradient(45deg," +
      props.primaryColor +
      "," +
      props.secondaryColor +
      ")",
    height: "100%",
  });

  return (
    <div className="LandingPageCard fullHeight">
      <Paper
        elevation={6}
        className=" centerHorizontally dayCardPadding overFlowYAuto "
        style={gradientStyle}>
        <Grid item xs={12} lg={12}>
          <Grid item xs={12} lg={12} className="centerHorizontally">
            <Typography variant="h5">Testing120</Typography>
          </Grid>
          <Grid item xs={12} lg={12}></Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default LandingPageCard;
