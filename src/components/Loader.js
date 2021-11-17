/* eslint-disable react/prop-types */
import { RiLoader4Line } from 'react-icons/ri';
import styles from './Loader.module.scss';

const Loading = ({
  loading,
  children,
}) => (
  <div className={styles.loaderParent}>
    {loading && <div className={styles.loader}><RiLoader4Line size="100%" /></div>}
    {children}
  </div>
);

export default Loading;
