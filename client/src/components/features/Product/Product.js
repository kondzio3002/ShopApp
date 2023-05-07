import { Navigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getProductById } from '../../../redux/productsRedux';
import { IMG_URL } from '../../../config';
import { Row } from 'react-bootstrap';

const Product = () => {
  const { id } = useParams();
  const product = useSelector(state => getProductById(state, id));
  console.log(product);
  const imagesArr = product.images.split(", ");
  console.log(imagesArr);
  const firstImage = imagesArr.splice(0, 1)

  console.log("Other images:", firstImage);

  if (!product) return <Navigate to='/' />
  else return (
    <div>
      <h2>{product.name}</h2>
      <img src={`/uploads/${firstImage}`} alt="product" />
      <p>{product.price} $</p>
      <p>{product.content}</p>
      <Row>
        imagesArr
      </Row>
    </div>
  );
};

export default Product;