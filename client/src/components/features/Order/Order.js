import { useSelector } from "react-redux";
import { Button, Col, Form, Row } from "react-bootstrap";
import styles from './Order.module.scss';
import OrderBox from "../../common/OrderBox/OrderBox";
import { getCart } from "../../../redux/cartRedux";

const Order = () => {
  const dataOrder = useSelector(getCart);

  const totalAmount = dataOrder.reduce((sum, order) => sum + order.price * order.count, 0)

  return (
    <div>
    <Row>
      <Col className="col-4 mt-4" md={{ span: 1, offset: 1 }}><p>Product</p></Col>
      <Col className="col-1 mt-4" md={{ span: 1, offset: 3 }}><p>Count</p></Col>
      <Col className="col-1 mt-4"><p>Total price</p></Col>
      <Col className="col-1 mt-4"><p>Note</p></Col>
    </Row>

      <div>
        {dataOrder.map(order => <OrderBox key={order.id} {...order} />)}
        <div className={styles.total_amount} align='center'>
          <p>Total amount: {totalAmount} $</p>
        </div>

        <Row className="mt-4">
          <Col md={{ span: 8, offset: 2 }} className='col-10'>
            <Form>

            <h1 className='my-4'>Contact details</h1>

              <Form.Group className='mb-3' controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" />
              </Form.Group>

              <Form.Group className='mb-3' controlId="formSurname">
                <Form.Label>Surname</Form.Label>
                <Form.Control type="text" />
              </Form.Group>

              <Form.Group className='mb-3' controlId="formPhone">
                <Form.Label>Phone number</Form.Label>
                <Form.Control type="tel" />
              </Form.Group>

              <Form.Group className='mb-3' controlId="formEmail">
                <Form.Label>E-mail</Form.Label>
                <Form.Control type="email" />
              </Form.Group>

              <Form.Group className='mb-3' controlId="formAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" />
              </Form.Group>

            </Form>
          </Col>
        </Row>

        <div align="end">
          <Button className={`${styles.button} my-3 mx-3`} variant="success">Order</Button>
        </div>
      </div>
    </div>
  );
};

export default Order;