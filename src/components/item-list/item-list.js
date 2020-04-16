import React, {Component} from 'react';

import './item-list.css';

import '../../services/poke-service'
import PokeService from "../../services/poke-service";
import Spinner from '../spinner/spinner'

export default class ItemList extends Component {

    pokeService = new PokeService();

    state = {
        berriesList: null
    };

    componentDidMount() {

        this.pokeService.getAllBerries().then((pokemonList) => {
            this.setState({pokemonList});
        });

    }

    renderItems(arr) {
        return arr.map(({id, name}) => {
            return (
                <li className="list-group-item"
                    key={id} onClick={() => this.propsOnItemSelected(id)}>

                    {name}
                </li>);
        });
    }

    render() {

        const {pokemonList} = this.state;

        if (!pokemonList) {
            return <Spinner/>
        }

        const items = this.renderItems(pokemonList);
        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}
