import { ADD_AUTHOR, SET_AUTHORS } from './actionTypes';

const initialState = [];

export const authorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTHORS:
      return action.payload;
    case ADD_AUTHOR:
      return [...state, action.payload];
    default:
      return state;
  }
};
