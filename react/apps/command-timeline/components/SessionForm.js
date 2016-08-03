var React = require('react');
// var PropTypes = React.PropTypes;

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
// SessionForm.propTypes = {
//   header: PropTypes.string.isRequired,
//   onUpdateUser: PropTypes.func.isRequired,
//   onSubmitUser: PropTypes.func.isRequired,
//   username: PropTypes.string.isRequired
// }

module.exports = SessionForm;
