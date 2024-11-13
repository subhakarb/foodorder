import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="container m-auto max-w-3xl">
      <h1>Cart</h1>
      <div>
        {cartItems.length == 0 && <h1>Cart Empty</h1>}
        <ItemList items={cartItems || []} />
      </div>
      <div>
        <button
          className="bg-black px-4 py-2 text-white rounded"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
