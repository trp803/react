var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function() {
    return {
      location: 'Miami',
      temp: 88
    };
  },
  handelSearch : function(location) {
    var that = this;

    openWeatherMap.getTemp(location).then(function (temp) {
      that.setState({
        location: location,
        temp: temp
      });
    }, function (errorMessage) {
      alert(errorMessage);
    });
  },
  render: function() {
    //var temp = this.state.temp;
    //var location = this.state.location;
    var {temp, location} = this.state;
    return(
      <div>
        <h3>Weather Component</h3>
        <WeatherForm onSearch={this.handelSearch}/>
        <WeatherMessage temp={temp} location={location}/>
      </div>
    );
  }
});

module.exports = Weather;
