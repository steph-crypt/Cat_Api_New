import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class Like extends React.Component {
  constructor(props) {
    super(props);
    this.state = {cats: []}

    this.handleCats = this.handleCats.bind(this)
  }

 handleCats = (e) => {
  console.log("click happened");
}


// let index = 0;
// function handleCats() {
// let totalCats = cats.length;
//  if
//   index += 1;
// likeArray.push(cats[index])
// );

  // likeCats = (event) => {
  // this.props.handleCats();
  // let likeArray = []
  // let newLikeArray = likeArray.push(this.cat[index]);
  // }

      render() {
        const { cats, cat, index, like, likeArray } = this.state;
        return(
          <div className="buttons">
            <button id="like" onClick={this.handleCats}>
              <FontAwesomeIcon icon="heart" />
            </button>
          </div>
    );
  }
}

export default Like;
