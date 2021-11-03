import { Route, BrowserRouter as Router } from "react-router-dom";
import Home from "../Home/Home";
import LandingPage from "../LandingPage/LandingPage";
import Login from "../Login/Login";
const Routes = () => {
  return (
    <div className="Routes ">
      <Router>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/login" component={Login} />
      </Router>
    </div>
  );
};

export default Routes;
