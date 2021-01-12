
import React from "react";

class Like extends React.Component {
  constructor(props) {
    super(props);
    this.state = { like: true }
    this.handleCats = this.handleCats.bind(this);
  }

    handleCats = (e) => {
    e.preventDefault();
    let cats = this.props.cats;
    let totalCats = cats.length;
    let index = this.props.index;
      if (index === totalCats - 1) {
        index = 0;
      } else {
        index++;
      }
      let newCat = cats[index + 1];
      console.log(newCat)


    // this.setState({index: +e.target.dataset.index})
  };
      render() {
        var { cats, cat, index } = this.props;
      return(
        <div className="buttons">
          <button id="like" onClick={this.handleCats}>Like</button>
        </div>
    );
  }
}

export default Like;
