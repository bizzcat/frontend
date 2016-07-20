var React = require('react');
// var DualDateTimePicker = require('../components/SessionForm');
var Globalize = require('globalize');
var globalizelocalizer = require('react-widgets/lib/localizers/globalize');
// var Cldr = require( "cldrjs" );
var dateFormatter = .dateFormatter({ date: "medium" })( new Date() )

Globalize.load( require('cldr-data') )
Globalize.locale('en-GB')
globalizelocalizer(Globalize);

var ReactWidgets = require('react-widgets'); //.less
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


var SessionFormContainer = React.createClass({

  onSubmitStart: function() {
    return;
  },

  render: function() {
    return(<DualDateTimePicker />)
  }
})

// function SessionForm() {
//   return (
//     <div className="jumbotron col-sm-6 col-sm-offset-2 text-center">
//       <h1>New Session</h1>
//       <div className="col-sm-12">
//         <DualDateTimePicker />
//       </div>
//     </div>
//   )
// }




//
// var PromptContainer = React.createClass({
//
//   contextTypes: {
//     router: React.PropTypes.object.isRequired
//   },
//
//   getInitialState: function() {
//     return {
//       username: ''
//     }
//   },
//   handleUpdateUser: function(e) {
//     this.setState({
//       username: e.target.value
//     })
//   },
//   handleSubmitUser: function(e) {
//     e.preventDefault();
//     var username = this.state.username;
//     this.setState({
//       username: ''
//     });
//
//     if (this.props.routeParams.playerOne) {
//       this.context.router.push({
//         pathname: '/gb/battle',
//         query: {
//           playerOne: this.props.routeParams.playerOne,
//           playerTwo: this.state.username,
//         }
//       })
//     } else {
//       this.context.router.push('/gb/playerTwo/' + this.state.username)
//     }
//   },
//
//   render: function() {
//     return (
//       <Prompt
//         onSubmitUser={this.handleSubmitUser}
//         onUpdateUser={this.handleUpdateUser}
//         header={this.props.route.header}
//         username={this.state.username}
//       />
//     )
//
//   }
// });

module.exports = SessionFormContainer;
