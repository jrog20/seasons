import React from 'react';
import SeasonDisplay from './components/SeasonDisplay.js';

class App extends React.Component {
  render() {
    // function to get current user location
    window.navigator.geolocation.getCurrentPosition(
      // success callback (first argument)
      (position) => console.log(position),
      // failure callback (second argument)
      (err) => console.log(err)
    )

    return (
      <div>
        Hi there!
        <SeasonDisplay />
      </div>
    )
  }
}

export default App;
