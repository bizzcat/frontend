var app = document.getElementById('app');
app.innerHTML = "hello"

var React = require('react');
var ReactDOM = require('react-dom');


var HelloWorld = React.createClass({
  render: function() {
    var listItems = [];

    for (var i = 1; i < 10; i++) {
      let myStyle = {
        fontSize: i * i + 'px',
      }
      listItems.push(<p key={i} style={myStyle}> Wooohooo {i} </p>);
    }

    return (
      <div>
      {listItems}
        Hello
      </div>
    )
  }
});

ReactDOM.render(
  <HelloWorld />,
  document.getElementById('app')
);
