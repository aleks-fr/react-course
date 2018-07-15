import React, { Component } from 'react';

class Text extends Component {
  render() {
    const { age, message, is_active, arrayOfNumbers, obj } = this.props;

    const booleanText = is_active ? 'Activo' : 'Inactivo';
    const mappedNumbers = arrayOfNumbers.map(n => n * 2);

    return (
      <div>
        <p>{message}</p>
        <p>{age}</p>
        <p>{booleanText}</p>
        <p>{mappedNumbers.join(', ')}</p>
        <p>{obj.key}</p>
      </div>
    );
  }
}

export default Text;
