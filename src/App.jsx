import React, { useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  Courses,
  Header,
  CourseForm,
  Login,
  Registration,
  CourseInfo,
  PrivateRoute,
} from './components';

import { loadCourses } from './store/courses';
import { loadAuthors } from './store/authors';
import { getIsAuth } from './store/user/selectors';

import { Container, MainContent } from './App.styled';

function App() {
  const dispatch = useDispatch();

  const isAuth = useSelector(getIsAuth);

  useEffect(() => {
    dispatch(loadAuthors());
    dispatch(loadCourses());
  }, [dispatch]);

  return (
    <Container>
      <Header />
      <MainContent>
        <Routes>
          <Route
            path='/'
            exact
            element={
              isAuth ? <Navigate to='/courses' /> : <Navigate to='/login' />
            }
          />
          <Route path='/courses' exact element={<Courses />} />
          <Route path='/courses/:courseId' element={<CourseInfo />} />

          <Route path='/courses/add' element={<PrivateRoute />}>
            <Route path='/courses/add' element={<CourseForm />} />
          </Route>

          <Route path='/courses/update' element={<PrivateRoute />}>
            <Route path='/courses/update/:courseId' element={<CourseForm />} />
          </Route>

          <Route path='/login' element={<Login />} />
          <Route path='/registration' element={<Registration />} />
        </Routes>
      </MainContent>
    </Container>
  );
}

export default App;
