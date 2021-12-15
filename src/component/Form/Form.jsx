import React, { Component } from 'react';
import s from './Form.module.css';

export default class Form extends Component {
  state = {
    name: '',
    number: '',
  };
  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };
  handleAddContact = e => {
    const { name, number } = this.state;
    e.preventDefault();
    this.props.onSubmit(name, number);
    this.resetState();
  };
  resetState = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <div>
        <form className={s.form} onSubmit={this.handleAddContact}>
          <label className={s.label}>
            Name
            <br />
            <input
              className={s.input}
              type="text"
              name="name"
              value={this.state.name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleChange}
            />
          </label>
          <label className={s.label}>
            Number
            <br />
            <input
              className={s.input}
              type="tel"
              name="number"
              value={this.state.number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.handleChange}
            />
          </label>
          <button className={s.button} type="submit">
            Add contact
          </button>
        </form>
      </div>
    );
  }
}
