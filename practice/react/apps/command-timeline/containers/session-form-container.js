var React = require('react');
var SessionForm = require('../components/SessionForm')

var SessionFormContainer = React.createClass({
  onUpdateCommandName: function() {
    return;
  }

  onUpdateCommandType: function() {
    return;
  }

  onUpdateCreatedBy: function() {
    return;
  }

  onUpdateSentTo: function() {
    return;
  }

  onSubmitCommand: function() {
    return;
  }

  render: function() {
    return;
  }
})





var PromptContainer = React.createClass({

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function() {
    return {
      username: ''
    }
  },
  handleUpdateUser: function(e) {
    this.setState({
      username: e.target.value
    })
  },
  handleSubmitUser: function(e) {
    e.preventDefault();
    var username = this.state.username;
    this.setState({
      username: ''
    });

    if (this.props.routeParams.playerOne) {
      this.context.router.push({
        pathname: '/gb/battle',
        query: {
          playerOne: this.props.routeParams.playerOne,
          playerTwo: this.state.username,
        }
      })
    } else {
      this.context.router.push('/gb/playerTwo/' + this.state.username)
    }
  },

  render: function() {
    return (
      <Prompt
        onSubmitUser={this.handleSubmitUser}
        onUpdateUser={this.handleUpdateUser}
        header={this.props.route.header}
        username={this.state.username}
      />
    )

  }
});

module.exports = SessionFormContainer;
