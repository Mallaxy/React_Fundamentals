import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router';
import { isAdminRole } from '../../store/user/selectors';

export const PrivateRoute = () => {
  const isAdmin = useSelector(isAdminRole);

  return isAdmin ? <Outlet /> : <Navigate to='/courses' />;
};
