var React = require('react');
var PropTypes = React.PropTypes;

function CommandForm(props) {
  return (
    <div className="jumbotron col-sm-6 col-sm-offset-2 text-center" style={transparentBg}>
      <h1>New Command</h1>
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

CommandForm.propTypes = {
  header: PropTypes.string.isRequired,
  onUpdateUser: PropTypes.func.isRequired,
  onSubmitUser: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired
}

module.exports = CommandForm;
