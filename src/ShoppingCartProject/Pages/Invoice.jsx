import { ContextUse } from "../Context/contextProvider";

const Invoice = () => {
  const { data, initialState, dispatch } = ContextUse();

  const cartItems = data.map((ini) => {
    //console.log(initialState);

    return (
      <div key={ini.product.id}>
        <div className="flex justify-between p-6">
          <img
            src={ini.product.image}
            className="h-[100px] w-[100px] object-contain"
          />

          <div className="flex flex-col justify-start flex-1 px-10 gap-3">
            <div>
              <h3 className="text-lg">{ini.product.title}</h3>
              <p className="text-gray-400">{ini.product.category}</p>
            </div>

            <div className="flex justify-start space-x-4 text-center items-center">
              <button
                onClick={() =>
                  dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: ini.product.id,
                  })
                }
                className="text-md text-red-500"
              >
                Remove
              </button>
              <button
                onClick={()=>dispatch({type:"DECREMENT_COUNT", payload: 1, index: ini.product.id})}
              className="border rounded-l px-2 py-1 text-red-500 text-center rounded-sm border-red-500 hover:bg-red-500 hover:text-white">
                {" "}
                -{" "}
              </button>
              <span>{ini.count}</span>
              <button className="border rounded-r px-2 py-1 text-green-500 text-center rounded-sm border-green-500 hover:bg-green-500 hover:text-white">
                {" "}
                +{" "}
              </button>
            </div>
          </div>
          <span>
            <b>${ini.product.price}</b>
          </span>
        </div>
        <hr />
      </div>
    );
  });

  return (
    <div>
      <div className="flex flex-col max-w-3xl p-5 m-auto my-14 border rounded-md">
        <h1 className="text-2xl ms-7 my-5">Your Shopping Cart</h1>
        {cartItems}
      </div>
    </div>
  );
};

export default Invoice;
