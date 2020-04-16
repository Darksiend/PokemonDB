import React, { Component } from 'react';

import './berry-details.css';

export default class BerryDetails extends Component {

  render() {
    return (
      <div className="person-details card">
        <img className="person-image"
          src="https://starwars-visualguide.com/assets/img/characters/3.jpg" />

        <div className="card-body">
          <h4>Cheri Berry</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Size (cm)</span>
              <span>2.0 cm</span>
            </li>
            <li className="list-group-item">
              <span className="term">Firmness</span>
              <span>Soft</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
