var app = document.getElementById('app');
app.innerHTML = "hello"

var React = require('react');
var ReactDOM = require('react-dom');

var HelloWorld = React.createClass({
  render: function() {
    return (
      <div> Hello React Js program!!!! </div>
    )
  }
});

ReactDOM.render(
  <HelloWorld />,
  document.getElementById('app')
);
