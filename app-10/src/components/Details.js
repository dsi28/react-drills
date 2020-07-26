import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../shared/Base_URL';

class Details extends Component{
    state = {
        pokemon:  {}
    }
    getPokemon = () => {
        axios.get(BASE_URL+'/'+this.props.match.params.id)
            .then(res => {
                console.log(res.data);
                this.setState({
                    ...this.state,
                    pokemon: res.data
                });
            })
            .catch(error => console.log(error));
    }
    componentDidMount(){
        this.getPokemon();
    }
    render(){
        return(
            <>
                <div key={this.state.pokemon.name}>
                    <h2><Link to='/'>Back</Link></h2>
                    <h1>{this.state.pokemon.name}</h1>
                    <h2>{this.state.pokemon.id} {this.state.pokemon.weight}</h2>
                </div> 
            </>
        )
    }
}
export default Details;