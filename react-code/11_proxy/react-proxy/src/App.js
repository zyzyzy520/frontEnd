import React from 'react';
import ReactDOM from 'react-dom'
import axios from 'axios'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.sendStudentRequest}> 点击我，发送学生请求</button>
        <button onClick={this.sendCarRequest}> 点击我，发送汽车请求</button>
      </div>

    )
  }
  sendStudentRequest = () => {
    axios({
      url: "http://localhost:3000/api1/students",
      method: 'GET'
    }).then(
      response => { console.log('成功了', response) },
      error => { console.log('失败了', error) }
    )
  }
  sendCarRequest = () => {
    axios({
      url: "http://localhost:3000/api2/cars",
      method: 'GET'
    }).then(
      response => { console.log('成功了', response) },
      error => { console.log('失败了', error) }
    )
  }
}