import React, { Component } from 'react';

class LoginButton extends Component {
  render() {
    return <button>Iniciar sesion</button>;
  }
}

class LogoutButton extends Component {
  render() {
    return (
      <div>
        <p>Bienvenido...</p>
        <button>Cerrar sesion</button>
      </div>
    );
  }
}

// const useConditionalRendering = showA => {
//   if (showA) {
//     return <ComponentA />;
//   } else {
//     return <ComponentB />;
//   }
// };

export default class conditional extends Component {
  constructor() {
    super();
    this.state = { isUserLogged: true };
  }

  render() {
    return (
      <div>
        <h5>conditional Rendering</h5>
        {this.state.isUserLogged ? <LoginButton /> : <LogoutButton />}
      </div>
    );
  }
}
