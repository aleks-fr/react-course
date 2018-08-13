import React, { Component } from 'react';

export default class Lists extends Component {
  render() {
    const numbers = [1, 1, 2, 3, 4, 5, 6, 7];

    return (
      <div>
        <h4>List numbers</h4>
        {numbers.map((number, index) => {
          return <p key={index}> Soy el numero {number}</p>;
        })}
      </div>
    );
  }
}
