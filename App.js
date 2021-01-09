
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>CRUD App</h1>
      <div className="form">
        <level>Movie Name:</level>
      <input type="text" name="Movie Name"/>
      <level>Your Rating:</level>
      <input type="text" placeholder="Give rating out of 5" name="Review"/>
    
    <button>Submit</button>
    
    </div>
    </div>
  );
}

export default App;
