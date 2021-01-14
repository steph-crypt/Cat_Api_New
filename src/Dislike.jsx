import React from "react";

class Dislike extends React.Component {
  constructor(props) {
    super(props);
  }
      render() {
        // this.props.handleGame();
      return(
         <div className="buttons">
          <button id="dislike" onClick={this.handleCats}>Dislike</button>
        </div>
    );
  }
}

export default Dislike;
