import React from "react";

class Skip extends React.Component {
  constructor(props) {
    super(props);
  }
      render() {
      return(
        <div className="buttons">
          <button id="skip" onClick={this.handleCats}>Skip</button>
        </div>
    );
  }
}

export default Skip;
