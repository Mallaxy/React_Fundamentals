export const checkIsAuthRoute = (pathname) => {
  const regExp = new RegExp(pathname, 'i');
  const isAuthRoute = regExp.test('/login') || regExp.test('/registration');
  return isAuthRoute;
};
