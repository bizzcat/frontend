
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
      <Route path='playerOne' header='Player One' component={GBPromptContainer} />
      <Route path='playerTwo/:playerOne' header='Player Two' component={GBPromptContainer} />
    </Route>

    <Route path='/ct' component={CTSession}>
    </Route>
  </Router>
);

module.exports = routes;
