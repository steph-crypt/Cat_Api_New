import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Skip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {cats: [], index: 0, skipArray: [], seenArray: []}
    this.handleCatsClick = this.handleCatsClick.bind(this)
  }

  handleCatsClick() {
    this.props.handleCats();
    this.props.sortSkips();
    this.props.sortSeen();
  }

      render() {
        const { cats, cat, index, skipArray} = this.props;
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
