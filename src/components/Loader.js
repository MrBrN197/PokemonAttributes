/* eslint-disable react/prop-types */
import { CgSpinner } from 'react-icons/cg';
import styles from './Loader.module.scss';

const Loading = ({
  loading,
  children,
  className,
}) => (
  <div className={className}>
    <div className={styles.loaderParent}>
      {loading && <div className={styles.loader}><CgSpinner size="100%" /></div>}
      {children}
    </div>
  </div>
);

export default Loading;
