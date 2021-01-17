import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Like extends React.Component {
  constructor(props) {
    super(props);
    this.state = {cats: [], index: 0, likeArray: [], seenArray: []}
    this.handleCatsClick = this.handleCatsClick.bind(this)
  }

 handleCatsClick() {
  this.props.handleCats();
  this.props.sortLikes();
  this.props.sortSeen();
}

  render() {
    const { cats, cat, index, likeArray, seenArray } = this.props;
    return(
      <div className="buttons">
        <button id="like" onClick={this.handleCatsClick}>
          <FontAwesomeIcon icon="heart" />
        </button>
      </div>
    );
  }
}

export default Like;
