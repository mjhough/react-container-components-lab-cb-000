import React from 'react';

const SearchBar = props => {
  const { search, onChange } = props;
  return (
    <input type='text' value={search} onChange={onChange} />
  )
}

export default SearchBar;
