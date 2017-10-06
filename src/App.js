import React, { Component } from 'react';
import Search from './components/Search';
import Income from './components/Income';
import './App.css';


class App extends Component {
constructor(props) {
  super(props);
  this.state = {
    id:'',
    stateValue: '',
    submitted: false
  }

}

  stateChange = (newState) => {
    console.log(newState);
    this.setState({stateValue: newState});
  }

  render() {
    var value;
    if (this.state.stateValue && this.state.submitted === false) {
      value = <span>
        <Income />
      </span>
    } else if (!this.state.stateValue && this.state.submitted === false) {
      value = <span>
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
          <div className="item-center">
            <label htmlFor="states-autocomplete">Choose a state from the US</label>
          </div>
          <div className="item-center">
            <Search onChange={this.stateChange} />
            {value}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
