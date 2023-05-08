import { Navigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getProductById } from '../../../redux/productsRedux';
import { Col, Row, Button } from 'react-bootstrap';
import styles from './Product.module.scss';

const Product = () => {
  const { id } = useParams();
  const product = useSelector(state => getProductById(state, id));
  const imagesArr = product.images.split(", ");
  // const firstImage = imagesArr.splice(0, 1)

  if (!product) return <Navigate to='/' />
  else return (
    <div className="mt-5">
      <h1 align="center">{product.name}</h1>

        <Row className="mt-4">
          <Col>
            <img src={`/uploads/${imagesArr[0]}`} className={styles.image} alt="product" style={{width: "500px", height: "500px"}}/>
            <Row>
              {imagesArr.map(img => (
                <Col className="col-2"><img src={`/uploads/${img}`} className={`${styles.image} ${styles.images}`} style={{width: "80px", height: "80px"}} /></Col>
              ))}
            </Row>
          </Col>
          <Col className={styles.product_body}>
            <div className={styles.price}>
              <p className={styles.price_inner}>{product.price} $</p>
            </div>
            <p className={styles.content}>{product.content}</p>
            <div align="end" className={styles.button}>
              <Button variant="warning">Add to cart</Button>
            </div>
          </Col>
        </Row>

    </div>
  );
};

export default Product;