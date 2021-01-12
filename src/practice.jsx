import React, { Component } from "react";
import ReactDOM from "react-dom";
import Play from "./Play";
import Cat from "./Cat";
import Timer from "./Timer";

class App extends Component {
  constructor(props) {
  super(props);
    this.state = {time: 60, cat: {}, play: false}
  }
}

handPlayGame() {
  this.setState(this.state.play: true)
  this.setState(this.state.time -1)
  this.setState(this.state.cat)
}

  render() {
    return
  }
}
