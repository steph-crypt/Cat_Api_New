import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Dislike extends React.Component {
  constructor(props) {
    super(props);
    this.state = {cats: [], index: 0, dislikeArray: [], seenArray: []}
    this.handleCatsClick = this.handleCatsClick.bind(this)
  }

  handleCatsClick() {
    this.props.handleCats();
    this.props.sortDislikes();
    this.props.sortSeen();
  }

      render() {
        const { cats, cat, index, dislikeArray, seenArray } = this.props;
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
