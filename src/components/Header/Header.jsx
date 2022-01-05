import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from '../../common';
import { Logo } from './components';

import { getIsAuth, getName } from '../../store/user/selectors';
import { userLogout } from '../../store/user';
import { checkIsAuthRoute } from '../../utils';

import { LOGIN_TEXT, LOGOUT_TEXT } from '../../constants';

import { HeaderContainer, LogoContainer, RightBlock } from './Header.styled';

export const Header = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isAuth = useSelector(getIsAuth);
  const name = useSelector(getName);

  const navigateToLogin = () => navigate('/login');

  const navigateToHome = () => navigate('/');

  const handleLogout = () => {
    dispatch(userLogout());

    navigate('./login');
  };

  const isAuthRoute = checkIsAuthRoute(pathname);

  return (
    <HeaderContainer>
      <LogoContainer onClick={navigateToHome}>
        <Logo />
      </LogoContainer>
      {!isAuthRoute && (
        <RightBlock>
          <h3>{name || 'Guest'}</h3>
          {isAuth ? (
            <Button handleClick={handleLogout} text={LOGOUT_TEXT} />
          ) : (
            <Button handleClick={navigateToLogin} text={LOGIN_TEXT} />
          )}
        </RightBlock>
      )}
    </HeaderContainer>
  );
};
