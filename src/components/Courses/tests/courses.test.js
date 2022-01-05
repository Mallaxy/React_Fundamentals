import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { CourseForm, Courses } from '../..';
import { mockedState, mockedStore } from '../../../mock';
import { renderWithRouterAndStore } from '../../../testUtils/renderWithRouterAndStore';

const RouterComponent = () => (
  <>
    <Routes>
      <Route path='/courses' exact element={<Courses />} />
      <Route path='/courses/add' element={<CourseForm />} />
    </Routes>
  </>
);

describe('Courses', () => {
  beforeEach(() => {
    const route = '/courses';

    renderWithRouterAndStore(<RouterComponent />, {
      route,
      store: mockedStore,
    });
  });
  it('Render Courses', () => {
    const courseCards = screen.getAllByTestId('courseCard');
    expect(courseCards).toHaveLength(mockedState.courses.length);

    const coursesList = screen.getByTestId('coursesList');
    expect(coursesList).toBeDefined();
  });

  it('CourseForm should be showed after a click on a button "Add new course"', () => {
    expect(screen.queryByTestId('courseForm')).toBeNull();

    userEvent.click(screen.getByTestId('navigate-to-course-form-button'));

    expect(screen.getByTestId('courseForm')).toBeInTheDocument();
  });
});
