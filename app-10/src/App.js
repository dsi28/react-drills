import React, { Component } from 'react';
import axios from 'axios';
import router from './shared/router';
import {BASE_URL, BASE_URL_PARAMS } from './shared/Base_URL';
import './App.css';
import { Link } from 'react-router-dom';

class App extends Component {
  render(){
    return (
      <div className="App">
        {router}
      </div>
    );
  }

}

export default App;
