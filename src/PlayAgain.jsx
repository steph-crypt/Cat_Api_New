import React from "react";

class PlayAgain extends React.Component {
    constructor(props) {
    super(props);
    this.state = {isPlayOn: true};
    this.handlePlayAgain = this.handlePlayAgain.bind(this);
  }

  handlePlayAgain() {
    this.setState(state => ({
      isPlayOn: !state.isPlayOn
    }));
    console.log("play it again sam")
    this.props.handlePlay()
    this.props.setTimer()
  }

  render() {
    return (
      <button id="play-again" onClick={this.handlePlayAgain}>Play Again</button>
    );
  }
}

export default PlayAgain;

