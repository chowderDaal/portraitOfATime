import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import "./landingPage.css";

const LandingPage = () => {
  const history = useHistory();
  const goToLogin = () => {
    history.push("/login");
  };
  const goToRegister = () => {
    history.push("/register");
  };
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
        <Grid item xs={12} md={9} lg={8} className="headerMargin">
          <div class="spaceBetween centerVertically">
            <Logo width="200px" />

            <Grid item md={3} lg={3}>
              <div className="displayFlex spaceBetween">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={goToRegister}
                >
                  Sign Up
                </Button>

                <Button color="primary" onClick={goToLogin}>
                  Login
                </Button>
              </div>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
};
export default LandingPage;
