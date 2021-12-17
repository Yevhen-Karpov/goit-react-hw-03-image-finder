import React, { Component } from 'react';
import { animateScroll as scroll } from 'react-scroll';

export default class Button extends Component {
  handleClick = () => {
    this.props.onClick();
    // scroll.scrollToBottom();
  };
  render() {
    return (
      <button type="button" onClick={this.handleClick}>
        Load more
      </button>
    );
  }
}
