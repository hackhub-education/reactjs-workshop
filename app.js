 /** @jsx React.DOM */
var App = React.createClass({
  render: function(){
    return (
      <div>
        <h1>Hello Pokemon!</h1>
        <img src="images/pokeball-1.png" style={{width: "300px", height: "300px"}}></img>
      </div>
    )
  }
})

ReactDOM.render(<App />, document.getElementById("app"))