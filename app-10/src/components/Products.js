import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {BASE_URL, BASE_URL_PARAMS } from '../shared/Base_URL';

class Products extends Component {
    state = {
        pokeList: []
    }

    componentDidMount(){
        this.getPokemon();
    }
    getPokemon = () =>{
        axios.get(BASE_URL+BASE_URL_PARAMS)
        .then(res => {
          this.setState({
              ...this.state,
              pokeList: res.data.results
          })
        })
        .catch(error => console.log(error.message));
      }
    render(){
        return(
            <>
                {this.state.pokeList ? 
                    this.state.pokeList.map(pokemon => 
                        <h1 key={pokemon.name}><Link to={`/details/${pokemon.name}`}>{pokemon.name}</Link></h1>
                    ) 
                : <h2>loading pokemon</h2>}
            </>
        )
    }
}
export default Products;