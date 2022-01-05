export const localStorageAPI = {
  setUser: (value) => localStorage.setItem('user', JSON.stringify(value)),
  getUser: () => JSON.parse(localStorage.getItem('user')),
  setItem: (key, value) => localStorage.setItem(key, JSON.stringify(value)),
  getItem: (key) => JSON.parse(localStorage.getItem(key)),
  clear: () => localStorage.clear(),
};
