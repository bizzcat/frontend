
var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
// var Main = require('../components/Main');
// var Home = require('../components/Home');
var Session = require('../components/session1');

var routes = (
  <Router history={hashHistory}>
    <Route path='/session1' component={Session}>
    </Route>
  </Router>
);

module.exports = routes;
