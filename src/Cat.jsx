import React, { Component } from "react";

class Cat extends Component {
  constructor(props) {
    super(props);
  } render() {
    console.log(this.props.cat.message);
  return (
    <div className="card">
      <div className="cat-specs">
      <img src={this.props.cat.message} alt={name} />
        <h1>{this.props.cat.message ? this.props.cat.message : "None"}</h1>
      </div>
    </div>
  )
  }
}

export default Cat;
