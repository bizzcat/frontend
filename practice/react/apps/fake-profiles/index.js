var React = require('react');
var ReactDOM = require('react-dom');

var users_list = [
  {
    person_name: 'Jane Goodall',
    user_name: 'pizzalover736',
    slogan: 'Save the gorillas!',
    image_URL: 'http://pi.tedcdn.com/r/pe.tedcdn.com/images/ted/1433_253x190.jpg?',
    website_URL: 'http://www.janegoodall.org/'
  },
  {
    person_name: 'Amal Clooney',
    user_name: 'savetheworld2016',
    slogan: 'Is there any hope left? Probably.',
    image_URL: 'http://pbs.twimg.com/profile_images/604791871290912768/V6454aXq.jpg',
    website_URL: 'https://amalalamuddinstyle.wordpress.com/'
  }
]
var ProfileUserName = React.createClass({
  render: function() {
    return <h3>{this.props.userName}</h3>
  }
});

var ProfilePicandWebsiteURL = React.createClass({
  render: function() {
    return <a href={this.props.websiteURL}><img src={this.props.imageURL} /></a>
  }
});

var ProfileName = React.createClass({
  render: function() {
    return <h5>{this.props.personName}</h5>
  }
});

var ProfileSlogan = React.createClass({
  render: function() {
    return <h6>{this.props.slogan}</h6>
  }
});


var ProfileSection = React.createClass({
  render: function() {
    return (
      <section>
        <ProfileUserName userName={this.props.user.user_name} />
        <ProfilePicandWebsiteURL imageURL={this.props.user.image_URL} websiteURL={this.props.user.website_URL}/>
        <ProfileName personName={this.props.user.person_name} />
        <ProfileSlogan slogan={this.props.user.slogan} />
      </section>
    )
  }
});

var ProfilesContainer = React.createClass({
  render: function() {
    var user_profiles = [];

    for (var i in this.props.users) {
      var user_data = this.props.users[i]
      user_profiles.push(<ProfileSection user={user_data} key={i}/>);
    }

    return <div>{user_profiles}</div>
  }
});


ReactDOM.render(
  <ProfilesContainer users={users_list} />,
  document.getElementById('profiles')
)
