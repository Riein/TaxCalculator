import React, { Component } from 'react';
import './App.css';

class App extends Component {
constructor(props) {
  super(props);
  this.state = {
    id:'',
    state:'',
    submitted: false
  }

}

  render() {
    var state;
    if (this.state.state && this.state.submitted === false) {

    } else if (!this.state.state && this.state.submitted === false) {
      state = <span>
        <h2>Please enter your state (Washington or Oregon)</h2>
        <form>
          <input type="text" placeHolder="Enter State..." ref="state" />
        </form>
      </span>
    } else if (this.state.submitted === true) {

    }
    return (
      <div className="App text-center">
        <div className="App-header">
          <h2>Income Tax Calculator</h2>
        </div>
        <p className="App-intro">
          This application will calculate how much income and sales tax you pay in Washington or Oregon.
        </p>
        <div className="text-center">
          {state}
        </div>
      </div>
    );
  }
}

export default App;
