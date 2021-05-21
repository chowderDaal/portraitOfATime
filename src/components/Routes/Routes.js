import { Route, BrowserRouter as Router } from "react-router-dom";
import Home from "../Home/Home";
import LandingPage from "../LandingPage/LandingPage";

const Routes = () => {
  return (
    <div className="Routes ">
      <Router>
        <Route path="/" component={LandingPage} />
        <Route path="/home" component={Home} />
      </Router>
    </div>
  );
};

export default Routes;
