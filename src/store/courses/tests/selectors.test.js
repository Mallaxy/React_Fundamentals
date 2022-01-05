import { mockedCoursesList, mockedState } from '../../../mock';
import {
  filterCoursesByTitleOrId,
  getCourseById,
  getCourses,
} from '../selectors';

describe('courses/selectors', () => {
  it('Should return mockedCoursesList', () => {
    const courses = getCourses(mockedState);
    expect(courses).toEqual(mockedCoursesList);
  });

  it('Should return course founded by id', () => {
    const course = getCourseById(mockedCoursesList[0].id)(mockedState);

    expect(course).toEqual(mockedCoursesList[0]);
  });

  it('Should return course founded by title or id', () => {
    const course1 = filterCoursesByTitleOrId('course1')(mockedState);
    const course2 = filterCoursesByTitleOrId('se2')(mockedState);
    const javaCourse = filterCoursesByTitleOrId('Java')(mockedState);
    const anguCourse = filterCoursesByTitleOrId('Angu')(mockedState);

    expect(course1).toEqual([mockedCoursesList[0]]);
    expect(course2).toEqual([mockedCoursesList[1]]);
    expect(javaCourse).toEqual([mockedCoursesList[0]]);
    expect(anguCourse).toEqual([mockedCoursesList[1]]);
  });
});
