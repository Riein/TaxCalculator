import React, { Component } from 'react';

class Income extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value:props.value
    };
  }

  render() {
    return (
      <div className="range">
      <form>
        <label>
          Income:
          <input type="text" name="income" placeholder="Enter your income..." />
        </label>
        <input type="submit" value="Submit" />
      </form>
      </div>
    );
  }
}

export default Income;
