import React, { useState } from 'react';
import { MdSearch } from 'react-icons/md';
import { Form, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { loadStock } from '../store/actions/search.actions';

const SearchInput = ({ onSearchChange }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInput = (event) => {
    const { value } = event.target;
    setInputValue(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue !== '') {
      onSearchChange(inputValue);
    }
  };

  return (
    <Form inline className="cr-search-form" onSubmit={handleSubmit}>
      <MdSearch
        size="20"
        className="cr-search-form__icon-search text-secondary"
      />
      <Input
        onChange={handleInput}
        value={inputValue}
        type="search"
        className="cr-search-form__input"
        placeholder="Search..."
      />
    </Form>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    onSearchChange: (value) => dispatch(loadStock(value)),
  };
}

export default connect(null, mapDispatchToProps)(SearchInput);
