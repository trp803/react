var React = require('react');

var WeatherMessage = React.createClass({
  render: function() {
    //var temp = this.props.temp;
    //var location = this.props.location;
    var {temp,location} = this.props;

    return(
      <div>
        <h3>It's is {temp} in {location}!</h3>
      </div>
    );
  }
});

module.exports = WeatherMessage;
