import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.scss';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
    filter: '',
  };

  handleChange = e => {
    const key = e.currentTarget.name;
    const value = e.currentTarget.value;

    this.setState({ [key]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState(({ contacts }) => ({
      contacts: [`${this.state.name}: ${this.state.number}`, ...contacts],
    }));

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number, contacts, filter } = this.state;
    const nameInputId = uuidv4();
    const numberInputId = uuidv4();

    return (
      <>
        <h1>Phonebook</h1>

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
            type="text"
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

        <h2>Contacts</h2>
        <ul className="ContactList">
          {contacts.map(el => (
            <li className="ContactList__item" key={uuidv4()}>
              {el}
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default App;
