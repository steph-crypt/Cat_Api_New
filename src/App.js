import React from "react";
import ReactDOM from "react-dom";
import Play from "./Play";
import Cat from "./Cat";

const App = () => {
  return (
    <div className="container">
      <div className="left-column">
        <h1 id="header">Kitty Tinder</h1>
          <Play />
      </div>
      <div className="right-column">
        <Cat name= "Trotzky" life_span="4" temperment="Grumpy"/>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
