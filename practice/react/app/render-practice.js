

var Button = React.createClass({
  render: function() {
    return (
      <a className="btn btn-default">I am a button! Click me!</a>
    );
  }
}); 

React.render(<Button />, document.getElementById('content'));
