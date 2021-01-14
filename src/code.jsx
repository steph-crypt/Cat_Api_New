  handleCats = () => {
    this.setState({cats: [], index: this.state.index})
      let {cats, index} = this.state
      let totalCats = this.state.cats.length
        if (index < totalCats) {
          this.setState(({index} => (
            index += 1
        } else {
            index = 0
        })))
          console.log(cats[index].image.url, cats[index].name)
    //onClick Cats array gets shuffled through
  };


  <div className="stats">
            <h1>Likes:`${this.likeArray.length}`</h1>
          </div>


let { totalCats } = this.state.cats.length;
    console.log(totalCats)
    let index = this.state.cats[this.state.index];
    if (index === totalCats - 1) {
      index = 0
    } else {
      index++;
    }

    setTimer() {
    console.log("hi!")
  this.gameInterval = setInterval(() => {
    const {minutes, seconds} this.state

      if (seconds > 0) {
        this.setState({seconds}) => ({
          seconds: seconds - 1
        })
      }

      if (seconds === 0 && minutes === 0) {
          clearInterval(this.gameInterval);
        } else {
          this.setState({minutes}) => ({
            minutes: minutes - 1;
            seconds: 59
          }))
        }
      }
    }, 1000)

    { minutes === 0 && seconds === 0 ? <h1}

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
       {this.state.isPlayOn ? 'Play' : 'Play Again'}

