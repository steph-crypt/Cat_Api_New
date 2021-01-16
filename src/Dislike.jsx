import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Dislike extends React.Component {
  constructor(props) {
    super(props);
    this.state = {cats: [], index: 0 }
    this.handleCatsClick = this.handleCatsClick.bind(this)
  }

  handleCatsClick() {
    console.log("dislike")
    this.props.handleCats()
  }

      render() {
        const { cats, cat, index } = this.state;
      return(
         <div className="buttons">
          <button id="dislike" onClick={this.handleCatsClick}>
            <FontAwesomeIcon icon="times" />
          </button>
        </div>
    );
  }
}

export default Dislike;
