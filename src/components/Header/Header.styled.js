import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid red;
  padding: 1rem;
  margin-bottom: 1rem;
`;

export const LogoContainer = styled.div`
  cursor: pointer;
  height: 4rem;
`;

export const RightBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 1rem;
`;
