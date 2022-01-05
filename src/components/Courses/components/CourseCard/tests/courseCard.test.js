import React from 'react';
import { screen } from '@testing-library/react';
import { CourseCard } from '../..';
import { renderWithRouterAndStore } from '../../../../../testUtils/renderWithRouterAndStore';
import { mockedState, mockedStore } from '../../../../../mock';
import { getCourseAuthorNamesString } from '../../../../../store/authors/selectors';
import {
  convertDateFormat,
  convertMinutesIntoHours,
} from '../../../../../helpers';

describe('CourseCard', () => {
  it('Render CourseCard', () => {
    const route = '/courses';
    renderWithRouterAndStore(
      <CourseCard
        course={mockedState.courses[0]}
        authorsList={mockedState.authors}
      />,
      { route, store: mockedStore }
    );

    const { title, description, duration, authors, creationDate } =
      mockedState.courses[0];

    const courseAuthorNamesString =
      getCourseAuthorNamesString(authors)(mockedState);

    const convertedDuration = convertMinutesIntoHours(duration);
    const convertedDate = convertDateFormat(creationDate);

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(description)).toBeInTheDocument();
    expect(screen.getByText(courseAuthorNamesString)).toBeInTheDocument();
    expect(
      screen.getByText(convertedDuration, { exact: false })
    ).toBeInTheDocument();
    expect(screen.getByText(convertedDate)).toBeInTheDocument();
  });
});
