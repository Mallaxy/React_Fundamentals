import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { getByText, queryByText, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { CourseForm } from '../..';
import { mockedState, mockedStore } from '../../../mock';
import { renderWithRouterAndStore } from '../../../testUtils/renderWithRouterAndStore';

import {
  ADD_AUTHOR_TEXT,
  CREATE_AUTHOR_TEXT,
  DELETE_AUTHOR_TEXT,
} from '../../../constants';
import {
  getAvailableAuthors,
  getCourseAuthors,
} from '../../../store/authors/selectors';
import { createAuthor } from '../../../store/authors';

jest.mock('../../../store/authors');

describe('CourseForm', () => {
  const { id, authors } = mockedState.courses[0];
  const { name: courseAuthorName } = mockedState.authors[0];
  const { name: availableAuthorName } = mockedState.authors[3];

  const authorName = 'Author Name';

  const route = `/courses/update/${id}`;

  beforeEach(() => {
    createAuthor.mockImplementation(() => 'AUTHOR_CREATED');

    renderWithRouterAndStore(
      <Routes>
        <Route path='/courses/update/:courseId' element={<CourseForm />} />
      </Routes>,
      { route, store: mockedStore }
    );
  });

  it('Should show courseAuthors', () => {
    const courseAuthors = getCourseAuthors(authors)(mockedState);

    courseAuthors.forEach((author) => {
      expect(screen.getByText(author.name)).toBeInTheDocument();
    });
  });

  it('Should show availableAuthors', () => {
    const availableAuthors = getAvailableAuthors(authors)(mockedState);

    availableAuthors.forEach((author) => {
      expect(screen.getByText(author.name)).toBeInTheDocument();
    });
  });

  it('Should call dispatch by click on Add button', () => {
    expect(screen.getByTestId('create-author-button')).toBeInTheDocument();
    expect(screen.getByTestId('author-name-input')).toBeInTheDocument();

    userEvent.type(screen.getByTestId('author-name-input'), authorName);

    userEvent.click(screen.getByTestId('create-author-button'));

    expect(mockedStore.dispatch).toBeCalledWith(createAuthor(authorName));
  });

  it('Should add an author to course authors list by click Add author button', () => {
    const availableAuthorsContainer = screen.getByTestId('available-authors');
    const courseAuthorsContainer = screen.getByTestId('course-authors');
    const authorItems = screen.getAllByTestId('author-item');

    // name isn't in courseAuthors
    expect(
      queryByText(courseAuthorsContainer, availableAuthorName)
    ).not.toBeInTheDocument();

    // name is in availableAuthors
    expect(
      getByText(availableAuthorsContainer, availableAuthorName)
    ).toBeInTheDocument();

    // find authorItem with exact authorName
    const testAuthorItem = authorItems.find((authorItem) =>
      queryByText(authorItem, availableAuthorName)
    );

    // add author to courseAuthors
    userEvent.click(getByText(testAuthorItem, ADD_AUTHOR_TEXT));

    // name is in courseAuthors
    expect(
      getByText(courseAuthorsContainer, availableAuthorName)
    ).toBeInTheDocument();

    // name isn't in availableAuthors
    expect(
      queryByText(availableAuthorsContainer, availableAuthorName)
    ).not.toBeInTheDocument();
  });

  it('Should delete an author from the course list by click Delete author button', () => {
    const availableAuthorsContainer = screen.getByTestId('available-authors');
    const courseAuthorsContainer = screen.getByTestId('course-authors');
    const authorItems = screen.getAllByTestId('author-item');

    // name isn't in availableAuthors
    expect(
      queryByText(availableAuthorsContainer, courseAuthorName)
    ).not.toBeInTheDocument();

    // name is in courseAuthors
    expect(
      getByText(courseAuthorsContainer, courseAuthorName)
    ).toBeInTheDocument();

    // find authorItem with exact authorName
    const testAuthorItem = authorItems.find((authorItem) =>
      queryByText(authorItem, courseAuthorName)
    );

    // delete author from courseAuthors
    userEvent.click(getByText(testAuthorItem, DELETE_AUTHOR_TEXT));

    // name is in availableAuthors
    expect(
      getByText(availableAuthorsContainer, courseAuthorName)
    ).toBeInTheDocument();

    // name isn't in courseAuthors
    expect(
      queryByText(courseAuthorsContainer, courseAuthorName)
    ).not.toBeInTheDocument();
  });
});
