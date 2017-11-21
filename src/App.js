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
    currentIncome: '',
    submitted: false
  }

}

  stateChange = (newState) => {
    console.log(newState);
    this.setState({stateValue: newState});
  }

  incomeChange = (newIncome) => {
    console.log("The new income is " + newIncome);
    this.setState({currentIncome: newIncome});
  }

  render() {
    var value;
    if (this.state.stateValue && this.state.submitted === false) {
      value = <span>
        <Income value={this.state.currentIncome} onChange={this.incomeChange}/>
      </span>
    } else if (!this.state.stateValue && this.state.submitted === false) {
      value = <span>
      </span>
    } /*else if (this.state.submitted === true) {
      value = <span>
        <Income value={this.state.currentIncome} onChange={this.incomeChange}/>
      </span>
    } */
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
            <br />
            {value}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
