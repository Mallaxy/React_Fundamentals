import { AuthorsAPI } from '../../services';
import { addAuthor, setAuthors } from './actionCreators';

export const loadAuthors = () => async (dispatch) => {
  const data = await AuthorsAPI.getAuthors();

  if (data) {
    dispatch(setAuthors(data.result));
  }
};

export const createAuthor = (author) => async (dispatch) => {
  const data = await AuthorsAPI.createAuthor(author);

  if (data) {
    dispatch(addAuthor(data.result));
  }
};
