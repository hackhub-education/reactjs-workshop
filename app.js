 /** @jsx React.DOM */
var App = React.createClass({
  render: function(){
    return (
      <div>
        <h1>Hello Pokemon!</h1>
      </div>
    )
  }
})

ReactDOM.render(<App />, document.getElementById("app"))