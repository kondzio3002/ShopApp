import { Navigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getProductById } from '../../../redux/productsRedux';
import { Col, Row, Button } from 'react-bootstrap';
import styles from './Product.module.scss';
import { useState } from 'react';

const Product = () => {
  const { id } = useParams();
  const product = useSelector(state => getProductById(state, id));
  const imagesArr = product.images.split(", ");
  // const firstImage = imagesArr.splice(0, 1)
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!product) return <Navigate to='/' />
  else return (
    <div className="mt-5">
      <h1 align="center">{product.name}</h1>

        <Row className="mt-4">
          <Col>
            <img
              src={`/uploads/${imagesArr[currentImageIndex]}`}
              className={styles.image} alt="product"
              style={{width: "500px", height: "500px"}}
            />
            <Row>
              {imagesArr.map((img, index) => (
                <Col className="col-2" key={index}>
                  <img
                    src={`/uploads/${img}`}
                    className={`${styles.image} ${styles.images} ${index === currentImageIndex ? styles.active : ''}`}
                    style={{width: "80px", height: "80px"}}
                    alt="product"
                    onClick={() => setCurrentImageIndex(index)}
                  />
                </Col>
              ))}
            </Row>
          </Col>

          <Col className={styles.product_body}>
            <div className={styles.price}>
              <p className={styles.price_inner}>{product.price} $</p>
            </div>
            <p className={styles.content}>{product.content}</p>
            <div align="end" className={styles.button}>
              <input type='number'></input>
              <Button variant="warning">Add to cart</Button>
            </div>
          </Col>
        </Row>

    </div>
  );
};

export default Product;