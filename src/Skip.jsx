import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Skip extends React.Component {
  constructor(props) {
    super(props);
  }
      render() {
      return(
        <div className="buttons">
          <button id="skip" onClick={this.handleCats}>
            <FontAwesomeIcon icon="forward" />
          </button>
        </div>
    );
  }
}

export default Skip;
