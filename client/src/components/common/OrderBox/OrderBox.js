import { Row, Col, Button } from 'react-bootstrap';
import styles from './OrderBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark} from '@fortawesome/free-solid-svg-icons';

const OrderBox = ({ name, price, images, count, note }) => {
  const imagesArr = images.split(", ");

  const totalPrice = price * count;

  return (
    <div className={`${styles.order_box} mt-3`}>
      <Row>
        <Col className="col-1"><img className={styles.image} src={`/uploads/${imagesArr[0]}`} alt={name} /></Col>
        <Col className="col-4 mt-4"><h2>{name}</h2></Col>
        {/*<Col className="col-1 mt-4"><h5>{price} $</h5></Col>*/}
        <Col className="col-1 mt-4">{count}</Col>
        <Col className="col-1 mt-4"><h4>{totalPrice} $</h4></Col>
        <Col className="col-5 mt-4">{note}</Col>
      </Row>
    </div>
  );
};

export default OrderBox;