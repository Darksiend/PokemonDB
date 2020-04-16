import React, {Component} from 'react';

import Header from '../header';
import RandomPokemon from '../random-pokemon';
import ItemList from '../item-list';
import BerryDetails from '../berry-details';


import './app.css';

export default class App extends Component {

    state = {
        showRandomPokemon: true,
        selectedBerry: null
    };

    toggleRandomPokemon = () => {
        this.setState((state) => {
            return {
                showRandomPokemon: !state.showRandomPokemon
            }
        });
    };

    onBerrySelected = (name) => {
        this.setState({
            selectedBerry: name

        });


    };

    render() {
        const pokemon = this.state.showRandomPokemon ? <RandomPokemon/> : null;
        return (
            <div className="pokedb-app">
                <Header/>
                {pokemon}

                <button
                    className="toggle-planet btn btn-warning btn-lg"
                    onClick={this.toggleRandomPokemon}>
                    Toggle Random Planet
                </button>


                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList onItemSelected={this.onBerrySelected}/>
                    </div>
                    <div className="col-md-6">
                        <BerryDetails name={this.state.selectedBerry}/>
                    </div>
                </div>
            </div>
        );
    }
};

