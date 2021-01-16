import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class Like extends React.Component {
  constructor(props) {
    super(props);
    this.state = {cats: [], index: 0 }

    this.handleCatsClick = this.handleCatsClick.bind(this)
  }

 handleCatsClick() {
  // this.setState(state => ({
  //   //   isPlayOn: !state.isPlayOn
  //   // }));
  this.props.handleCats();
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
        const { cats, cat, index } = this.state;
        return(
          <div className="buttons">
            <button id="like" onClick={this.handleCatsClick}>
              <FontAwesomeIcon icon="heart" />
            </button>
          </div>
    );
  }
}

export default Like;
