import React from "react";

class PlayAgain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {seconds: 0, minutes: 1, isPlayOn: true};
    this.resetTimer = this.resetTimer.bind(this);
  }

  resetTimer() {
    this.setState(state => ({
      seconds: state.seconds === 0,
      minutes: state.minutes === 1,
      isPlayOn: !state.isPlayOn
    }));
    console.log('test')
    this.props.handlePlay()
    this.props.setTimer()
  };

  render() {
    return (
      <button id="play-again" onClick={this.resetTimer}>Play Again</button>
    );
  }
}

export default PlayAgain;

