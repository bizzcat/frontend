// 'use strict';
//
// // hand setting data
//
//
// function prependSessionEnd(session) {
//   var endTime = "<p>" + session["endTime"] + "</p>";
//   var endSeshText = '<p> Class session ended </p>';
//   var endSeshImg = "<p class='end'></p>";
//   var sessionEnd = $('<section></section>');
//
//   sessionEnd.append( endTime )
//     .append( endSeshImg )
//     .append( endSeshText);
//
//   prependBuffer()
//   $('#session-1').prepend( sessionEnd );
// }
//
// function appendSessionStart(session) {
//   var startTime = "<p>" + session["startTime"] + "</p>";
//   var startSeshText = '<p> Class session started </p>';
//   var startSeshImg = "<p class='start'></p>";
//   var sessionStart = $('<section></section>');
//
//   sessionStart.append( startTime )
//     .append( startSeshImg )
//     .append( startSeshText );
//
//   $('#session-1').append(sessionStart);
// }
//
// function prependBuffer() {
//   $('#session-1').prepend("<section class='buffer'></section>");
// }
//
// function getTeacherLine(teachers, command) {
//   for (var index in teachers) {
//     var teacher = teachers[index]
//     var teacherID = teacher["id"]
//     var teacherName = teacher["name"]
//     if (teacherID === command["createdBy"]) {
//       return "Sent by " + teacherName;
//     }
//   }
// }
//
// function getStudentList(students, commandStudentIDs) {
//   var studentList = []
//   for (var index1 in students) {
//     var student1 = students[index1];
//     var studentID1 = student1["id"]
//
//     for (var index2 in commandStudentIDs) {
//       var studentID2 = commandStudentIDs[index2];
//
//       if (studentID1 === studentID2) {
//         studentList.push(student1["name"])
//       }
//     }
//   }
//   return studentList
// }
//
//
//
// function getStudentNamesString(studentList) {
//   var namesBelowSix = [];
//   var namesAboveSix = [];
//
//   for (var index in studentList) {
//     if (index < 6) {
//       namesBelowSix.push(studentList[index]);
//     }
//     else if (index >= 6) {
//       namesAboveSix.push(studentList[index]);
//     }
//   }
//
//   if (studentList.length < 6) {
//     var studentNamesString = namesBelowSix.join(', ');
//   }
//   else if (studentList.length > 6) {
//     var namesBelowSixString = namesBelowSix.join(', ');
//     var namesAboveSixString = namesAboveSix.join(', ');
//     var namesAboveSixTempString = "<h6 class='above-six-length'>(and " + namesAboveSix.length + " more) </h6> <h6 class='above-six' style='display: none;'> " + namesAboveSixString + "</h6>";
//
//     var studentNamesString = [namesBelowSixString, namesAboveSixTempString].join(', ');
//     }
//
//   return "<h6>" + studentNamesString + "</h6>";
// }
//
// function getCommandToolTip(command, students, teachers) {
//   var commandStudentIDs = command["sentTo"];
//   var studentList = getStudentList(students, commandStudentIDs);
//   var studentNamesString = getStudentNamesString(studentList);
//
//   var commandName = '<h4>' + command["commandName"] + '</h4>';
//   var teacherName = '<h6>' + getTeacherLine(teachers, command) + '</h6>';
//   var sentToLine = "<h5> SENT TO " + studentList.length + " STUDENTS </h5>";
//
//   var commandToolTip = [commandName, teacherName, sentToLine, studentNamesString].join('')
//
//   return commandToolTip
//   }
//
// function getFontAwesomeIcon(commandType) {
//   if (commandType === "read") { return $('<p></p>').append("<i class='fa fa-book'></i> ")};       // read play science america
//   if (commandType === "play") { return $('<p></p>').append("<i class='fa fa-soccer-ball-o'></i> ")};
//   if (commandType === "science") { return $('<p></p>').append("<i class='fa fa-medkit'></i> ")};
//   if (commandType === "america") { return $('<p></p>').append("<i class='fa fa-resistance'></i> ")};
// }
//
// function getFullCommandSection(command, commandToolTip) {
//   var commandTime = $('<p></p>').append(command["timeStamp"]);
//   var commandTeacherID = command["createdBy"];
//   var commandStudentIDs = command["sentTo"];
//   var fontAwesomeIcon = getFontAwesomeIcon(command["commandType"]);
//
//   fontAwesomeIcon.tooltip({title: commandToolTip, html: true, trigger: "none", placement: "right", padding: 0});
//   fontAwesomeIcon.click( function() {
//
//     $('.tooltip').not(this).tooltip("hide");
//     $(this).tooltip("show");
//
//     $('.above-six-length').on('click', function() {
//       $('.above-six').css('display', 'inline');
//       $(this).remove();
//     });
//   })
//
//   var commandSection = $('<section></section>')
//   commandSection.append(commandTime)
//     .append(fontAwesomeIcon)
//
//   return commandSection
// }
//
// function postCommand(commandSection) {
//   prependBuffer();
//   $('#session-1').prepend(commandSection);
// }
//
// function layoutCommands(session, commands, students, teachers) {
//   for (var index in commands) {
//     var command = commands[index];
//     var commandToolTip = getCommandToolTip(command, students, teachers);
//     var commandSection = getFullCommandSection(command, commandToolTip)
//     postCommand(commandSection);
//   }
//   prependSessionEnd(session);
//   appendSessionStart(session);
// }
//
//
// $(document).ready(function(){
//     layoutCommands(session, commands, students, teachers);
//     $('[data-toggle="tooltip"]').tooltip();
// });


var sessionTimes = {
  "startTime": "9:00am",
  "endTime": "3:00pm",
}

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
]


var students = [
  {"name": "Billy", "id": 1},
  {"name": "Sally", "id": 2},
  {"name": "Sid", "id": 3},
  {"name": "Squid", "id": 4},
  {"name": "Kyle", "id": 5},
  {"name": "Lyle", "id": 6},
  {"name": "Dopey", "id": 7},
  {"name": "Mopey", "id": 8}
]

var teachers = [
  { "name": "Mr. Adams", "id": 1 },
  { "name": "Mrs. Jefferson", "id": 2 },
  { "name": "Mrs. Goodall", "id": 3 },
  { "name": "Mr. Trump", "id": 4 },
]

var session = {
  sessionTimes,
  commands,
  students,
  teachers
}


// ***********************************************************************

var React = require('react');

// **getCommandTimeStamp**
// **getCommandName**
// **getFontAwesomeFromCommandType**
// **getTeacherNameFromID**
// **getStudentNamesFromID**
// **assignTooltip**

// {
//   "timeStamp": "9:30am",
//   "commandName": "Start Reading",
//   "commandType": "read",
//   "createdBy": 1,
//   "sentTo": [1, 2, 3, 4, 5, 6, 7, 8],
// },

var Command = React.createClass({


  render: function() {
    return (
      <div>
        TimeStamp!
        {this.props.command.timeStamp}
      </div>
    )
  }
});




var Session = React.createClass({


  // **cycle Through Commands**


  render: function() {
    return (
      <div>
        Session!!!
        <Command command={{
          "timeStamp": "9:30am",
          "commandName": "Start Reading",
          "commandType": "read",
          "createdBy": 1,
          "sentTo": [1, 2, 3, 4, 5, 6, 7, 8],
        }} />
      </div>
    )
  }
});


// ReactDOM.render(
//   <Session />,
//   document.getElementById('session-1')
// )

module.exports = Session;
