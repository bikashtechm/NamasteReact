import { useSelector } from "react-redux";
import FoodItems from "./FoodItems";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="">
      <h1 className="font-bold text-3xl">Cart Items - {cartItems.length}</h1>
      <button
        className="bg-pink-100 rounded-md p-2 m-2"
        onClick={() => handleClearCart()}
      >
        Clear Cart
      </button>
      <div className="flex">
        {cartItems.map((item) => (
          <FoodItems key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
