import React, { PropTypes, Component } from 'react';

class NavMenuItem extends Component {
  render() {
    return (
      <li><a href={this.props.link}>{this.props.label}</a></li>
    );
  }
}


NavMenuItem.propTypes = {
  link: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default NavMenuItem;