import React, {Component} from 'react';

import './berry-details.css';
import PokeService from "../../services/poke-service";

export default class BerryDetails extends Component {

    pokeService = new PokeService();

    state = {
        berry: null
    };


    updateBerry() {

        const {name} = this.props;
        if (!name) {
            return;
        }

        this.pokeService
            .getBerry(name)
            .then((berry) => {
                this.setState({berry});
                console.log(berry);
            })

    }

    componentDidMount() {
        this.updateBerry();
    }

    componentDidUpdate(prevProps) {

        if (this.props.name !== prevProps.name) {
            this.updateBerry();
        }

    }


    render() {


        if (!this.state.berry) {
            return <span>Select a Berry From the List</span>
        }

        const {berry: {name, size, growth_time}} = this.state;


        return (
            <div className="person-details card">
                <img className="person-image"
                     src={`https://www.serebii.net/itemdex/sprites/pgl/${name}berry.png`}alt="berry"/>

                <div className="card-body">
                    <h4>{name} </h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Size (cm)</span>
                            <span>{size}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Growth time</span>
                            <span>{growth_time}</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
