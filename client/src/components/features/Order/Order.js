import { useSelector } from "react-redux";
import { Button, Col, Form, Row } from "react-bootstrap";
import styles from './Order.module.scss';
import { getOrder } from "../../../redux/orderRedux";
import OrderBox from "../../common/OrderBox/OrderBox";

const Order = () => {
  const dataOrder = useSelector(getOrder);

  return (
    <div className="mt-4">
      {dataOrder.map(order => <OrderBox key={order.id} {...order} />)}

      <Row className="mt-5">
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
  );
};

export default Order;