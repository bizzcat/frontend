'use strict';

var React = require('react');
var _ = require('lodash');
var OverlayTrigger = require('react-bootstrap/lib/OverlayTrigger');
var Popover = require('react-bootstrap/lib/Popover');
// var styles = require('../styles');


var Command = React.createClass({

  getTimeStamp: function() {
    return this.props.command.timeStamp;
  },


  getCommandName: function() {
    return this.props.command.commandName;
  },


  getTeacherNameFromID: function() {
    var createdByID = this.props.command.createdBy;
    var teacherObject = _.find(this.props.teachers, ['id', createdByID]);
    return teacherObject.name;
  },


  getStudentNamesFromID: function() {
    var sentToList = this.props.command.sentTo;
    var studentList = this.props.students;
    var sentToNames = [];

    _(sentToList).forEach(function(sentToID) {
      var studentObject = _.find(studentList, ['id', sentToID]);
      sentToNames.push(studentObject.name);
    });

    var studentNamesString = sentToNames.join(', ');

    // var namesBelowSix = [];
    // var namesAboveSix = [];
    //
    // for (var index in sentToNames) {
    //   if (index < 6) {
    //     namesBelowSix.push(sentToNames[index]);
    //   }
    //   else if (index >= 6) {
    //     namesAboveSix.push(sentToNames[index]);
    //   }
    // }
    //
    // if (studentList.length < 6) {
    //   var studentNamesString = namesBelowSix.join(', ');
    // }
    // else if (studentList.length > 6) {
    //   var namesBelowSixString = namesBelowSix.join(', ');
    //   var namesAboveSixString = namesAboveSix.join(', ');
    //   var namesAboveSixLengthString = <p key="1" className='above-six-length' onclick={function() {console.log('meow');}}> (and {namesAboveSix.length} more) </p>;
    //   var namesAboveSixNameString = <p key="2" className='above-six' style={{display: 'none'}}> {namesAboveSixString} </p>;
    //
    //   var studentNamesStrings = [namesBelowSixString, namesAboveSixLengthString, namesAboveSixNameString];
    // }

    return studentNamesString;
  },


  getPopoverContent: function() {
    var teacherName = <p className='teacher-name' key={this.props.command.commandName + 'teachername'}> {this.getTeacherNameFromID()} </p>
    var studentNames = <p className='student-names'key={this.props.command.commandName + 'studentnames'}> {this.getStudentNamesFromID()} </p>
    var popoverContent = [teacherName, studentNames];

    return popoverContent;
  },


  getFontAwesomeFromCommandType: function() {
    if (this.props.command.commandType === "read") { var fontAwesomeIcon = <i key={this.props.command.commandName + 'fa'} className='fa fa-book'></i>};
    if (this.props.command.commandType === "play") { var fontAwesomeIcon = <i key={this.props.command.commandName + 'fa'} className='fa fa-soccer-ball-o'></i>};
    if (this.props.command.commandType === "science") { var fontAwesomeIcon = <i key={this.props.command.commandName + 'fa'} className='fa fa-medkit'></i>};
    if (this.props.command.commandType === "america") { var fontAwesomeIcon = <i key={this.props.command.commandName + 'fa'} className='fa fa-resistance'></i>};

    var fontAwesomeSpan = <span key={this.props.command.commandName} className='command-component icon'> {fontAwesomeIcon} </span>

    return fontAwesomeSpan;
  },


  assignPopover: function() {
    var fontAwesomeSpan = this.getFontAwesomeFromCommandType();
    var popoverContent = this.getPopoverContent();
    var commandName = this.props.command.commandName;

    return (
      <OverlayTrigger trigger="click" placement="right" key={commandName + 'overlay'} overlay={<Popover id={commandName} title={commandName} key={commandName} >{popoverContent}</Popover>}>
        {fontAwesomeSpan}
      </OverlayTrigger>
    )
  },


  render: function() {
    return (
      <section className='command'>
        <span className='command-component time' key={this.props.command.commandName + 'time'} > {this.getTimeStamp()} </span>
        {this.assignPopover()}
      </section>
    )
  }
});


var Session = React.createClass({


  render: function() {
    var sessionTimes = {
      "startTime": "9:00am",
      "endTime": "3:00pm",
    };

    var commands = [
      {
        "timeStamp": "9:30am",
        "commandName": "Start Reading",
        "commandType": "read",
        "createdBy": 1,
        "sentTo": [1, 2, 3, 4, 5, 6, 7, 8],
      },
      {
        "timeStamp": "11:30am",
        "commandName": "Make America great again!",
        "commandType": "america",
        "createdBy": 4,
        "sentTo": [7, 8],
      },
      {
        "timeStamp": "1:15pm",
        "commandName": "Go play outside",
        "commandType": "play",
        "createdBy": 2,
        "sentTo": [1, 2, 3, 4, 5],
      },
      {
        "timeStamp": "2:10pm",
        "commandName": "Save the gorillas!",
        "commandType": "science",
        "createdBy": 3,
        "sentTo": [1, 2, 3, 4, 5, 6, 7, 8],
      },
    ];

    var students = [
      {"name": "Billy", "id": 1},
      {"name": "Sally", "id": 2},
      {"name": "Sid", "id": 3},
      {"name": "Squid", "id": 4},
      {"name": "Kyle", "id": 5},
      {"name": "Lyle", "id": 6},
      {"name": "Dopey", "id": 7},
      {"name": "Mopey", "id": 8}
    ];

    var teachers = [
      { "name": "Mr. Adams", "id": 1 },
      { "name": "Mrs. Jefferson", "id": 2 },
      { "name": "Mrs. Goodall", "id": 3 },
      { "name": "Mr. Trump", "id": 4 },
    ];

    var sessionData = {
      sessionTimes,
      commands,
      students,
      teachers
    };

    var sessionStartComponent = (
      <section className='command' key={sessionTimes.startTime + 'start'}>
        <span className='command-component time' key={sessionTimes.startTime + 'starttime'}> {sessionTimes.startTime} </span>
        <span className='command-component icon start-icon' key={sessionTimes.startTime + 'starticon'}></span>
      </section>
    );

    var sessionEndComponent = (
      <section className='command' key={sessionTimes.endTime + 'end'}>
        <span className='command-component time' key={sessionTimes.endTime + 'endtime'}> {sessionTimes.endTime} </span>
        <span className='command-component icon end-icon' key={sessionTimes.endTime + 'endicon'}></span>
      </section>
    );

    var commandComponents = [];
    _(sessionData.commands).forEach(function(cmd) {
      commandComponents.unshift(<section className='buffer' key={cmd.commandName + 'buffer'}></section>)
      commandComponents.unshift(<Command command={cmd} students={sessionData.students} teachers={sessionData.teachers} key={cmd.commandName}/>);
    });

    return (
      <div>
        {sessionEndComponent}
        <section className='buffer' key={'endbuffer'}></section>
        {commandComponents}
        {sessionStartComponent}
      </div>
    )
  }
});

$(document).ready(function(){
    $('[data-toggle="popover"]').popover();
});

module.exports = Session;
