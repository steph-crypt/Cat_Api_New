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

  handleCats = () => {
    this.setState({index: +cats[index]})
    console.log(cats[index].image.url, cats[index].name)
  };

  sortCats = () => {

  }

  handlePlay = () => {
   this.setState({
      time: this.state.time -1,
      seconds: this.state.seconds,
      minutes: this.state.minutes
    });
  };

  setTimer = () => {
    this.setState({
      seconds: this.state.seconds,
      minutes: this.state.minutes
    });
  this.gameInterval = setInterval(() => {
    let {minutes, seconds} = this.state

      if (seconds > 0) {
        this.setState(({seconds}) => ({
          seconds: seconds - 1
        })
     )}

      if (seconds === 0 && minutes === 0) {
          clearInterval(this.gameInterval);
        } else {
          this.setState(({minutes}) => ({
            minutes: minutes - 1,
            seconds: 59
          }))
        }
    }, 1000)
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
          <div className="left-column">
            <h1 id="header">Kitty Tinder</h1>
              <Play handlePlay={this.handlePlay}/>
                { this.state.minutes === 0 && this.state.seconds === 0
                  ? <div className="time-scores">
                      <h1>Total Cats Seen:{this.state.cats.length}</h1>
                      <h2>Likes:{this.state.likeArray.length}</h2>
                      <h2>Dislikes:{this.state.dislikeArray.length}</h2>
                      <h2>Skips:{this.state.skipArray.length}</h2>
                    </div>
                  : <div className="timer">
                      <h2>
                        <Timer
                         time={this.state.time}
                         setTime={this.setTime}
                         countDown={this.state.seconds < 10 ? `0${ this.state.seconds }` : this.state.seconds }
                        />
                       </h2>
                    </div>
                }
          </div>
          <div className="right-column">
            {this.state.cats.length
              ? <Cat cat={this.state.cats[this.state.index]}
                    key={this.state.cats.id} />
              : null
            }
            <Like
                cats={this.state.cats}
                cat={this.state.cats[this.state.index]}
                handleCat={this.handleCats}
                index={0}/>
              <Dislike />
              <Skip />
          </div>
        </div>
        )
      }
};
ReactDOM.render(<App />, document.getElementById("root"));




