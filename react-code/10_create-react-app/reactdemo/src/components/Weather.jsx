import React from "react";

export default class Weather extends React.Component {
    state = { isHot: true }
    changeWeather = () => {
        let { isHot } = this.state;
        isHot = !isHot;
        this.setState({ isHot });
    }
    render() {
        return (
            <h1>今天天气很<span onClick={this.changeWeather}>{this.state.isHot ? '炎热' : '凉爽'}</span></h1>
        )
    }
}
