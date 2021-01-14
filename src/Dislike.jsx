import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Dislike extends React.Component {
  constructor(props) {
    super(props);
  }
      render() {
        // this.props.handleGame();
      return(
         <div className="buttons">
          <button id="dislike" onClick={this.handleCats}>
            <FontAwesomeIcon icon="times" />
          </button>
        </div>
    );
  }
}

export default Dislike;
