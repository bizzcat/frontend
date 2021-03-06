var React = require('react');
var Datetime = require('react-datetime'); // https://github.com/YouCanBookMe/react-datetime


var SessionFormContainer = React.createClass({

  onSubmitStart: function() {
    return;
  },

  renderMonth: function(props, month, year, selectedDate){
    console.log(props);
    console.log(year);
    console.log(year);
    console.log(selectedDate);
  },

  render: function() {
    return(
      <div className="jumbotron col-sm-6 col-sm-offset-2 text-center">
        <h1>New Session</h1>
        <h3>Session Start</h3>
        <div className="col-sm-12">
          <h5>Date</h5>
          <Datetime
            timeFormat={false}
            renderMonth={this.renderMonth}
          />

          <h5>Start Time</h5>
          <Datetime
            dateFormat={false}
          />
        </div>
      </div>)
  }
})

module.exports = SessionFormContainer;



// var DualDateTimePicker = require('../components/SessionForm');
// var Globalize = require('globalize');
// var globalizelocalizer = require('react-widgets/lib/localizers/globalize');
// var Cldr = require( "cldrjs" );
// var dateFormatter = .dateFormatter({ date: "medium" })( new Date() )
// cldr.js
// cldr/event.js
// cldr/supplemental.js
// globalize.js
// globalize/number.js
// globalize/date.js
//
// Globalize.load(
//   require( 'cldr/supplemental/likelySubtags.json' ),
//   require( 'cldr-data/main/en/ca-gregorian' ),
//   require( 'cldr/main/en/timeZoneNames.json' ),
//   require( 'cldr/supplemental/timeData.json' ),
//   require( 'cldr/supplemental/weekData.json' ),
//   require( 'cldr/main/en/numbers.json' ),
//   require( 'cldr/supplemental/numberingSystems.json' )
//   );

// Globalize.load( require( "cldr-data" ).entireSupplemental() );
// Globalize.load( require( "cldr-data" ).entireMainFor( "en" ) );
//
// Globalize.locale('en-GB');
// globalizelocalizer(Globalize);
//
// var ReactWidgets = require('react-widgets'); //.less
// var DateTimePicker = ReactWidgets.DateTimePicker;
// var DualDateTimePicker = React.createClass({
//
//   getInitialState() {
//     return { value0: new Date(), value1: null };
//   },
//
//   render() {
//     var change = (name, value) => this.setState({
//       ['value' + name]: value
//     });
//
//     return (<div>
//       <DateTimePicker
//         value={this.state.value0}
//         onChange={change.bind(null, '0')}/>
//       <DateTimePicker
//         value={this.state.value1}
//         onChange={change.bind(null, '1')}/>
//       </div>)
//   }
// });
