import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { COURSE_INFO_REDIRECT_TEXT } from '../../constants';
import { convertDateFormat, convertMinutesIntoHours } from '../../helpers';
import { getCourseAuthorNamesString } from '../../store/authors/selectors';
import { getCourseById } from '../../store/courses/selectors';
import {
  CourseDetailsItem,
  CourseDetailsList,
  CourseInfoContainer,
  CourseInfoContent,
  CourseInfoTitle,
  StyledCourseInfo,
  StyledLink,
} from './CourseInfo.styled';

export const CourseInfo = () => {
  const { courseId } = useParams();

  const course = useSelector(getCourseById(courseId));

  const { id, title, description, duration, authors, creationDate } = course;

  const courseAuthorNamesString = useSelector(
    getCourseAuthorNamesString(authors)
  );

  const convertedDuration = convertMinutesIntoHours(duration);
  const convertedDate = convertDateFormat(creationDate);

  return (
    <CourseInfoContainer>
      <StyledLink to='/courses'>{COURSE_INFO_REDIRECT_TEXT}</StyledLink>
      <StyledCourseInfo>
        <CourseInfoTitle>{title}</CourseInfoTitle>
        <CourseInfoContent>
          <p>{description}</p>
          <CourseDetailsList>
            <CourseDetailsItem>
              <b>ID: </b>
              {id}
            </CourseDetailsItem>
            <CourseDetailsItem>
              <b>Duration: </b>
              {convertedDuration}
            </CourseDetailsItem>
            <CourseDetailsItem>
              <b>Created: </b>
              {convertedDate}
            </CourseDetailsItem>
            <CourseDetailsItem>
              <b>Authors: </b>
              {courseAuthorNamesString}
            </CourseDetailsItem>
          </CourseDetailsList>
        </CourseInfoContent>
      </StyledCourseInfo>
    </CourseInfoContainer>
  );
};
