import styled from 'styled-components';

export const StyledInput = styled.input`
  border: 1px solid orange;
  padding: 0 1rem;
  height: 2.25rem;
  width: 100%;
  margin-top: 0.5rem;
`;

export const StyledLabel = styled.label``;

export const StyledInputContainer = styled.div`
  width: 100%;
  position: relative;
`;

export const ErrorText = styled.span`
  color: red;
  position: absolute;
  bottom: -1.75rem;
  right: 0;
`;
