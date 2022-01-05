import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Button, Input } from '../../common';

import { userLogin } from '../../store/user';

import {
  ENTER_EMAIL_TEXT,
  ENTER_PASSWORD_TEXT,
  LABEL_EMAIL_TEXT,
  LABEL_PASSWORD_TEXT,
  LOGIN_REDIRECT_TEXT,
  LOGIN_TEXT,
  REGISTRATION_TEXT,
} from '../../constants';

import {
  StyledLoginForm,
  LoginFormTitle,
  LoginFormRedirect,
} from './Login.styled';

const initialLoginForm = {
  email: '',
  password: '',
};

export const Login = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [loginForm, setLoginForm] = useState(initialLoginForm);
  const { email, password } = loginForm;

  const generalOnChange = (e) => {
    const { name, value } = e.target;
    setLoginForm((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(userLogin(loginForm));

    navigate('/courses');
  };

  return (
    <>
      <StyledLoginForm onSubmit={handleSubmit}>
        <LoginFormTitle>{LOGIN_TEXT}</LoginFormTitle>
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
        <Button type='submit' text={LOGIN_TEXT} />
      </StyledLoginForm>
      <LoginFormRedirect>
        <p>{LOGIN_REDIRECT_TEXT}</p>
        <Link to='/registration'>{REGISTRATION_TEXT}</Link>
      </LoginFormRedirect>
    </>
  );
};
