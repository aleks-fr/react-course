import React, { Component } from 'react';
import './App.css';

// import Hello from './Hello';
// import Props from './Props';
import DefaultProps from './DefaultProps';
// import State from './State';
// import Conditional from './sections/Conditional';
// import Lists from './sections/Lists';
// import Beers from './sections/Beers';
import Forms from './sections/Forms';
DefaultProps.defaultProps = {
  text: 'This is Default Props...'
};

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Conditional /> */}
        {/* <Lists /> */}
        {/* <Beers /> */}
        <Forms />
      </div>
    );
  }
}

export default App;
