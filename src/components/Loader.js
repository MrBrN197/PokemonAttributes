/* eslint-disable react/prop-types */
import { CgSpinner } from 'react-icons/cg';
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

export default Loading;
