import React from "react";
import ReactDOM from "react-dom";
import Play from "./Play";
import Cat from "./Cat";

const App = () => {
  return (
    <div className="container">
      <div className="d-flex justify-content-center">
        <div className="row">
          <div className="left-column col-6">
            <div id="header">
              <h1>Kitty Tinder</h1>
            </div>
              <button id="play">Play</button>
          </div>
            <div className="col-6 p-5">
              <Cat name= "Trotzky" life_span="4" temperment="Grumpy"/>
            </div>
         </div>
       </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
