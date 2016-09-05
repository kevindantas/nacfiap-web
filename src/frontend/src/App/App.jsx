import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


import logo from '../logo.svg';
import './App.css';

import Navbar from './NavBar.jsx';


class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
          </div>
          <Navbar />
          <p className="App-intro">

          </p>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
