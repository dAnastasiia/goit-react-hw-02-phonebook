import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import './ContactList.scss';

class ContactList extends Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      }),
    ).isRequired,

    onDelete: PropTypes.func.isRequired,
  };

  render() {
    const { contacts, onDelete } = this.props;

    return (
      <ul className="ContactList">
        {contacts.map(({ id, name, number }) => (
          <li className="ContactList__item" key={id}>
            <p className="ContactList__text">
              {name}: {number}
            </p>
            <button
              type="button"
              className="ContactList__button"
              onClick={() => onDelete(id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

export default ContactList;
