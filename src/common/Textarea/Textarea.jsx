import React from 'react';
import PropTypes from 'prop-types';

import {
  StyledLabel,
  StyledTextarea,
  StyledTextareaContainer,
  ErrorText,
} from './Textarea.styled';

export const Textarea = ({
  labelText,
  placeholderText,
  onChange,
  value,
  name,
  isError,
  errorText,
}) => {
  return (
    <StyledTextareaContainer>
      <StyledLabel htmlFor={name}>{labelText}</StyledLabel>
      <StyledTextarea
        name={name}
        id={name}
        placeholder={placeholderText}
        value={value}
        onChange={onChange}
      />
      {isError && <ErrorText>{errorText}</ErrorText>}
    </StyledTextareaContainer>
  );
};

Textarea.propTypes = {
  labelText: PropTypes.string,
  placeholderText: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isError: PropTypes.bool,
  errorText: PropTypes.string,
};

Textarea.defaultProps = {
  labelText: '',
  placeholderText: '',
  onChange: () => {},
  isError: false,
  errorText: 'Error',
};
