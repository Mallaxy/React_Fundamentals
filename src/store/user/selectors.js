export const getIsAuth = (state) => state.user.isAuth;
export const getToken = (state) => state.user.token;
export const getName = (state) => state.user.name;
export const getEmail = (state) => state.user.email;
export const getRole = (state) => state.user.role;
export const isAdminRole = (state) => getRole(state) === 'admin';
