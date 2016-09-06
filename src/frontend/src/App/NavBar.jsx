import React, { Component } from 'react';
import NavMenu  from './NavMenu';
import './NavBar.css';
import './App.css';
import logo from '../logo.svg';


class NavBar extends Component {
  render() {
    return (
      <nav className="navbar">
        <img src={logo} className="app-logo" alt="logo"/>
        <NavMenu />
      </nav>
    );
  }

}


export default NavBar;