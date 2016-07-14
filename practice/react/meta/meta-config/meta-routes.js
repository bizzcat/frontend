// What i need to do next is to bring int a form submission
// where a teacher can input commands, their teacher ID, the student ID's.
//
// It must have the ability to collect the end state of the form and send it
// to the PropmptContainer component. Ideally it would also store it in some
// sort of database that can be called upon using AJAX requests or some
// other form of data retrieval. 


var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;

// META
var MetaMain = require('../meta-components/meta-main');
// var MetaHome = require('../meta-components/meta-home');

// GITHUB-BATTLE
var GBMain = require('../../apps/github-battle/components/Main');
var GBHome = require('../../apps/github-battle/components/Home');
var GBPromptContainer = require('../../apps/github-battle/containers/prompt-container');

// COMMAND-TIMELINE
var CTSession = require('../../apps/command-timeline/components/session1');


var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={MetaMain}/>

    <Route path='/gb' component={GBMain}>
      <IndexRoute component={GBHome} />
      <Route path='/gb/playerOne' header='Player One' component={GBPromptContainer} />
      <Route path='/gb/playerTwo/:playerOne' header='Player Two' component={GBPromptContainer} />
    </Route>

    <Route path='/ct' component={CTSession}>
    </Route>
  </Router>
);

module.exports = routes;
