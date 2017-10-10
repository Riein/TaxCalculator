import React, { Component } from 'react';

class Income extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value:props.value
    };
  }

  handleChange = (e) => {
    console.log(e.target.value);
  }

  render() {
    return (
      <div className="range">
      <form>
        <label>
          Income:
          <br />
          <input type="text" name="income" placeholder="Enter your income..." onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      </div>
    );
  }
}

export default Income;
