import React, { Component } from 'react';
import beers from './beerdata/beers.json';

class BeerItem extends Component {
  render() {
    const { beer } = this.props;
    return (
      <li>
        <p>
          <strong>Cervecería:</strong> {beer.brewery}{' '}
        </p>
        <p>
          <strong>Nombre:</strong> {beer.name}{' '}
        </p>
        <p>
          <strong>Score:</strong> {beer.score}{' '}
        </p>
      </li>
    );
  }
}

export default class Pokemons extends Component {
  render() {
    return (
      <div>
        <h3>Beers</h3>
        <ul>
          {beers.map((beer, index) => {
            return <BeerItem beer={beer} key={index} />;
          })}
        </ul>
      </div>
    );
  }
}
