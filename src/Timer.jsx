import React from "react";
// import PlayAgain from "PlayAgain";
//when Play is clicked - Timer should mount and begin countdown.
// when timer reaches zero - it should unmount and run the like specs.

class Timer extends React.Component {
   constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   this.timerID = setInterval(
  //     () => this.tick(),
  //     1000
  //   );
  // }

  // componentWillUnmount() {
  //   clearInterval(this.timerID);
  // }

  render() {
    return (
      <div>
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

