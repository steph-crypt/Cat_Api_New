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
      <div class="dynamic-components">
        <div id="timer">
          <h2>{this.props.minutes === 0 ? `0${this.props.minutes}` : this.props.minutes}:{this.props.seconds < 10 ? `0${this.props.seconds}` : this.props.seconds}</h2>
        </div>

        <div class="like-results">
          <h1>Your Results</h1>
            <h2>Total Cats Seen: <strong>{this.props.cats.length}</strong></h2>
            <h2>Likes: <strong>{this.props.likeArray.length}</strong></h2>
            <h2>Dislikes: <strong>{this.props.dislikeArray.length}</strong></h2>
            <h2>Skips: <strong>{this.props.skipArray.length}</strong></h2>
        </div>
      </div>
    );
  }
}

export default Timer;

