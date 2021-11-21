import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import {
  MemoryRouter, BrowserRouter, Route, Routes,
} from 'react-router-dom';
import { render } from '@testing-library/react';
import store from '../redux/configureStore';

const Wrapper = ({
  children,
}) => (
  <Provider store={store}>
    <BrowserRouter>
      {children}
    </BrowserRouter>
  </Provider>
);

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export const renderWithRoute = (ui, route = '/', params) => {
  const resolvedPath = route.replace(/:(\w+)\/?/, (...args) => {
    const key = args[1];
    return params[key];
  });
  window.history.pushState(undefined, undefined, resolvedPath);
  render(
    <>
      <div className="container">
        <h3>{resolvedPath}</h3>
      </div>
      <Routes>
        <Route path={route} element={ui} />
      </Routes>
    </>,
    { wrapper: BrowserRouter },
  );
};

export default Wrapper;
