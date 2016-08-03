var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var MetaMain = React.createClass({
  render: function() {
    return (
      <div>
        <Link to='/gb'>
          <button type='button' className='btn btn-lg btn-success'>GitHub Battle</button>
        </Link>
        <Link to='/ct'>
          <button type='button' className='btn btn-lg btn-success'>Command Timeline</button>
        </Link>
        <Link to='/fp'>
          <button type='button' className='btn btn-lg btn-success'>Fake Social Media</button>
        </Link>
        <Link to='/ctext'>
          <button type='button' className='btn btn-lg btn-success'>Get Started</button>
        </Link>
      </div>
    )
  }
});

module.exports = MetaMain;
