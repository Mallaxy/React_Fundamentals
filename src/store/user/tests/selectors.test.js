import { mockedState, mockedUserState } from '../../../mock';
import {
  getEmail,
  getIsAuth,
  getName,
  getRole,
  getToken,
  isAdminRole,
} from '../selectors';

describe('user/selectors', () => {
  it('Should return boolean isAuth', () => {
    const isAuth = getIsAuth(mockedState);

    expect(isAuth).toBe(mockedUserState.isAuth);
  });
  it('Should return users token', () => {
    const token = getToken(mockedState);

    expect(token).toBe(mockedUserState.token);
  });
  it('Should return users name', () => {
    const name = getName(mockedState);

    expect(name).toBe(mockedUserState.name);
  });
  it('Should return users email', () => {
    const email = getEmail(mockedState);

    expect(email).toBe(mockedUserState.email);
  });
  it('Should return users role', () => {
    const role = getRole(mockedState);

    expect(role).toBe(mockedUserState.role);
  });
  it('Should return boolean isAdminRole', () => {
    const isAdmin = isAdminRole(mockedState);

    expect(isAdmin).toBe(true);
  });
});
