import React, { Component } from "react";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faForward, faHeart, faTimes } from '@fortawesome/free-solid-svg-icons'
import ReactDOM from "react-dom";
import Play from "./Play";
import PlayAgain from "./PlayAgain";
import Timer from "./Timer";
import Cat from "./Cat";
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
        seenArray: [],
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

  resetTimer = () => {
    clearInterval(this.timerInterval)
    this.setState({
      minutes: 1
    })
    console.log(this.state.minutes)
  };

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

  sortSeen = () => {
    this.setState({
      cats: this.state.cats,
      seenArray: this.state.seenArray.concat(this.state.cats[this.state.index])
    })
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
              <h3>You have 1 minute to choose your favorite and least favorite cats!</h3>
              <div className="play">
                {this.state.minutes === 0 && this.state.seconds === 0
                 ? <PlayAgain
                    handlePlay={this.handlePlay}
                    setTimer={this.setTimer}
                    resetTimer={this.resetTimer}
                    />
                 : <Play
                    handlePlay={this.handlePlay}
                    setTimer={this.setTimer}
                  />
                }
              </div>
              <div className="timer">
                <h2>
                {this.state.minutes === 0 && this.state.seconds === 0
                ? <Timer style={{ display: 'none' }}
                  />
                : <Timer
                     minutes={this.state.minutes}
                     seconds={this.state.seconds}
                     cats={this.state.cats}
                  />
                }
                 </h2>
              </div>
              <div className="results">
                {this.state.minutes === 0 && this.state.seconds === 0
                  ? <Results
                      cats={this.state.cats}
                      likeArray={this.state.likeArray}
                      dislikeArray={this.state.dislikeArray}
                      skipArray={this.state.skipArray}
                      seenArray={this.state.seenArray}
                    />
                  : " " }
              </div>
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
                    likeArray={this.state.likeArray}
                    sortLikes={this.sortLikes}
                    seenArray={this.state.seenArray}
                    sortSeen={this.sortSeen}
                  />
                  <Dislike
                    cats={this.state.cats}
                    index={this.state.cats[this.state.index]}
                    handleCats={this.handleCats}
                    dislikeArray={this.state.dislikeArray}
                    sortDislikes={this.sortDislikes}
                    seenArray={this.state.seenArray}
                    sortSeen={this.sortSeen}
                  />
                  <Skip
                    cats={this.state.cats}
                    index={this.state.cats[this.state.index]}
                    handleCats={this.handleCats}
                    skipArray={this.state.skipArray}
                    sortSkips={this.sortSkips}
                    seenArray={this.state.seenArray}
                    sortSeen={this.sortSeen}
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




