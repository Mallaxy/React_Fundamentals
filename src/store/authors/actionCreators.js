import { ADD_AUTHOR, SET_AUTHORS } from './actionTypes';

export const setAuthors = (authors) => ({
  type: SET_AUTHORS,
  payload: authors,
});
export const addAuthor = (author) => ({
  type: ADD_AUTHOR,
  payload: author,
});
