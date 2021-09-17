import React from 'react';
import SeasonDisplay from './components/SeasonDisplay.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: null,
      error: ''
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
      err => {
        this.setState({ error: err.message });
      }
    );
  }

  render() {
    if (this.state.error && !this.state.lat) {
      return <div>Error: {this.state.error}</div>
    }
    if (!this.state.error && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>
    }
    return <div>Loading</div>
  }
}

export default App;
