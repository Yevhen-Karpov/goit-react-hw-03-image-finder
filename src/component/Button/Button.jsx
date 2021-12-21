import React, { Component } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import s from './Button.module.css';

export default class Button extends Component {
  handleClick = () => {
    this.props.onClick();
    scroll.scrollToBottom();
  };
  render() {
    return (
      <button type="button" className={s.button} onClick={this.handleClick}>
        Load more
      </button>
    );
  }
}
