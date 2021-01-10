import React, { Component } from "react";
import ReactDOM from "react-dom";
import Play from "./Play";
import Cat from "./Cat";
import Timer from "./Timer";

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {time: 60, cat: {}};
  }

  handlePlay = () => {
   this.setState({time: this.state.time -1})
  }

  componentDidMount = () => {
    fetch("https://api.thecatapi.com/v1/images/search").then(res => res.json()).then((result)=> {
    console.log(result);
    this.setState({cat: result})
    });
  }

  render() {
    console.log(this.state.cat);
    return (
    <div className="container">
      <div className="left-column">
        <h1 id="header">Kitty Tinder</h1>
          <Play handlePlay={this.handlePlay}/>
          <Timer time={this.state.time}/>
      </div>
      <div className="right-column">
        <Cat cat={this.state.cat}/>
      </div>
    </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById("root"));


