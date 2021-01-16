import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Skip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {cats: [], index: 0 }
    this.handleCatsClick = this.handleCatsClick.bind(this)
  }

  handleCatsClick() {
    console.log("skip")
    this.props.handleCats()
  }

      render() {
        const { cats, cat, index } = this.state;
      return(
        <div className="buttons">
          <button id="skip" onClick={this.handleCatsClick}>
            <FontAwesomeIcon icon="forward" />
          </button>
        </div>
    );
  }
}

export default Skip;
