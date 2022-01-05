import { CHECK_USER, LOGIN, LOGOUT } from './actionTypes';

export const userLogin = (data) => ({ type: LOGIN, payload: data });
export const userLogout = () => ({ type: LOGOUT });
export const checkCurrentUser = (data) => ({ type: CHECK_USER, payload: data });
