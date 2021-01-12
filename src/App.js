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
        cat: {},
        likeArray: [],
        dislikeArray: [],
        skipArray: []
      };
  }

  handlePlay = () => {
   this.setState({time: this.state.time -1});
  }

  // handleGame = () => {
    //on click should make the api call aagain.
  //   this.setState({likeArray: [...this.state.likeArray, newel]});
  //   this.setState({dislikeArray: [...this.state.dislikeArray, newel]});
  //   this.setState({skipArray: [...this.state.skipArray, newel]});
  // }

  componentDidMount = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(res => res.json())
      .then(
        (result)=> {
        console.log(result);
        this.setState({
          cat: result
         });
      },
    )
  }


  render() {
    console.log(this.state.cat);
    return (
    <div className="container">
      <div className="left-column">
        <h1 id="header">Kitty Tinder</h1>
          <Play handlePlay={this.handlePlay}/>
          <Timer time={this.state.time}/>
          <Like />
          <Dislike />
          <Skip />
      </div>
      <div className="right-column">
        <Cat cat={this.state.cat}/>
      </div>
    </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById("root"));


