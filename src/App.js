import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// import Hello from './Hello';
// import Props from './Props';
import DefaultProps from './DefaultProps';

DefaultProps.defaultProps = {
  text: 'This is Default Props...'
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <Hello title="Hola React.js" /> */}
          {/* <Props
            arrayOfNumbers={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
            age={26}
            obj={{ key: 'My name' }}
            message="This text from props and more props in this component..."
            is_active
          /> */}
          <DefaultProps text="Title in component" />
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
