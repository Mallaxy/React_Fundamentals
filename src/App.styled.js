import styled from 'styled-components';

export const Container = styled.div`
  width: 1000px;
  margin: 0 auto;
  @media (max-width: 1279px) {
    width: 100%;
  }
`;

export const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid blue;
`;
