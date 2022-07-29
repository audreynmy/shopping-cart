import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/cart-slice';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const dispatch = useDispatch()
  const amount = useSelector(state => state.cart.amount )

  return (
    <button onClick={() => dispatch(cartActions.toggleShowCart())} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{amount}</span>
    </button>
  );
};

export default CartButton;
