import React from 'react';

import { AuthorItem } from '..';

import { StyledAuthorsList } from './AuthorList.styled';

export const AuthorList = ({ array, handleClick, buttonText }) => {
  return (
    <StyledAuthorsList>
      {!array.length && <p>Author list is empty</p>}
      {array.map(({ id, name }) => (
        <AuthorItem
          key={id}
          id={id}
          name={name}
          buttonText={buttonText}
          handleClick={handleClick}
        />
      ))}
    </StyledAuthorsList>
  );
};
