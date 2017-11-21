import React, { Component } from 'react';

class Income extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value:0
    };
  }

  handleChange = (e) => {
    //console.log(e.target.value);
    const re = /^[0-9\b]+$/;
    console.log("I have entered with a value of " + e.target.value);
    if (e.target.value === '' || re.test(e.target.value)) {
       this.setState({value: e.target.value}, () => {
         this.props.onChange(this.state.value);
       });
       //console.log('This is an integer');

       console.log("Changed the state value to " + this.state.value);
    } else {
      console.log('Income value is NOT an integer');
    }
    this.props.onChange(this.state.value);
  }

 /*  */
  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.setState({value: e.target.value});
      this.props.onChange(this.state.value);
      console.log(this.state.value);
    }
  }

  render() {
    return (
      <div className="range">
        <label>
          Income:
          <br />
          <input type="text" name="income" placeholder="Enter your income..." onChange={this.handleChange} onKeyPress={this.handleKeyPress}/>
        </label>
        {/*<input type="submit" value="Submit" />*/}
      </div>
    );
  }
}

export default Income;
