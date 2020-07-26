import React from 'react';
import router from './shared/router';
import {Link} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      {/*(2 step) set up nav */}
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/signup'>Signup</Link>
        <Link to='/details'>Details</Link>
      </nav>
      {/* (4 step) import router switch  */}
      {router}
    </div>
  );
}
export default App;