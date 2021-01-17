import React from "react";
// import PlayAgain from "PlayAgain";
//when Play is clicked - Timer should mount and begin countdown.
// when timer reaches zero - it should unmount and run the like specs.

class Timer extends React.Component {
   constructor(props) {
    super(props);
  }

  render() {
    let {seconds} = this.props
    return (
      <div id="timer">
        <h2>{this.props.seconds < 10 ? `0${this.props.seconds}` : this.props.seconds}</h2>
      </div>
    );
  }
}

export default Timer;

