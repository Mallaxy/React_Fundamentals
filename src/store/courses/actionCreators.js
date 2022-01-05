import {
  ADD_COURSE,
  DELETE_COURSE,
  SET_COURSES,
  UPDATE_COURSE,
} from './actionTypes';

export const setCourses = (courses) => ({
  type: SET_COURSES,
  payload: courses,
});
export const addCourse = (course) => ({
  type: ADD_COURSE,
  payload: course,
});
export const deleteCourse = (id) => ({
  type: DELETE_COURSE,
  payload: id,
});

export const updateCourse = (course) => ({
  type: UPDATE_COURSE,
  payload: course,
});
