import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Header } from '../Header';

import { userLogout } from '../../../store/user';
import { getIsAuth, getName } from '../../../store/user/selectors';
import { renderWithRouter } from '../../../testUtils/renderWithRouter';
import { LOGIN_TEXT, LOGOUT_TEXT } from '../../../constants';
import { mockedState } from '../../../mock';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

jest.mock('../../../store/user/selectors', () => ({
  getIsAuth: jest.fn(),
  getName: jest.fn(),
}));

jest.mock('../../../store/user');

describe('Header', () => {
  const dispatch = jest.fn();
  const route = '/courses';

  beforeEach(() => {
    useDispatch.mockReturnValue(dispatch);
    useSelector.mockImplementation((callback) => callback(mockedState));
  });

  it('Should have users name.', () => {
    getName.mockReturnValue('Test Name');

    renderWithRouter(<Header />, { route });

    expect(screen.getByText('Test Name')).toBeInTheDocument();
  });

  it('Should have logo', () => {
    renderWithRouter(<Header />, { route });

    expect(screen.getByTestId('logo')).toBeInTheDocument();
  });

  it('Should logout after click logout button', () => {
    getIsAuth.mockReturnValue(true);
    userLogout.mockImplementation(() => 'LOGOUT');

    renderWithRouter(<Header />, { route });

    userEvent.click(screen.getByText(LOGOUT_TEXT));
    expect(dispatch).toBeCalledWith(userLogout());
  });

  it('Should redirect into login page after click login button', () => {
    getIsAuth.mockReturnValue(false);

    renderWithRouter(<Header />, { route });

    expect(screen.getByText(LOGIN_TEXT)).toBeInTheDocument();

    userEvent.click(screen.getByText(LOGIN_TEXT));

    expect(screen.queryByText(LOGIN_TEXT)).not.toBeInTheDocument();
  });
});
