import React from 'react';
import PropTypes from 'prop-types';

import {
  StyledInput,
  StyledInputContainer,
  StyledLabel,
  ErrorText,
} from './Input.styled';

export const Input = ({
  labelText,
  placeholderText,
  onChange,
  value,
  name,
  isError,
  errorText,
  type,
  testID,
}) => {
  return (
    <StyledInputContainer>
      <StyledLabel htmlFor={name}>{labelText}</StyledLabel>
      <StyledInput
        type={type}
        placeholder={placeholderText}
        onChange={onChange}
        value={value}
        id={name}
        name={name}
        data-testid={testID}
      />
      {isError && <ErrorText>{errorText}</ErrorText>}
    </StyledInputContainer>
  );
};

Input.propTypes = {
  labelText: PropTypes.string,
  placeholderText: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isError: PropTypes.bool,
  errorText: PropTypes.string,
  type: PropTypes.string,
  testID: PropTypes.string,
};

Input.defaultProps = {
  labelText: '',
  placeholderText: '',
  onChange: () => {},
  isError: false,
  errorText: 'Error',
  type: 'text',
  testID: '',
};
