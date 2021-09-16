import React from 'react';
import SeasonDisplay from './components/SeasonDisplay.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: null
    };

    // function to get current user location
    window.navigator.geolocation.getCurrentPosition(
      // success callback (first argument)
      position => {
        this.setState({
          lat: position.coords.latitude
        });
      },
      // failure callback (second argument)
      (err) => console.log(err)
    )
  }

  render() {
    return (
      <div>
        Latitude: {this.state.lat}
        <SeasonDisplay />
      </div>
    )
  }
}

export default App;
