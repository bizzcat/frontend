'use strict';

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

var session1Data = {
  sessionTimes,
  commands,
  students,
  teachers
}

module.exports = session1Data;
