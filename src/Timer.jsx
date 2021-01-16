import React from "react";
// import PlayAgain from "PlayAgain";
//when Play is clicked - Timer should mount and begin countdown.
// when timer reaches zero - it should unmount and run the like specs.

class Timer extends React.Component {
   constructor(props) {
    super(props);
  }

  render() {
    let { minutes, seconds, cats, likeArray, dislikeArray, skipArray} = this.props
    return (
      <div>
        <div id="timer">
          <h2>{this.props.minutes === 0 ? `0${this.props.minutes}` : this.props.minutes}:{this.props.seconds < 10 ? `0${this.props.seconds}` : this.props.seconds}</h2>
        </div>
        <div class="like-results">
          <h1>Your Results</h1>
            <h1>Total Cats Seen: {this.props.cats.length}</h1>
            <h2>Likes: {this.props.likeArray.length}</h2>
            <h2>Dislikes: {this.props.dislikeArray.length}</h2>
            <h2>Skips: {this.props.skipArray.length}</h2>
        </div>
      </div>
    );
  }
}

export default Timer;

