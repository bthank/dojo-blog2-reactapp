import Navbar from './Navbar';
import Home from './Home';

//function App() {   this can be converted to an arrow function as shown below
const App = () => {


  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
        
      </div>
    </div>
  );
}

export default App;
