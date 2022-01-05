import React from 'react';

import { Button, Input, Textarea } from '../../../../common';

import {
  ENTER_DESCRIPTION_TEXT,
  ENTER_TITLE_TEXT,
  LABEL_DESCRIPTION_TEXT,
  LABEL_TITLE_TEXT,
  LENGTH_ERROR_TEXT,
} from '../../../../constants';

import {
  ButtonContainer,
  TextareaContainer,
  TitleInputContainer,
  StyledCourseInfoForm,
} from './CourseInfoForm.styled';

export const CourseInfoForm = ({
  title,
  description,
  generalOnChange,
  buttonText,
}) => {
  return (
    <StyledCourseInfoForm>
      <TitleInputContainer>
        <Input
          name='title'
          labelText={LABEL_TITLE_TEXT}
          placeholderText={ENTER_TITLE_TEXT}
          value={title}
          onChange={generalOnChange}
          isError={title.length <= 2}
          errorText={LENGTH_ERROR_TEXT}
        />
      </TitleInputContainer>
      <ButtonContainer>
        <Button type='submit' text={buttonText} />
      </ButtonContainer>
      <TextareaContainer>
        <Textarea
          name='description'
          labelText={LABEL_DESCRIPTION_TEXT}
          placeholderText={ENTER_DESCRIPTION_TEXT}
          value={description}
          onChange={generalOnChange}
          isError={description.length <= 2}
          errorText={LENGTH_ERROR_TEXT}
        />
      </TextareaContainer>
    </StyledCourseInfoForm>
  );
};
