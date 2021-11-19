import { CgSpinner } from 'react-icons/cg';
import PropTypes from 'prop-types';
import styles from './Loader.module.scss';

const loadingStyle = {
  position: 'relative',
};

const spinnerStyle = {
  position: 'absolute',
  inset: '0',
};

const Loading = ({
  className,
  render,
  loading,
}) => (
  <div className={className} style={loadingStyle}>
    {loading && (
    <div style={spinnerStyle}>
      <div className={styles.animation}>
        <CgSpinner size="100%" opacity={0.5} />
      </div>
    </div>
    )}
    {render()}
  </div>
);

Loading.propTypes = {
  className: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Loading;
