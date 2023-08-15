import {
  selectedCartProducts,
  removeFromCart,
  reduceCountCartItems,
  addCountCartItems,
} from "../Redux/features/ProductSlice";
import { useSelector, useDispatch } from "react-redux";

const Invoice = () => {
  const dispatch = useDispatch();

  const cartProducts = useSelector(selectedCartProducts);

  const handleClickRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleClickReduce = (id) => {
    dispatch(reduceCountCartItems(id));
  };

  const handleClickAdd = (id) => {
    dispatch(addCountCartItems(id));
  };

  let totalPrice = 0;

  const cartItems = cartProducts.map((ini) => {
    totalPrice += ini.totalAmount;

    return (
      <div key={ini.id}>
        <div className="flex justify-between p-6">
          <img src={ini.image} className="h-[100px] w-[100px] object-contain" />

          <div className="flex flex-col justify-start flex-1 px-10 gap-3">
            <div>
              <h3 className="text-lg">{ini.title}</h3>
              <p className="text-gray-400">{ini.category}</p>
            </div>

            <div className="flex justify-start space-x-4 text-center items-center">
              <button
                onClick={() => handleClickRemove(ini.id)}
                className="text-md text-red-500"
              >
                Remove
              </button>

              <button
                onClick={() => handleClickReduce(ini.id)}
                className="border rounded-l px-2 py-1 text-red-500 text-center rounded-sm border-red-500 hover:bg-red-500 hover:text-white"
              >
                -
              </button>

              <span>{ini.count}</span>

              <button
                onClick={() => handleClickAdd(ini.id)}
                className="border rounded-r px-2 py-1 text-green-500 text-center rounded-sm border-green-500 hover:bg-green-500 hover:text-white"
              >
                +
              </button>
            </div>
          </div>
          <span>
            <b>${ini.totalAmount}</b>
          </span>
        </div>
        {}
        <hr />
      </div>
    );
  });

  return (
    <div>
      <div className="flex flex-col max-w-3xl p-5 m-auto my-14 border rounded-md">
        <h1 className="text-2xl ms-7 my-5">Your Shopping Cart</h1> <hr />
        {cartProducts.length !== 0 ? (
          cartItems
        ) : (
          <h1 className="text-2xl text-center my-10 text-blue-400">
            There is no items in the cart!
          </h1>
        )}
        <div className="mt-5 relative items-end gap-2 flex flex-col">
          <p>Total Amount: $ <b>{totalPrice}</b></p>
          <p className="text-gray-400 mb-1">Not including taxes and shipping fees</p>
          <div className="flex">
            <button className="p-2 w-20 border me-5 border-solid border-slate-900 rounded-lg hover:bg-slate-950 hover:text-white">
              Back
            </button>
            <button className="p-2 w-32 border bg-green-400 text-white me-5 border-solid border-white rounded-lg hover:bg-green-500 hover:text-white">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
