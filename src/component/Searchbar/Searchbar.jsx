import React, { Component } from 'react';
import { toast } from 'react-toastify';
import { ImSearch } from 'react-icons/im';
import 'react-toastify/dist/ReactToastify.css';
import s from './Searchbar.module.css';

export default class Searchbar extends Component {
  state = {
    text: '',
  };

  handleInputChange = e => {
    this.setState({ text: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.text.trim() === '') {
      return toast.error('Поле не должно быть пустым');
    }
    this.props.onSubmit(this.state.text);
    this.setState({ text: '' });
  };

  render() {
    return (
      <header className={s.searchbar}>
        <form onSubmit={this.handleSubmit} className={s.form}>
          <button type="submit" className={s.button}>
            <ImSearch />
          </button>
          <input
            className={s.input}
            type="text"
            name="text"
            value={this.state.text}
            onChange={this.handleInputChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
