import React, { Component } from "react";
import ReactDOM from "react-dom";
import Play from "./Play";
import Cat from "./Cat";
import Timer from "./Timer";
import Like from "./Like";
import Dislike from "./Dislike";
import Skip from "./Skip";

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        time: 60,
        cats: [],
        like: false,
        dislike: false,
        skip: false,
        isLoaded: false,
        index: 0
      };
  }

  handlePlay = () => {
   this.setState({time: this.state.time -1});
  };

  componentDidMount = () => {
    fetch("https://api.thecatapi.com/v1/breeds")
      .then(res => res.json())
      .then(
        (result)=> {
        this.setState({
          cats: result,
          isLoaded: true,
          like: true,
          dislike: true,
          skip: true
         });
      },
    )
  };

  render() {
      return (
        <div className="container">
          <div className="left-column">
            <h1 id="header">Kitty Tinder</h1>
              <Play handlePlay={this.handlePlay}/>
              <Timer time={this.state.time}/>
              <Like
                cats={this.state.cats}
                cat={this.state.cats[this.state.index]}
                handleCat={this.handleCat}
                index={[this.state.index]}/>
              <Dislike />
              <Skip />
          </div>
          <div className="right-column">
            {this.state.cats.length ? <Cat cat={this.state.cats[this.state.index]}/> : null }
          </div>
        </div>
        )
      }
};

ReactDOM.render(<App />, document.getElementById("root"));




