 /** @jsx React.DOM */
var PokeBall = React.createClass({
  getInitialState: function(){
    return {
      spinning: false
    }
  },

  _handleClick: function(){
    this.setState({
      spinning: !this.state.spinning
    })
  },

  render: function(){
    return (
        <img
          src={this.props.imagePath}
          className={this.state.spinning ? "spinning" : null}
          style={{width: this.props.imageWidth, height: this.props.imageHeight}}
          onClick={this._handleClick} />
    )
  }
})

var App = React.createClass({
  render: function(){
    return (
      <div>
        <h1>Hello Pokemon!</h1>
        <PokeBall
          imagePath="images/pokeball-1.png"
          imageWidth="300px"
          imageHeight="300px" />
        <PokeBall
          imagePath="images/pokeball-2.png"
          imageWidth="300px"
          imageHeight="300px" />
      </div>
    )
  }
})

ReactDOM.render(<App />, document.getElementById("app"))