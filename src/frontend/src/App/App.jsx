import React, {Component} from 'react';


import './App.css';

import Navbar from './NavBar.jsx';


class App extends Component {
  render() {
    return (
        <div className="App">
          <Navbar />
          <main>
            { this.props.children }
          </main>
        </div>
    );
  }
}

export default App;
