import './App.css';

//function App() {   this can be converted to an arrow function as shown below
const App = () => {

  const title = 'Welcome to everyone to the new blog';
  const likes = 50;
  const person = {
    name: 'Yoshi',
    age: 30
  };
  const link ="http://www.google.com";

  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>Liked {likes} times</p>
        <p>{"Hello"}</p>
        <p>{[1,7]}</p>
        <p>Math.random() *10</p>
        <a href={link}>Google</a>
      </div>
    </div>
  );
}

export default App;
