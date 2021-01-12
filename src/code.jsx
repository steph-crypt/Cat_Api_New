let { totalCats } = this.state.cats.length;
    console.log(totalCats)
    let index = this.state.cats[this.state.index];
    if (index === totalCats - 1) {
      index = 0
    } else {
      index++;
    }

this.setState({cats: this.state.cat[this.state.index] + 1});

<h1>{this.props.cat.message ? this.props.cat.message : "None"}</h1>

   <img src={this.props.cats.image} alt="cat image" />

      <h1>{this.props.cats.name}</h1>


function CatDetails() {
      cat.each(cat => {
        console.log(this.props.cats.id);
        <img src={this.props.cats.image
        url} alt="cat image" />
      }
      )
    }
    <img src={image} alt="cat img" key={cat.id} />

<img key={cat.id} src={cat.height} alt="cat image" />

   <h1>{allCats.length ? cats.map(cat=> { return {allCats.id} }) :  ( Neo, there is no cat)}</h1>
      )
    }
    </div>

    handlePlay = () => {
   this.setState({time: this.state.time -1});
  }

     // <Cat
                //   key={cat.id}
                //   name={cat.name}

                //   />

  const allCats = this.props.cats;
  console.log(allCats);

 return (
    <div className="container">
      <div className="left-column">
        <h1 id="header">Kitty Tinder</h1>
          <Play handlePlay={this.handlePlay}/>
          <Timer time={this.state.time}/>
          <Like />
          <Dislike />
          <Skip />
      </div>
      <div className="right-column">
        <Cat cat={this.state.cats}/>
      </div>
    </div>
    )

    <li key={cat.id}>
                  {cat.name}
                </li>
