import React from 'react';
import SeasonDisplay from './components/SeasonDisplay.js';
import Loader from './components/Loader.js';

class App extends React.Component {
  state = {
      lat: null,
      error: ''
    };

  componentDidMount() {
    // function to get current user location
    window.navigator.geolocation.getCurrentPosition(
      // success callback (first argument)
      position => this.setState({ lat: position.coords.latitude }),
      // failure callback (second argument)
      err => this.setState({ error: err.message })
    );
  }

  render() {
    if (this.state.error && !this.state.lat) {
      return <div>Error: {this.state.error}</div>
    }
    if (!this.state.error && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat}/>
    }
    return <div><Loader /></div>
  }
}

export default App;
