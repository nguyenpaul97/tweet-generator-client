import React from 'react';
import TweetBox from './components/TweetBox.js';

class App extends React.Component {
  componentDidMount() {
    document.title = 'Tweet Generator';
  }

  render() {
    return (
      <div className="App">
        <TweetBox />
      </div>
    );
  }
}

export default App;
