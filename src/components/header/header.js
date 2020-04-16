import React from 'react';

import './header.css';

const Header = () => {
  return (
    <div className="header d-flex">
      <h3>
        <a href="#">
          Poke DB
        </a>
      </h3>
      <ul className="d-flex">
        <li>
          <a href="#">Pokemons</a>
        </li>
        <li>
          <a href="#">Berries</a>
        </li>
        <li>
          <a href="#">Items</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;