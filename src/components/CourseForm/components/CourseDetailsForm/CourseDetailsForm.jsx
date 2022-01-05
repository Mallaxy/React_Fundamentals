import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { CourseDetailsFormItem, AuthorList } from '..';
import { Button, Input } from '../../../../common';

import {
  ADD_AUTHOR_TEXT,
  AUTHORS_TEXT,
  LABEL_AUTHOR_NAME_TEXT,
  COURSE_AUTHORS_TEXT,
  CREATE_AUTHOR_TEXT,
  DELETE_AUTHOR_TEXT,
  DURATION_ERROR_TEXT,
  DURATION_TEXT,
  ENTER_AUTHOR_NAME_TEXT,
  ENTER_DURATION_TEXT,
  LENGTH_ERROR_TEXT,
} from '../../../../constants';

import { convertMinutesIntoHours } from '../../../../helpers';
import { createAuthor } from '../../../../store/authors';

import {
  DurationInfo,
  StyledCourseDetailsForm,
} from './CourseDetailsForm.styled';

export const CourseDetailsForm = ({
  duration,
  deleteAuthor,
  addAuthor,
  durationOnChange,
  availableAuthors,
  courseAuthors,
}) => {
  const dispatch = useDispatch();

  const [authorName, setAuthorName] = useState('');

  const createCourseAuthor = () => {
    if (authorName.length > 2) {
      const author = { name: authorName };
      dispatch(createAuthor(author));
      setAuthorName('');
    }
  };

  const onAuthorNameChange = (e) => {
    setAuthorName(e.target.value);
  };

  const formattedDuration = convertMinutesIntoHours(duration);

  return (
    <StyledCourseDetailsForm>
      <CourseDetailsFormItem title={ADD_AUTHOR_TEXT}>
        <Input
          name='author_name'
          labelText={LABEL_AUTHOR_NAME_TEXT}
          placeholderText={ENTER_AUTHOR_NAME_TEXT}
          value={authorName}
          onChange={onAuthorNameChange}
          isError={authorName.length <= 2}
          errorText={LENGTH_ERROR_TEXT}
          testID='author-name-input'
        />
        <Button
          text={CREATE_AUTHOR_TEXT}
          handleClick={createCourseAuthor}
          testID='create-author-button'
        />
      </CourseDetailsFormItem>
      <CourseDetailsFormItem title={AUTHORS_TEXT} testID='available-authors'>
        <AuthorList
          array={availableAuthors}
          handleClick={addAuthor}
          buttonText={ADD_AUTHOR_TEXT}
        />
      </CourseDetailsFormItem>
      <CourseDetailsFormItem title={DURATION_TEXT}>
        <Input
          type='numeric'
          name='duration'
          labelText={DURATION_TEXT}
          placeholderText={ENTER_DURATION_TEXT}
          value={duration}
          onChange={durationOnChange}
          isError={duration <= 0}
          errorText={DURATION_ERROR_TEXT}
        />
        <DurationInfo>
          Duration: <b>{formattedDuration}</b> hours
        </DurationInfo>
      </CourseDetailsFormItem>
      <CourseDetailsFormItem
        title={COURSE_AUTHORS_TEXT}
        testID='course-authors'
      >
        <AuthorList
          array={courseAuthors}
          handleClick={deleteAuthor}
          buttonText={DELETE_AUTHOR_TEXT}
        />
      </CourseDetailsFormItem>
    </StyledCourseDetailsForm>
  );
};
