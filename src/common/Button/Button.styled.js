import styled from 'styled-components';

export const StyledButton = styled.button`
  width: ${({ size }) => size};
  height: 2.25rem;
  border: 1px solid purple;
  display: flex;
  align-items: center;
  justify-content: center;
`;
