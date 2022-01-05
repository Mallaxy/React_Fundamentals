import { localStorageAPI } from '../../services';
import { CHECK_USER, LOGIN, LOGOUT } from './actionTypes';

const initialState = {
  isAuth: false,
  name: '',
  email: '',
  token: '',
  role: '',
};

const localUser = localStorageAPI.getUser();

const defaultState = localUser
  ? { ...initialState, isAuth: true, ...localUser }
  : initialState;

export const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isAuth: true,
        ...action.payload,
      };
    case LOGOUT:
      return initialState;
    case CHECK_USER:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
