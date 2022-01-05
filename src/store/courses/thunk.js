import { CoursesAPI } from '../../services';
import { coursesActions } from '.';

export const loadCourses = () => async (dispatch) => {
  const data = await CoursesAPI.getCourses();
  if (data) {
    dispatch(coursesActions.setCourses(data.result));
  }
};

export const deleteCourse = (id) => async (dispatch) => {
  const data = await CoursesAPI.deleteCourse(id);
  if (data) {
    dispatch(coursesActions.deleteCourse(id));
  }
};

export const createCourse = (courseForm) => async (dispatch) => {
  const { title, description, duration, authors } = courseForm;

  const newCourse = { title, description, duration, authors };

  const data = await CoursesAPI.createCourse(newCourse);

  if (data) {
    dispatch(coursesActions.addCourse(data.result));
  }
};

export const updateCourse = (courseForm) => async (dispatch) => {
  const { title, description, duration, authors, id } = courseForm;

  const updatedCourse = { title, description, duration, authors };

  const data = await CoursesAPI.updateCourse(id, updatedCourse);

  if (data) {
    dispatch(coursesActions.updateCourse(data.result));
  }
};
