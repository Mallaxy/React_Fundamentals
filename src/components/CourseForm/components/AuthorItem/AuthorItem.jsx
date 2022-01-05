import React from 'react';

import { Button } from '../../../../common';

import { StyledAuthorItem } from './AuthorItem.styled';

export const AuthorItem = ({ name, id, handleClick, buttonText }) => {
  return (
    <StyledAuthorItem data-testid='author-item'>
      <h3>{name}</h3>
      <Button
        handleClick={() => handleClick(id)}
        text={buttonText}
        testID='author-button'
      />
    </StyledAuthorItem>
  );
};
