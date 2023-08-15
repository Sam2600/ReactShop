import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { addedToCart } from "../Redux/features/ProductSlice";
import { useDispatch } from "react-redux";

const ProductCard = ({ id, title, price, image, isAdded }) => {
  const dispatch = useDispatch();

  const handleClickCart = () => {
    dispatch(addedToCart(id));
  };

  return (
    <div className=" flex flex-col rounded-md gap-3 p-5 mx-10 my-10 w-72 border shadow-lg transition-all duration-300 hover:scale-105">
      <img
        className=" h-[100px] self-center object-contain"
        src={image}
        alt={title}
      />

      <h3 className="truncate">{title}</h3>

      <p>
        <b>${price}</b>
      </p>

      <div className="flex justify-between items-center">
        <Link to={`/detail/${id}`}> View Detail </Link>
        <div className="bg-slate-200 p-2 w-10 text-center self-center rounded-md">
          <button className={`hover:cursor-pointer ${isAdded && "text-green-500"}`} onClick={handleClickCart} disabled={isAdded}>
            <AiOutlineShoppingCart
              size={18}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
