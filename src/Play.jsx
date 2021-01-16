import React from "react";

class Play extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isPlayOn: true};
    // This binding is necessary to make `this` work in the callback
    this.handlePlayClick = this.handlePlayClick.bind(this);
  }

  handlePlayClick() {
    this.setState(state => ({
      isPlayOn: !state.isPlayOn
    }));
    this.props.handlePlay()
    this.props.setTimer()
  }

  render() {
    return (
      <button id="play-button" onClick={this.handlePlayClick}>Play</button>
    );
  }
}

export default Play;
