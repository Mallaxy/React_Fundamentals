import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import { Button } from '../../common';
import { CourseCard, SearchBar } from './components';

import { filterCoursesByTitleOrId } from '../../store/courses/selectors';
import { getToken, isAdminRole } from '../../store/user/selectors';
import { checkCurrentUser } from '../../store/user';

import { ADD_NEW_COURSE_TEXT } from '../../constants';

import { CoursesContainer, CoursesList, CoursesHeader } from './Courses.styled';

export const Courses = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const token = useSelector(getToken);

  const isAdmin = useSelector(isAdminRole);

  const [searchText, setSearchText] = useState('');
  const [filterValue, setFilterValue] = useState('');

  const filteredCourses = useSelector(filterCoursesByTitleOrId(filterValue));

  const onSearchChange = (e) => {
    const { value } = e.target;
    setSearchText(value);
    if (!value) setFilterValue('');
  };

  const onSearchClick = () => {
    setFilterValue(searchText);
  };

  const navigateToCreateCourse = () => {
    navigate('/courses/add');
  };

  useEffect(() => {
    if (token) {
      dispatch(checkCurrentUser());
    }
  }, [token]);

  return (
    <CoursesContainer>
      <CoursesHeader>
        <SearchBar
          value={searchText}
          onSearchChange={onSearchChange}
          onSearchClick={onSearchClick}
        />
        {isAdmin && (
          <Button
            text={ADD_NEW_COURSE_TEXT}
            handleClick={navigateToCreateCourse}
            testID='navigate-to-course-form-button'
          />
        )}
      </CoursesHeader>
      <CoursesList data-testid='coursesList'>
        {filteredCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </CoursesList>
    </CoursesContainer>
  );
};
