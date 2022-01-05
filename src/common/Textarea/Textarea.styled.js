import styled from 'styled-components';

export const StyledTextarea = styled.textarea`
  min-height: 9rem;
  max-height: 12rem;
  width: 100%;
  padding: 1rem;
  border: 1px solid yellow;
  resize: vertical;
  margin-top: 0.5rem;
`;

export const StyledLabel = styled.label``;

export const StyledTextareaContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const ErrorText = styled.span`
  color: red;
  position: absolute;
  bottom: -1.5rem;
  right: 0;
`;
