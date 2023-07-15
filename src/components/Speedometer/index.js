// Write your code here
import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onIncrement = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  onDecrement = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="container align-img">
        <h1 className="heading">SPEEDOMETER</h1>
        <div className="align-img">
          <img
            className="img"
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            alt="Speedometer"
          />
        </div>
        <h2 className="heading">Speed Is {speed}mph</h2>
        <p className="heading">Min Limit is 0mph, Max Limit is 200mph</p>
        <button className="button" onClick={this.onIncrement}>
          Accelerate
        </button>
        <button onClick={this.onDecrement}>Apply Brake</button>
      </div>
    )
  }
}

export default Speedometer
