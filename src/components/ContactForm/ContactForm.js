import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import './ContactForm.scss';

class ContactForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const key = e.currentTarget.name;
    const value = e.currentTarget.value;

    this.setState({ [key]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.name, this.state.number);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    const nameInputId = uuidv4();
    const numberInputId = uuidv4();

    return (
      <form className="ContactForm" onSubmit={this.handleSubmit}>
        <label htmlFor={nameInputId} className="ContactForm__label">
          Name
        </label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange}
          className="ContactForm__input"
          placeholder="Enter name"
          autoComplete="off"
          id={nameInputId}
        ></input>

        <label htmlFor={numberInputId} className="ContactForm__label">
          Number
        </label>
        <input
          type="tel"
          name="number"
          value={number}
          onChange={this.handleChange}
          className="ContactForm__input"
          placeholder="Enter number"
          autoComplete="off"
          id={numberInputId}
        ></input>

        <button className="ContactForm__button" type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
