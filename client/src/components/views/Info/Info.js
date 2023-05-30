import styles from './Info.module.scss';

const Info = () => {
  return (
    <div className={`${styles.info} mt-5 py-1`} align="center">
      <h6>Contact</h6>
      <p>123 123 123</p>
      <p>email@email.com</p>
    </div>
  );
};

export default Info;