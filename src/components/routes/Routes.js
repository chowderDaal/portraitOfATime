import { Route, BrowserRouter as Router } from 'react-router-dom';
import Home from '../Home/Home';

const Routes=()=> {
    return (
    <div className="Routes " >
      <Router>
      <Route path="/" component={Home} />
      </Router>
       
      </div>
    );
  }
  
  export default Routes;