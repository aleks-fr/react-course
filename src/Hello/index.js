import React, { Component } from 'react';

// export default function Hello(props) {
//   return <h1> {props.title} </h1>;
// }

// const Hello = props => <div> {props.title} </div>;
// export default Hello;

class Hello extends Component {
  render() {
    return <div> {this.props.title} </div>;
  }
}

export default Hello;
