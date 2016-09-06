import React, { Component } from 'react';
import SideNav from './SideNav';


class AppAdmin extends Component {


  render() {
    return (
      <div className="app-admin">
        <SideNav />
        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
}

export default AppAdmin;