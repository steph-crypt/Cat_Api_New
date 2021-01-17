import React, { Component } from "react";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faForward, faHeart, faTimes } from '@fortawesome/free-solid-svg-icons'
import ReactDOM from "react-dom";
import Play from "./Play";
import PlayAgain from "./PlayAgain";
import Cat from "./Cat";
import Timer from "./Timer";
import Like from "./Like";
import Dislike from "./Dislike";
import Skip from "./Skip";
import Results from "./Results";
library.add(faForward, faHeart, faTimes)

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        minutes: 1,
        seconds: 0,
        cats: [],
        index: 0,
        likeArray: [],
        dislikeArray: [],
        skipArray: [],
      };
  }

  handlePlay = () => {
   this.setState({
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

  // resetTimer = () => {
  //   this.setState({
  //     seconds: 0,
  //     minutes: 1
  //   })
  //   console.log("reset")
  // };

  handleCats = () => {
    this.setState({
      cats: this.state.cats,
      cat: this.state.cats[this.state.index],
      index: this.state.index += 1
    });
    console.log(this.state.cats)
  };

  sortLikes = () => {
    this.setState({
      index: this.state.index,
      cats: this.state.cats,
      likeArray: this.state.likeArray.concat(this.state.cats[this.state.index])
    });
  }

  sortDislikes = () => {
    this.setState({
      cats: this.state.cats,
      dislikeArray: this.state.dislikeArray.concat(this.state.cats[this.state.index])
    });
  }

  sortSkips = () => {
    this.setState({
      cats: this.state.cats,
      skipArray: this.state.skipArray.concat(this.state.cats[this.state.index])
    });
  }

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
            {this.state.minutes === 0 && this.state.seconds === 0
             ? <PlayAgain
                handlePlay={this.handlePlay}
                setTimer={this.setTimer}
                />
             : <Play
                handlePlay={this.handlePlay}
                setTimer={this.setTimer}
              />
            }
              <div className="timer">
                <h2>
                  <Timer
                   minutes={this.state.minutes}
                   seconds={this.state.seconds}
                   cats={this.state.cats}
                   likeArray={this.state.likeArray}
                   dislikeArray={this.state.dislikeArray}
                   skipArray={this.state.skipArray}
                  />
                 </h2>
              </div>
              <Results
                cats={this.state.cats}
                likeArray={this.state.likeArray}
                dislikeArray={this.state.dislikeArray}
                skipArray={this.state.skipArray}
                 />
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
                    likeArray={this.state.likeArray}
                    handleCats={this.handleCats}
                    sortLikes={this.sortLikes}
                  />
                  <Dislike
                    cats={this.state.cats}
                    index={this.state.cats[this.state.index]}
                    dislikeArray={this.state.dislikeArray}
                    handleCats={this.handleCats}
                    sortDislikes={this.sortDislikes}
                  />
                  <Skip
                    cats={this.state.cats}
                    index={this.state.cats[this.state.index]}
                    skipArray={this.state.skipArray}
                    handleCats={this.handleCats}
                    sortSkips={this.sortSkips}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        )
      }
};

ReactDOM.render(<App />, document.getElementById("root"));




