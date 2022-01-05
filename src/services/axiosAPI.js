import axios from 'axios';
import { localStorageAPI } from '.';
import { POST_SUCCESSFUL_STATUS, GET_SUCCESSFUL_STATUS } from '../constants';
import { store } from '../store';
import { getToken } from '../store/user/selectors';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/',
  headers: {
    'Content-type': 'application/json',
  },
});

axiosInstance.interceptors.request.use((config) => {
  const token = getToken(store.getState());
  config.headers.Authorization = token;

  return config;
});

export const AuthAPI = {
  register: async (registerForm) => {
    try {
      const dataString = JSON.stringify(registerForm);
      const response = await axiosInstance.post('register', dataString);

      if (response.status === POST_SUCCESSFUL_STATUS) {
        return response.data;
      }
    } catch (error) {
      alert('Something went wrong');
      console.error(error);
    }
  },
  login: async (loginForm) => {
    try {
      const dataString = JSON.stringify(loginForm);
      const response = await axiosInstance.post('login', dataString);

      if (response.status === POST_SUCCESSFUL_STATUS) {
        const { result: token, user } = response.data;

        const userForLocalStorage = { token, ...user };

        localStorageAPI.setUser(userForLocalStorage);

        return response.data;
      }
    } catch (error) {
      alert('Something went wrong');
      console.error(error);
    }
  },
  logout: async () => {
    try {
      const response = await axiosInstance.delete('logout');

      if (response.status === GET_SUCCESSFUL_STATUS) {
        localStorageAPI.clear();
        return true;
      }
    } catch (error) {
      alert('Something went wrong');
      console.error(error);
    }
  },
};

export const CoursesAPI = {
  getCourses: async () => {
    try {
      const response = await axiosInstance.get('courses/all');

      if (response.status === GET_SUCCESSFUL_STATUS) {
        return response.data;
      }
    } catch (error) {
      alert('Something went wrong');
      console.error(error);
    }
  },
  deleteCourse: async (id) => {
    try {
      const response = await axiosInstance.delete(`courses/${id}`);

      if (response.status === GET_SUCCESSFUL_STATUS) {
        return response.data;
      }
    } catch (error) {
      alert('Something went wrong');
      console.error(error);
    }
  },
  updateCourse: async (id, updatedCourse) => {
    try {
      const dataString = JSON.stringify(updatedCourse);
      const response = await axiosInstance.put(`courses/${id}`, dataString);

      if (response.status === GET_SUCCESSFUL_STATUS) {
        return response.data;
      }
    } catch (error) {
      alert('Something went wrong');
      console.error(error);
    }
  },
  createCourse: async (course) => {
    try {
      const dataString = JSON.stringify(course);

      const response = await axiosInstance.post(`courses/add`, dataString);

      if (response.status === POST_SUCCESSFUL_STATUS) {
        return response.data;
      }
    } catch (error) {
      alert('Something went wrong');
      console.error(error);
    }
  },
};

export const AuthorsAPI = {
  getAuthors: async () => {
    try {
      const response = await axiosInstance.get('authors/all');

      if (response.status === GET_SUCCESSFUL_STATUS) {
        return response.data;
      }
    } catch (error) {
      alert('Something went wrong');
      console.error(error);
    }
  },
  createAuthor: async (author) => {
    try {
      const dataString = JSON.stringify(author);
      const response = await axiosInstance.post('authors/add', dataString);

      if (response.status === POST_SUCCESSFUL_STATUS) {
        return response.data;
      }
    } catch (error) {
      alert('Something went wrong');
      console.error(error);
    }
  },
};

export const UsersAPI = {
  getCurrentUser: async () => {
    try {
      const response = await axiosInstance.get('users/me');

      if (response.status === GET_SUCCESSFUL_STATUS) {
        return response.data;
      }
    } catch (error) {
      alert('Something went wrong');
      console.error(error);
    }
  },
};
