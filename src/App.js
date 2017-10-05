import React, { Component } from 'react';
import Autocomplete from 'react-autocomplete';
import './App.css';
import {fakeRequest} from './utils';


class App extends Component {
constructor(props) {
  super(props);
  this.state = {
    id:'',
    value:'',
    statesList: [],
    loading:false,
    submitted: false
  }
  this.requestTimer = null
  this.renderItems = this.renderItems.bind(this)

}

renderItems(items) {
    return items.map((item, index) => {
      const text = item.props.children
      if (index === 0 || items[index - 1].props.children.charAt(0) !== text.charAt(0)) {
        return [<div className="item item-header">{text.charAt(0)}</div>, item]
      }
      else {
        return item
      }
    })
  }


  render() {
    var value;
    if (this.state.value && this.state.submitted === false) {

    } else if (!this.state.value && this.state.submitted === false) {
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
            <Autocomplete
              value={this.state.value}
              inputProps={{ id: 'states-autocomplete' }}
              wrapperStyle={{ position: 'relative', display: 'inline-block' }}
              items={this.state.statesList}
              getItemValue={(item) => item.name}
              onSelect={(value, state) => this.setState({ value, statesList: [state] }) }
              onChange={(event, value) => {
                this.setState({ value, loading: true, statesList: [] })
                clearTimeout(this.requestTimer)
                this.requestTimer = fakeRequest(value, (items) => {
                  this.setState({ statesList: items, loading: false })
                })
              }}
              renderItem={(item, isHighlighted) => (
                <div
                  className={`item ${isHighlighted ? 'item-highlighted' : ''}`}
                  key={item.abbr}
                  >{item.name}</div>
                )}
                renderMenu={(items, value) => (
                  <div className="menu">
                  {value === '' ? (
                    <div className="item">Type of the name of a United State</div>
                  ) : this.state.loading ? (
                    <div className="item">Loading...</div>
                  ) : items.length === 0 ? (
                    <div className="item">No matches for {value}</div>
                  ) : this.renderItems(items)}
                  </div>
                )}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
