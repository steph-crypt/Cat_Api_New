import React, { Component } from "react";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faForward, faHeart, faTimes } from '@fortawesome/free-solid-svg-icons'
library.add(faForward, faHeart, faTimes)
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
        minutes: 1,
        seconds: 0,
        time: 60,
        cats: [],
        like: false,
        likeArray: [],
        dislike: false,
        dislikeArray: [],
        skip: false,
        skipArray: [],
        index: 0
      };
  }

  handlePlay = () => {
   this.setState({
      time: this.state.time -1,
      seconds: this.state.seconds,
      minutes: this.state.minutes
    });
  };

  setTimer = () => {
    this.timerInterval = setInterval(() => {
    const { seconds, minutes } = this.state
      if (seconds > 0) {
        this.setState(({ seconds }) => ({
          seconds: seconds - 1
        }))
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(this.timerInterval)
        } else {
          this.setState(({ minutes }) => ({
            minutes: minutes - 1,
            seconds: 59
          }))
        }
      }
    }, 1000)
  };

  handleCats = () => {
    this.setState({
      cats: this.state.cats,
      cat: this.state.cats[this.state.index],
      index: this.state.index += 1
    });
    console.log("meow")
  };

  componentDidMount = () => {
    fetch("https://api.thecatapi.com/v1/breeds")
      .then(res => res.json())
      .then(
        (result)=> {
        this.setState({
          cats: result
         });
      },
    )
  };

  render() {
      return (
        <div className="container">
          <div className="container-left">
            <h1 id="header">Kitty Tinder</h1>
              <Play handlePlay={this.handlePlay}
                    setTimer={this.setTimer}
              />
                     <div className="timer">
                      <h2>
                        <Timer
                         time={this.state.time}
                         minutes={this.state.minutes}
                         seconds={this.state.seconds}
                        />
                       </h2>
                    </div>
                }
          </div>
          <div className="container-right">
            <div className="right-components">
              {this.state.cats.length
                ? <Cat
                      cat={this.state.cats[this.state.index]}
                      key={this.state.cats.id}
                  />
                : null
              }
              <div className="button-parent">
                <div className="like-buttons">
                  <Like
                    cats={this.state.cats}
                    index={this.state.cats[this.state.index]}
                    handleCats={this.handleCats}
                    index={0}
                  />
                  <Dislike
                    handleCats={this.handleCats} />
                  <Skip
                    handleCats={this.handleCats} />
                </div>
              </div>
            </div>
          </div>
        </div>
        )
      }
};

ReactDOM.render(<App />, document.getElementById("root"));




