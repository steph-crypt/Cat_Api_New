import React from "react";

class Like extends React.Component {
  constructor(props) {
    super(props);
    this.state = {cats: []}
  }

  render() {
    const { cats, cat, index, like, likeArray } = this.state;
  return(
    <div>
      <div className="buttons">
        <button id="like" onClick={this.handleCats}>Like</button>
      </div>
    </div>
    );
  }
}

export default Like;
