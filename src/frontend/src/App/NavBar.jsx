import React, { Component } from 'react';
//import './NavBar.css';

import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';


class NavBar extends Component {
  render() {
    return (
      <AppBar
        title="Title"
        iconElementRight={<FlatButton label="Save" />}

      />
    );
  }

}


export default NavBar;