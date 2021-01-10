import React from "react";
// import Timer from "./Timer";
//PlayRoot = document.querySelector("button");

class Play extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isPlayOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isPlayOn: !state.isPlayOn
    }));
    this.props.handlePlay()
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isPlayOn ? 'Play' : 'Play Again'}
      </button>
    );
  }

}

export default Play;
