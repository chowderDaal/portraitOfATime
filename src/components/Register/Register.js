import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { ReactComponent as Logo } from "../../assets/logo.svg";

import "./register.css";

const Register = () => {
  return (
    <div className="Register">
      <Paper className="paper-container">
        <Grid container spacing={0} className="register-container">
          <Grid item xs={10} md={4} lg={3} xl={2}>
            <Paper elevation={6} className="register-section">
              <div>
                <Logo height="90px" width="140px" />
              </div>

              <TextField
                margin="dense"
                fullWidth
                placeholder="Name"
                className="name-field"
              />
              <TextField
                margin="dense"
                fullWidth
                placeholder="Email"
                className="email-field"
              />

              <TextField
                margin="dense"
                fullWidth
                placeholder="Password"
                className="password-field"
                type="password"
              />
              <Button
                variant="contained"
                fullWidth
                color="primary"
                className="register-btn"
              >
                Register
              </Button>

              <Button color="primary" className="sign-up-text">
                Don't have an account? sign up here
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};
export default Register;
