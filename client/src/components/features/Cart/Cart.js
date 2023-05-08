import { useSelector } from "react-redux";
import { getCart } from "../../../redux/cartRedux";
import CartBox from "../../common/CartBox/CartBox";
import { Button } from "react-bootstrap";
import styles from './Cart.module.scss';

const Cart = () => {
  const dataCart = useSelector(getCart);

  return (
    <div className="mt-4">
      {dataCart.map(cart => <CartBox key={cart.id} {...cart} />)}
      <div align="end">
        <Button className={`${styles.button} my-3 mx-3`} variant="success">Order</Button>
      </div>
    </div>
  );
};

export default Cart;