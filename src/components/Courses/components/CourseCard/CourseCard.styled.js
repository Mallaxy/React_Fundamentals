import styled from 'styled-components';

export const CourseCardContainer = styled.li`
  display: grid;
  grid-template-columns: 1fr 22rem;
  gap: 2rem;
  padding: 1rem;
  border: 1px solid green;
`;

export const LeftBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  h1 {
    font-size: 28px;
    font-weight: 700;
  }
`;

export const RightBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
`;

export const CourseDetailsList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ButtonGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 2.25rem 2.25rem;
  place-items: center end;
  gap: 1rem;
`;
