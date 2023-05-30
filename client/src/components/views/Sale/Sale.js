import { Button } from 'react-bootstrap';
import styles from './Sale.module.scss';

const Sale = () => {
  return (
    <div className={`${styles.sale} mt-4`}>
      <img src="/uploads/sale/sale.jpg" alt="sale" />
      <div className={styles.sale_inner} align="center">
        <Button variant="dark" size="lg">Show more</Button>
      </div>
    </div>
  );
};

export default Sale;