import React from "react";

class Like extends React.Component {
  constructor(props) {
    super(props);
    this.state = { like: true, index: 0 }
  }

  likeCats = (event) => {
  this.props.handleCats();
  let likeArray = []
  let newLikeArray = likeArray.push(this.cat[index]);
  }

      render() {
        var { cats, cat, index, like, likeArray } = this.props;
      return(
        <div>
          <div className="buttons">
            <button id="like" onClick={this.likeCats}>Like</button>
          </div>

        </div>
    );
  }
}

export default Like;
