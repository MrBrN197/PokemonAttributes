import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import store from '../redux/configureStore';

const Wrapper = ({
  children,
}) => (
  <Provider store={store}>
    <MemoryRouter>
      {children}
    </MemoryRouter>
  </Provider>
);

Wrapper.propTypes = {
  children: PropTypes.oneOf(PropTypes.node).isRequired,
};

export default Wrapper;
