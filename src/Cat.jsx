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
              <div className="cat-info">
                <h1>{cat.name}</h1>
                <p>{cat.temperament}</p>
              </div>
            </div>

          )
    }
}

export default Cat;
