import { Route, BrowserRouter as Router } from "react-router-dom";
import Home from "../Home/Home";
import LandingPage from "../LandingPage/LandingPage";
import Login from "../Login/Login";
import Register from "../Register/Register";
const Routes = () => {
  return (
    <div className="Routes ">
      <Router>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Router>
    </div>
  );
};

export default Routes;
