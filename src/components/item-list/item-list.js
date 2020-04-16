import React, {Component} from 'react';

import './item-list.css';

import '../../services/poke-service'
import PokeService from "../../services/poke-service";
import Spinner from '../spinner/spinner'

export default class ItemList extends Component {

    pokeService = new PokeService();

    state = {
        berriesList: null,

    };

    componentDidMount() {

        this.pokeService
            .getAllBerries()
            .then((berriesList) => {
            this.setState({berriesList});

            console.log(berriesList)
        });

    }

    renderItems(arr) {
        return arr.map(({id, name}) => {
            return (
                <li className="list-group-item"
                    key={id}
                    onClick={() => this.props.onItemSelected(id)}>
                    {name}
                </li>);
        });
    }

    render() {
        const {berriesList} = this.state;


        if (!berriesList) {
            return <Spinner />
        }



        const items = this.renderItems(berriesList);
        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}
