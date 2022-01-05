import React from 'react';
import { StyledCourseDetailsItem } from './CourseDetailsItem.styled';

export const CourseDetailsItem = ({ title, contentString }) => {
  return (
    <StyledCourseDetailsItem>
      <b>{title}: </b>
      {contentString}
    </StyledCourseDetailsItem>
  );
};
