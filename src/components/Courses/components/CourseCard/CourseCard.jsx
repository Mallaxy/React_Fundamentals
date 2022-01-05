import React from 'react';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import { CourseDetailsItem } from '..';
import { Button } from '../../../../common';

import {
  convertDateFormat,
  convertMinutesIntoHours,
} from '../../../../helpers';
import { isAdminRole } from '../../../../store/user/selectors';
import { deleteCourse } from '../../../../store/courses';

import {
  AUTHORS_TEXT,
  CREATED_TEXT,
  DURATION_TEXT,
  SHOW_COURSE_TEXT,
} from '../../../../constants';

import { FaTrashAlt, FaPen } from 'react-icons/fa';

import {
  ButtonGroup,
  CourseCardContainer,
  CourseDetailsList,
  LeftBlock,
  RightBlock,
} from './CourseCard.styled';
import { getCourseAuthorNamesString } from '../../../../store/authors/selectors';

export const CourseCard = ({ course }) => {
  const { id, title, description, duration, authors, creationDate } = course;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isAdmin = useSelector(isAdminRole);

  const courseAuthorNamesString = useSelector(
    getCourseAuthorNamesString(authors)
  );

  const convertedDuration = convertMinutesIntoHours(duration);
  const convertedDate = convertDateFormat(creationDate);

  const navigateToCourse = () => navigate(`/courses/${id}`);

  const navigateToUpdateCourse = () => {
    navigate(`/courses/update/${id}`);
  };

  const handleDelete = () => {
    dispatch(deleteCourse(id));
  };

  return (
    <CourseCardContainer data-testid='courseCard'>
      <LeftBlock>
        <h1>{title}</h1>
        <p>{description}</p>
      </LeftBlock>
      <RightBlock>
        <CourseDetailsList>
          <CourseDetailsItem
            title={AUTHORS_TEXT}
            contentString={courseAuthorNamesString}
          />
          <CourseDetailsItem
            title={DURATION_TEXT}
            contentString={convertedDuration + ' hours'}
          />
          <CourseDetailsItem
            title={CREATED_TEXT}
            contentString={convertedDate}
          />
        </CourseDetailsList>
        <ButtonGroup>
          <Button handleClick={navigateToCourse} text={SHOW_COURSE_TEXT} />
          {isAdmin && (
            <>
              <Button
                handleClick={navigateToUpdateCourse}
                size='2.25rem'
                icon={<FaPen />}
              />
              <Button
                handleClick={handleDelete}
                size='2.25rem'
                icon={<FaTrashAlt />}
              />
            </>
          )}
        </ButtonGroup>
      </RightBlock>
    </CourseCardContainer>
  );
};
