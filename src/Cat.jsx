import React from "react";

const Cat = props => {
  return (
    <div className="card">
      <div className="cat-specs">
        <h1>{props.id}</h1>
        <h2>{props.name}, {props.life_span}</h2>
        <h2>{props.temperment}</h2>
      </div>
    </div>
  );
}

export default Cat;
