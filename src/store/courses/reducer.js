import {
  ADD_COURSE,
  DELETE_COURSE,
  SET_COURSES,
  UPDATE_COURSE,
} from './actionTypes';

const initialState = [];

export const coursesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COURSES:
      return action.payload;
    case ADD_COURSE:
      return [...state, action.payload];
    case DELETE_COURSE:
      return state.filter((course) => course.id !== action.payload);
    case UPDATE_COURSE:
      const withoutCourse = state.filter(
        (course) => course.id !== action.payload.id
      );
      return [...withoutCourse, action.payload];
    default:
      return state;
  }
};
