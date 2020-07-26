import React, { Component } from 'react';
import {BASE_URL} from './shared/baseUrl';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    name: "", //pokemon.name
    mainType: "", //pokemon.types[0].type.name
    id: "", // pokemon.id
    hp: 0, //pokemon.stats[].filter(stat.stat.name === 'hp') return [0]stat.base_stat 
    weight: 0, //pokemon.weight
    pokeDataRecevied: false
  }
  getPokemon= () => {
    axios.get(BASE_URL+'charizard')
      .then(response => {
        const pokemon = response.data;
        this.setState({
          ...this.state,
          name: pokemon.name,
          mainType: pokemon.types[0].type.name,
          id: pokemon.id,
          hp: pokemon.stats.filter(stat => stat.stat.name === 'hp')[0].base_stat,
          weight: pokemon.weight,
          pokeDataRecevied: true
        });
      })
      .catch(error => console.log(error.message));
  }

  render(){
    this.getPokemon();
    return(
      <div className="App">
        {this.state.pokeDataRecevied ? 
        <>
          <h1>{this.state.name}</h1>
          <h2>id:{this.state.id} type:{this.state.mainType}</h2>
          <h3>hp:{this.state.hp} Weight: {this.state.weight}</h3>
        </> : <h2>getting poke date from api...</h2>}
      </div>
    )
  }
}

export default App;
