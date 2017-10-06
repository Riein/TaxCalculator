import React, { Component } from 'react';
import Autocomplete from 'react-autocomplete';
import '../App.css';
import {fakeRequest} from '../utils';


class Search extends Component {
constructor(props) {
  super(props);
  this.state = {
    value:'',
    statesList: [],
    loading:false
  }
  this.requestTimer = null
}

renderItems = (items) => {
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

  onChange = (event) => {
    console.log(event.target.value);
    this.props.onChange(this.state.value);
    this.setState({
      value: event.target.value
    });
  }

  render() {
    return (
      <div className="App text-center">
        <Autocomplete
          value={this.state.value}
          inputProps={{ id: 'states-autocomplete' }}
          wrapperStyle={{ position: 'relative', display: 'inline-block' }}
          items={this.state.statesList}
          getItemValue={(item) => item.name}
          onSelect={(value, state) => this.setState({ value, statesList: [state] }, this.props.onChange(state.name)) }
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
                <div className="item">Type a state...</div>
              ) : this.state.loading ? (
                <div className="item">Loading...</div>
              ) : items.length === 0 ? (
                <div className="item">No matches for {value}</div>
              ) : this.renderItems(items)}
              </div>
            )}
        />
      </div>
    );
  }
}

export default Search;
