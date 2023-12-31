import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "../utils/cartSlice";
import ItemList from "./ItemList";


const Cart = () =>{

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart())
    }
    const handleRemoveItem = () => {
        dispatch(removeItem())
    }
    console.log(handleRemoveItem)

    const cartItems = useSelector((store)=> store.cart.items);
    return (
        <div className="flex flex-col justify-center items-center md:px-10 px-2">
            <h1 className="text-center text-[24px] font-bold mt-6 ">Cart</h1>
            <div className="flex flex-col justify-center md:w-6/12 w-full">
                <div className="flex justify-center space-x-4">
                <button onClick={handleClearCart} className="border border-orange-800  font-semibold px-2 text-orange-900 rounded-md hover:bg-orange-800 hover:text-orange-200">Clear Cart</button>
                <button onClick={handleRemoveItem} className="border border-orange-800 font-semibold px-2 text-orange-900 rounded-md hover:bg-orange-800 hover:text-orange-200">Remove Item</button>
                </div>
                {cartItems.length === 0 && <h1 className="text-center mt-10 text-[20px]">Cart is Empty. Please Add Some Items!!😊</h1>}
                <ItemList items={cartItems}/>
            </div>
        </div>
    )
}

export default Cart;