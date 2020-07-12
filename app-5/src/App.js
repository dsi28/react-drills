import React, { Component } from 'react';
import './App.css';
import Image from './components/ImageComponent';

class App extends Component {
  render(){
    return(
      <div style={{textAlign:"center"}}>
        <Image imgUrl='https://via.placeholder.com/150'/>
      </div>
    )
  }
}

export default App;
