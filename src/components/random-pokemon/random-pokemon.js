import React, {Component} from 'react';

import '../../services/poke-service';

import './random-pokemon.css';
import PokeService from "../../services/poke-service";
import Spinner from '../spinner/spinner';
import ErrorIndicator from '../error-indicator/error-indicator'

export default class RandomPokemon extends Component {

    pokeService = new PokeService();

    state = {

        pokemon: {},
        loading: true,


    };


    componentDidMount() {

        this.updatePokemon();
        this.interval = setInterval(this.updatePokemon, 5000);

    };

    onPokemonLoaded = (pokemon) => {

        this.setState({pokemon, loading: false, error: false});


    };

    onError = (err) => {

        this.setState({

            error: true,
            loading: false
        });
    };

    updatePokemon = () => {
        const id = Math.floor(Math.random() * 17) + 2;
        this.pokeService
            .getPokemon(id)
            .then(this.onPokemonLoaded)
            .catch(this.onError);


    };


    render() {


        const {pokemon, loading, error} = this.state;

        const hasData = !(loading || error);

        const errorMessage = error ? <ErrorIndicator/> : null;

        const spinner = loading ? <Spinner/> : null;

        const content = hasData ? <PokemonView pokemon={pokemon}/> : null;


        return (

            <div className="random-planet jumbotron rounded ">
                {errorMessage}
                {spinner}
                {content}
            </div>

        );
    }
}

const PokemonView = ({pokemon}) => {

    const {name, base_experience, height, weight} = pokemon;

    return (

        <React.Fragment>
            <img className="planet-image"
                 src={`https://img.pokemondb.net/artwork/large/${name}.jpg`} alt="random pokemon"/>
            <div>
                <h4>Pokemon name</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Pokemon name: </span>
                        <span>{name} </span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Base Experience: </span>
                        <span>{base_experience}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Height: </span>
                        <span>{height}</span>
                    </li>

                    <li className="list-group-item">
                        <span className="term">Weight: </span>
                        <span>{weight}</span>
                    </li>

                </ul>
            </div>
        </React.Fragment>);
};
