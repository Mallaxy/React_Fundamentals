import React from 'react';
import PropTypes from 'prop-types';

import { StyledButton } from './Button.styled';

export const Button = ({ text, handleClick, type, icon, size,testID }) => (
  <StyledButton
    type={type}
    onClick={handleClick}
    size={size}
    role='button'
    data-testid={testID}
  >
    {text}
    {icon}
  </StyledButton>
);

Button.propTypes = {
  text: PropTypes.string,
  handleClick: PropTypes.func,
  type: PropTypes.string,
  icon: PropTypes.node,
  size: PropTypes.string,
 testID: PropTypes.string,
};

Button.defaultProps = {
  type: 'button',
  size: '12rem',
 testID: '',
};
