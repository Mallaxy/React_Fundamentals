import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { rootReducer } from '../store';

const testStore = createStore(rootReducer);

export const renderWithRouterAndStore = (
  ui,
  { route = '/', store = testStore, ...renderOptions } = {}
) => {
  window.history.pushState({}, 'Test page', route);

  const Wrapper = ({ children }) => {
    return (
      <BrowserRouter>
        <Provider store={store}>{children}</Provider>
      </BrowserRouter>
    );
  };
  return render(ui, { wrapper: Wrapper, ...renderOptions });
};
