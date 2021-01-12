import React, { Component } from "react";

class Cat extends Component {
  render() {
    console.log(this.props.cat);
  return (
    <div className="card">
      <div className="cat-specs">
        <h1>{this.props.cat.id ? this.props.cat.id : "None"}</h1>
      </div>
    </div>
  )};
}

export default Cat;
