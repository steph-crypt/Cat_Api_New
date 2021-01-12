import React, { Component } from "react";

class Cat extends Component {
  constructor(props) {
    super(props);
  }
    render() {
      var { cat } = this.props;
          return (
            <div className="card">
                <img src={cat.image.url} alt="cat img" />
                <h1>{cat.name}</h1>
                <h2>{cat.temperment}</h2>
            </div>
          )
    }
}

export default Cat;
