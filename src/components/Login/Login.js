import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "./login.css";

const Login = () => {
  const [emailInput, setEmail] = useState();
  const [passwordInput, setPassword] = useState();
  const history = useHistory();
  const goToRegister = () => {
    history.push("/register");
  };

  const login = () => {
    const login = { email: emailInput, password: passwordInput };

    axios
      .post("/user/login", login)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        history.push("/home");
      })
      .catch((error) => {
        console.error(error.response.data);
      });
  };

  return (
    <div className="Login">
      <Paper className="paper-container">
        <Grid container spacing={0} className="login-container">
          <Grid item xs={10} md={4} lg={3} xl={2}>
            <Paper elevation={6} className="login-section">
              <div>
                <Logo height="90px" width="140px" />
              </div>
              <TextField
                margin="dense"
                fullWidth
                placeholder="Email"
                className="email-field"
                value={emailInput || ""}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />

              <TextField
                margin="dense"
                fullWidth
                placeholder="Password"
                className="password-field"
                type="password"
                value={passwordInput || ""}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
              <Button
                variant="contained"
                fullWidth
                color="primary"
                className="login-btn"
                onClick={login}
              >
                Login
              </Button>

              <Button
                color="primary"
                className="sign-up-text"
                onClick={goToRegister}
              >
                Don't have an account? sign up here
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};
export default Login;
