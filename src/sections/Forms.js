import React, { Component } from 'react';

class Forms extends Component {
  constructor() {
    super();
    this.state = {
      inputName: '',
      inputTwitter: '@',
      inputTerms: true
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    console.log(this.state);
  };

  handleChanche = e => {
    console.log(e.target.checked);
    this.setState({ inputTerms: e.target.checked });
  };

  render() {
    return (
      <div>
        <h5>Forms</h5>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label htmlFor="name">Name: </label>
            <input
              id="name"
              name="userName"
              onChange={e => this.setState({ inputName: e.target.value })}
              placeholder="Write your First Name"
              ref={inputElement => (this.inputName = inputElement)}
              value={this.state.inputName}
            />
          </p>
          <p>
            <label htmlFor="twitter">Twitter:</label>
            <input
              id="twitter"
              onChange={e => this.setState({ inputTwitter: e.target.value })}
              name="twitterAccount"
              placeholder="Your Twitter account"
              value={this.state.inputTwitter}
            />
          </p>

          <p>
            <input
              onChange={this.handleChanche}
              type="checkbox"
              checked={this.state.inputTerms}
            />
            Accepted terms...
          </p>

          <button>Send...</button>
        </form>
      </div>
    );
  }
}

export default Forms;
