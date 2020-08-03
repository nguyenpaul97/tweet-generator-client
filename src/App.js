import React from 'react';
import TweetBox from './components/TweetBox.js';
import Menu from './components/Menu.js';
import './App.css';

class App extends React.Component {
  componentDidMount() {
    document.title = 'Tweet Generator';
  }

  render() {
    return (
      <div className="container">
        <div className="App">
          {/* <Menu /> */}
          <TweetBox />
        </div>
      </div>
    );
  }
}

export default App;
