import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';

import { CourseDetailsForm, CourseInfoForm } from './components';

import {
  getAvailableAuthors,
  getCourseAuthors,
} from '../../store/authors/selectors';
import { getCourseById } from '../../store/courses/selectors';
import { createCourse, updateCourse } from '../../store/courses';

import { CreateCourseContainer } from './CourseForm.styled';
import { CREATE_COURSE_TEXT, UPDATE_COURSE_TEXT } from '../../constants';

const newCourseInitialForm = {
  title: '',
  description: '',
  duration: 0,
  authors: [],
};

export const CourseForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { courseId } = useParams();

  const preloadedCourse = useSelector(getCourseById(courseId));

  const courseInitialForm = courseId ? preloadedCourse : newCourseInitialForm;

  const [courseForm, setCourseForm] = useState(courseInitialForm);

  const { title, description, duration, authors } = courseForm;

  const courseAuthors = useSelector(getCourseAuthors(authors));
  const availableAuthors = useSelector(getAvailableAuthors(authors));

  const generalOnChange = (e) => {
    const { value, name } = e.target;
    setCourseForm((prevState) => ({ ...prevState, [name]: value }));
  };

  const durationOnChange = (e) => {
    const { value } = e.target;
    const regexp = new RegExp('^[0-9]*$');

    if (value.length < 6 && regexp.test(value)) {
      setCourseForm((prevState) => ({ ...prevState, duration: +value }));
    }
  };

  const addAuthor = (authorId) => {
    setCourseForm((prevState) => ({
      ...prevState,
      authors: [...prevState.authors, authorId],
    }));
  };

  const deleteAuthor = (authorId) => {
    setCourseForm((prevState) => ({
      ...prevState,
      authors: [...prevState.authors.filter((id) => id !== authorId)],
    }));
  };

  const isFormValid = () => {
    return (
      title.length > 2 && description.length > 2 && duration && authors.length
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      if (courseId) {
        dispatch(updateCourse(courseForm));
      } else {
        dispatch(createCourse(courseForm));
      }
      setCourseForm(courseInitialForm);
      navigate('/courses');
    } else {
      alert('Please, fill in all fields');
    }
  };

  const submitText = courseId ? UPDATE_COURSE_TEXT : CREATE_COURSE_TEXT;

  return (
    <CreateCourseContainer onSubmit={handleSubmit} data-testid='courseForm'>
      <CourseInfoForm
        buttonText={submitText}
        title={title}
        description={description}
        generalOnChange={generalOnChange}
        handleSubmit={handleSubmit}
      />
      <CourseDetailsForm
        duration={duration.toString()}
        deleteAuthor={deleteAuthor}
        addAuthor={addAuthor}
        durationOnChange={durationOnChange}
        availableAuthors={availableAuthors}
        courseAuthors={courseAuthors}
      />
    </CreateCourseContainer>
  );
};
