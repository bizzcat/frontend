var React = require('react');
var PropTypes = React.PropTypes;

var ReactWidgets = require('react-widgets/lib/less/react-widgets'); //.less
var DateTimePicker = ReactWidgets.DateTimePicker;

var DualDateTimePicker = React.createClass({

  getInitialState() {
    return { value0: new Date(), value1: null };
  },

  render() {
    var change = (name, value) => this.setState({
      ['value' + name]: value
    });

    return (<div>
      <DateTimePicker
        value={this.state.value0}
        onChange={change.bind(null, '0')}/>
      <DateTimePicker
        value={this.state.value1}
        onChange={change.bind(null, '1')}/>
      </div>)
  }
});


function SessionForm(props) {
  return (
    <div className="jumbotron col-sm-6 col-sm-offset-2 text-center" style={transparentBg}>
      <h1>New Session</h1>
      <div className="col-sm-12">
        <form onSubmit={props.onSubmitCommand}>
          <div className="form-group">
            <input
              className="form-control"
              placeholder="Command Name"
              onChange={props.onUpdateCommandName}
              value={props.username}
              type="text" />
            <input
              className="form-control"
              placeholder="Command Type"
              onChange={props.onUpdateCommandType}
              value={props.username}
              type="text" />
            <input
              className="form-control"
              placeholder="Teacher ID"
              onChange={props.onUpdateCreatedBy}
              value={props.username}
              type="text" />
            <input
              className="form-control"
              placeholder="Student ID's"
              onChange={props.onUpdateSentTo}
              value={props.username}
              type="text" />
          </div>
          <div className="form-group col-sm-4 col-sm-offset-4">
            <button
              className="btn btn-block btn-success"
              type="submit">
              Enter Command
              </button>
          </div>
        </form>
      </div>
    </div>
  )
}

SessionForm.propTypes = {
  header: PropTypes.string.isRequired,
  onUpdateUser: PropTypes.func.isRequired,
  onSubmitUser: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired
}

module.exports = SessionForm;
