import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { Button, Input } from '../../common';

import { userRegister } from '../../store/user';

import {
  ENTER_EMAIL_TEXT,
  ENTER_NAME_TEXT,
  ENTER_PASSWORD_TEXT,
  LABEL_EMAIL_TEXT,
  LABEL_NAME_TEXT,
  LABEL_PASSWORD_TEXT,
  LOGIN_TEXT,
  REGISTRATION_REDIRECT_TEXT,
  REGISTRATION_TEXT,
} from '../../constants';

import {
  StyledRegistrationForm,
  RegistrationFormTitle,
  RegistrationFormRedirect,
} from './Registration.styled';

const initialRegistrationForm = {
  name: '',
  email: '',
  password: '',
};

export const Registration = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [registrationForm, setRegistrationForm] = useState(
    initialRegistrationForm
  );
  const { name, email, password } = registrationForm;

  const generalOnChange = (e) => {
    const { name, value } = e.target;
    setRegistrationForm((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(userRegister(registrationForm));

    setRegistrationForm(initialRegistrationForm);
    navigate('/login');
  };

  return (
    <>
      <StyledRegistrationForm onSubmit={handleSubmit}>
        <RegistrationFormTitle>{REGISTRATION_TEXT}</RegistrationFormTitle>
        <Input
          type='name'
          name='name'
          value={name}
          placeholderText={ENTER_NAME_TEXT}
          labelText={LABEL_NAME_TEXT}
          onChange={generalOnChange}
        />
        <Input
          type='email'
          name='email'
          value={email}
          placeholderText={ENTER_EMAIL_TEXT}
          labelText={LABEL_EMAIL_TEXT}
          onChange={generalOnChange}
        />
        <Input
          type='password'
          name='password'
          value={password}
          placeholderText={ENTER_PASSWORD_TEXT}
          labelText={LABEL_PASSWORD_TEXT}
          onChange={generalOnChange}
        />
        <Button type='submit' text={REGISTRATION_TEXT} />
      </StyledRegistrationForm>
      <RegistrationFormRedirect>
        <p>{REGISTRATION_REDIRECT_TEXT}</p>
        <Link to='/login'>{LOGIN_TEXT}</Link>
      </RegistrationFormRedirect>
    </>
  );
};
