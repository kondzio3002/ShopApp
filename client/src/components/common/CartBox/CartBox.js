import { Row, Col, Button } from 'react-bootstrap';
import styles from './CartBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark} from '@fortawesome/free-solid-svg-icons';

const CartBox = ({ name, price, images, count }) => {
  const imagesArr = images.split(", ");

  const totalPrice = price * count;

  return (
    <div className={`${styles.cart_box} mt-3`}>
      <Row>
        <Col className="col-1"><img className={styles.image} src={`/uploads/${imagesArr[0]}`} alt={name} /></Col>
        <Col className="col-4 mt-4"><h2>{name}</h2></Col>
        {/*<Col className="col-1 mt-4"><h5>{price} $</h5></Col>*/}
        <Col className="col-1 mt-4"><input className={styles.input_count} type="number" value={count}></input></Col>
        <Col className="col-1 mt-4"><h4>{totalPrice} $</h4></Col>
        <Col className="mt-4 mx-3" align="end"><Button variant="dark-outline"><FontAwesomeIcon className={styles.icon} icon={faCircleXmark}></FontAwesomeIcon></Button></Col>
      </Row>
      <textarea className={`${styles.input_note} m-2`}></textarea>
    </div>
  );
};

export default CartBox;