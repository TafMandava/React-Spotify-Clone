import Login from './Login';
import './App.css';

function App() {
  return ( 
    /*
        BEM naming convection
    */
    <div className="app">
      <h1>Spotify Clone</h1>

      {/* Spotify Logo */}
      {/* Login with spotify button */}
      <Login />

    </div>
  );
}

export default App;
