import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
// Note that the router should be inserted in your root component
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BlogList from './BlogList';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

//function App() {   this can be converted to an arrow function as shown below
const App = () => {


  return (
    <Router>
      <div className="App">
        {/* Note that the Navvar will always show since it is outside the Switch */}
        <Navbar />
        <div className="content">
          {/* the Switch component makes sure that only one component displays at a time */}
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route path="/create"><Create /></Route>
            {/* use of a route parameter in a route  */}
            <Route path="/blogs/:id"><BlogDetails /></Route>
            {/* The NotFound * route must be the last one in the Switch or it will match any route that comes in even if it is valid */}
            <Route path="*"><NotFound /></Route>
          </Switch>
          
          
        </div>
      </div>
    </Router>

  );
}

export default App;
