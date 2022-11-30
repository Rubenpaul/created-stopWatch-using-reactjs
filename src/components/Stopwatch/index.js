// Write your code here
import './index.css'

import {Component} from 'react'

class StopWatch extends Component {
  state = {isTimerRunning: false, timeInSeconds: 0}

  componentWillUnmount() {
    this.clearTimerInterval = () => {
      clearInterval(this.intervalId)
    }
  }

  timer = () => {
    const {isTimerRunning} = this.state
    if (isTimerRunning) {
      this.setState(prevState => ({
        timeInSeconds: prevState.timeInSeconds + 1,
      }))
    }
  }

  onClickStartTimer = () => {
    this.setState({isTimerRunning: true})
    this.intervalId = setInterval(this.timer, 1000)
  }

  onClickStopTimer = () => {
    clearInterval(this.intervalId)
    this.setState(prevState => ({
      isTimerRunning: false,
      timeInSeconds: prevState.timeInSeconds,
    }))
  }

  onClickResetTimer = () => {
    clearInterval(this.intervalId)
    this.setState({isTimerRunning: false, timeInSeconds: 0})
  }

  render() {
    const {timeInSeconds} = this.state

    const minutes = Math.floor(timeInSeconds / 60)
    const seconds = Math.floor(timeInSeconds % 60)

    const stringifiedMinutes = minutes > 9 ? minutes : `0${minutes}`
    const stringifiedSeconds = seconds > 9 ? seconds : `0${seconds}`

    return (
      <div className="bg-container">
        <h1 className="heading">Stopwatch</h1>
        <div className="timer-container">
          <div className="timer">
            <img
              className="timer-img"
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
            />
            <p className="timer-text">Timer</p>
          </div>
          <h1 className="timer-time">
            {stringifiedMinutes}:{stringifiedSeconds}
          </h1>
          <div className="timer-control-btn-container">
            <button
              type="button"
              className="btn green-bg "
              onClick={this.onClickStartTimer}
            >
              Start
            </button>
            <button
              type="button"
              className="btn red-bg"
              onClick={this.onClickStopTimer}
            >
              Stop
            </button>
            <button
              type="button"
              className="btn yellow-bg"
              onClick={this.onClickResetTimer}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default StopWatch
