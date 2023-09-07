import { useSelector } from "react-redux/es/hooks/useSelector";
import ItemList from "../ItemList";
import { useDispatch } from "react-redux";
import { clearCart } from "../Redux/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClear = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center p-4 m-4">
      <h1 className="text-2xl font-bold  ">cart</h1>
      <button
        className="bg-black text-white rounded-[20px] p-4 m-4"
        onClick={handleClear}
      >
        Clear cart
      </button>
      {cartItems.length === 0 && (
        <h1>your cart is empty please add something</h1>
      )}
      <div className="w-6/12 m-auto">
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};
export default Cart;
