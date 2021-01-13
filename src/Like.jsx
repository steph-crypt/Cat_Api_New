import React from "react";

class Like extends React.Component {
  constructor(props) {
    super(props);
    this.handleCatsClick = this.handleCatsClick.bind(this);
    this.state = { cats: [], index: 0 };
  }

 handleCatsClick = (e) => {
  this.props.handleCats(this.props.index)
  e.preventDefault();
    index += 1;
    console.log(cats[index])
}
    //   if (index >= totalCats) {
    //     index = 0;
    //   } else {



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
        <div>
          <div className="buttons">
            <button id="like" onClick={this.handleCatsClick}>Like</button>
          </div>

        </div>
    );
  }
}

export default Like;
