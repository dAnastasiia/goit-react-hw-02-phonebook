import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Section.scss';

class Section extends Component {
  static propTypes = {
    children: PropTypes.arrayOf(PropTypes.node).isRequired,
  };

  render() {
    const { children } = this.props;

    return (
      <div className="Section">
        <div>{children}</div>
      </div>
    );
  }
}

export default Section;
