import React, { Component } from 'react';
import NavMenuItem from './NavMenuItem';

class NavMenu extends Component {
  render() {
    return (
      <ul>
        <NavMenuItem link="/cat1" label="Cat1" />
        <NavMenuItem link="/cat1" label="Cat1" />
      </ul>
    );
  }

}


export default NavMenu;