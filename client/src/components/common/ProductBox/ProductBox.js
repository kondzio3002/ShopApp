import { Button, Card } from 'react-bootstrap';
import { IMG_URL } from '../../../config';

const ProductBox = ({ name, price, images, id }) => {
  const imagesArr = images.split(", ");
  console.log(imagesArr);

  return (
    <Card className="col-4 m-2" style={{ width: "26.5rem"}}>
      <Card.Img src={IMG_URL + imagesArr[0]} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle>from {price} $</Card.Subtitle>
        <Button variant="outline-dark">Read more</Button>
      </Card.Body>
    </Card>
  )
}

export default ProductBox;