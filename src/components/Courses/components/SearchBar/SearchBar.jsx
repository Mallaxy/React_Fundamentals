import React from 'react';

import { Button, Input } from '../../../../common';

import { ENTER_SEARCH_TEXT, SEARCH_TEXT } from '../../../../constants';

import { SearchBarContainer } from './SearchBar.styled';

export const SearchBar = ({ onSearchChange, value, onSearchClick }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearchClick();
  };

  return (
    <SearchBarContainer onSubmit={handleSubmit}>
      <Input
        placeholderText={ENTER_SEARCH_TEXT}
        onChange={onSearchChange}
        value={value}
        name='search'
      />
      <Button type='submit' text={SEARCH_TEXT} />
    </SearchBarContainer>
  );
};
