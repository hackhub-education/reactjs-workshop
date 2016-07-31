 /** @jsx React.DOM */
var PokeBall = React.createClass({
  _handleClick: function(){
    this.props.onClick(this.props.index)
  },

  render: function(){
    return (
        <img
          src={this.props.imagePath}
          className={this.props.spinning ? "spinning" : null}
          style={{width: this.props.imageWidth, height: this.props.imageHeight}}
          onClick={this._handleClick} />
    )
  }
})

var App = React.createClass({

  getInitialState: function(){
    return {
      spinning: [false, false]
    }
  },

  _handlePokeballClick: function(index){
    var newState = {
      spinning: [false, false]
    };
    newState.spinning[index] = !this.state.spinning[index];
    this.setState(newState)
  },

  render: function(){
    return (
      <div>
        <h1>Hello Pokemon!</h1>
        <PokeBall
          index={0}
          spinning={this.state.spinning[0]}
          onClick={this._handlePokeballClick}
          imagePath="images/pokeball-1.png"
          imageWidth="300px"
          imageHeight="300px" />
        <PokeBall
          index={1}
          spinning={this.state.spinning[1]}
          onClick={this._handlePokeballClick}
          imagePath="images/pokeball-2.png"
          imageWidth="300px"
          imageHeight="300px" />
      </div>
    )
  }
})

ReactDOM.render(<App />, document.getElementById("app"))