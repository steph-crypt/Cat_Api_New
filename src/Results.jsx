import React from "react";

class Results extends React.Component {
   constructor(props) {
    super(props);
  }

  render() {
    const { cats, likeArray, dislikeArray, skipArray } = this.props;
    return(
        <div class="like-results">
          <h1>Your Results</h1>
            <h2>Total Cats Seen: <strong>{this.props.cats.length}</strong></h2>
            <h2>Likes: <strong>{this.props.likeArray.length}</strong></h2>
            <h2>Dislikes: <strong>{this.props.dislikeArray.length}</strong></h2>
            <h2>Skips: <strong>{this.props.skipArray.length}</strong></h2>
      </div>
      )
    }
}

export default Results;
