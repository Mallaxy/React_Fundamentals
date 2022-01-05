import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  color: inherit;
`;

export const StyledCourseInfo = styled.div`
  margin: 1rem 0;
`;

export const CourseInfoContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  justify-content: space-between;
  gap: 2rem;
`;

export const CourseInfoTitle = styled.h1`
  font-size: 28px;
  text-align: center;
  margin-bottom: 2rem;
`;

export const CourseInfoContainer = styled.div`
  padding: 0 2rem;
`;

export const CourseDetailsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const CourseDetailsItem = styled.li`
  word-wrap: break-word;
`;
