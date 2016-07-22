var axios = require('axios');

var id = "271f1c267a5edb023c58149a86806cd8ed6edd09";
var sec = "YOUR_SECRET_ID";
var param = "?client_id=" + id //+ "&client_secret=" + sec;

function getUserInfo (username) {
  return axios.get('https://api.github.com/users/' + username + param)
}

var helpers = {
  getPlayersInfo:  function(players) {
    return axios.all(players.map(function(username) {
      return getUserInfo(username)
    }))
      .then(function(info) {
        return info.map(function(user) {
          return user.data;
        })
      })
      .catch(function(err) {
        console.warn('Error in getPlayersInfo', err)
      })
  }
};


module.exports = helpers;
