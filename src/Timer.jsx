import React from "react";
// import PlayAgain from "PlayAgain";
//when Play is clicked - Timer should mount and begin countdown.
// when timer reaches zero - it should unmount and run the like specs.

class Timer extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
      minutes: 1,
      seconds: 0
    }
  }

  render() {
    let { minutes, seconds} = this.props
    return (
      <div>
        <h2>{this.props.minutes}:{ this.props.seconds < 10 ? `0${ this.props.seconds }` : this.props.seconds}</h2>
        <h2>{this.props.time}.</h2>
      </div>
    );
  }
}

// will refer to button component
//const Timer function()
//<PlayAgain />
// setInterval()
// clearInterval()

export default Timer;

