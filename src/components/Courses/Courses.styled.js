import styled from 'styled-components';

export const CoursesContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const CoursesHeader = styled.div`
  display: grid;
  grid-template: auto / 36rem auto;
  justify-content: space-between;
  align-items: flex-end;
`;

export const CoursesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
