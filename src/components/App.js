import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
// Note that the router should be inserted in your root component
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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
          </Switch>
          
          
        </div>
      </div>
    </Router>

  );
}

export default App;
