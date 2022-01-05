import {
  mockedAuthorsList,
  mockedCoursesList,
  mockedState,
} from '../../../mock';
import {
  getAuthors,
  getAvailableAuthors,
  getCourseAuthorNamesString,
  getCourseAuthors,
} from '../selectors';

describe('authors/selectors', () => {
  it('Should return mockedAuthorList', () => {
    const authors = getAuthors(mockedState);
    expect(authors).toEqual(mockedAuthorsList);
  });

  it('Should return courseAuthors by array of authors ids', () => {
    const courseAuthors = getCourseAuthors(mockedCoursesList[0].authors)(
      mockedState
    );

    expect(courseAuthors).toEqual([mockedAuthorsList[0], mockedAuthorsList[1]]);
  });

  it('Should return availableAuthors by array of authors ids', () => {
    const availableAuthors = getAvailableAuthors(mockedCoursesList[0].authors)(
      mockedState
    );

    expect(availableAuthors).toEqual([
      mockedAuthorsList[2],
      mockedAuthorsList[3],
    ]);
  });

  it('Should return courseAuthorNamesString by array of authors ids', () => {
    const courseAuthors = getCourseAuthorNamesString(
      mockedCoursesList[0].authors
    )(mockedState);

    expect(courseAuthors).toEqual(
      [mockedAuthorsList[0], mockedAuthorsList[1]]
        .map((author) => author.name)
        .join(', ')
    );
  });
});
