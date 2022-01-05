import { AuthAPI, UsersAPI } from '../../services';
import { userActions } from '.';

export const checkCurrentUser = () => async (dispatch) => {
  const data = await UsersAPI.getCurrentUser();
  if (data) {
    const { name, email, role } = data.result;
    const dispatchData = { name, email, role };
    dispatch(userActions.checkCurrentUser(dispatchData));
  }
};

export const userLogout = () => async (dispatch) => {
  const data = await AuthAPI.logout();

  if (data) {
    dispatch(userActions.userLogout());
  }
};

export const userLogin = (loginForm) => async (dispatch) => {
  const data = await AuthAPI.login(loginForm);

  if (data) {
    const { result: token, user } = data;

    const dispatchData = {
      token,
      ...user,
    };

    dispatch(userActions.userLogin(dispatchData));
  }
};

export const userRegister = (registrationForm) => async (dispatch) => {
  const data = await AuthAPI.register(registrationForm);
  if (data) {
    console.log(data);
  }
};
