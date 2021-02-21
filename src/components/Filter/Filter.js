import React from 'react';
import PropTypes from 'prop-types';
import './Filter.scss';

const Filter = ({ value, onChange, id }) => {
  return (
    <div className="Filter">
      <label htmlFor={id} className="Filter__label">
        Find contacts by name
      </label>
      <input
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
        className="Filter__input"
        placeholder="Who are we looking for?"
        autoComplete="off"
        id={id}
      ></input>
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default Filter;
