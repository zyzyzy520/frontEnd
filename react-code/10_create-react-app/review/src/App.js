import React from 'react';
import ReactDOM from 'react-dom';

export default class Weather extends React.Component {
  state = { weather: '凉爽' }
  render() {
    let { weather } = this.state;
    return (
      <h1>今天天气很<span onClick={this.change}>{weather}</span></h1>
    )
  }
  change = () => {
    if (this.state.weather == "凉爽") {
      this.setState({ weather: '炎热' });
    } else {
      this.setState({ weather: '凉爽' })
    }
  }
}