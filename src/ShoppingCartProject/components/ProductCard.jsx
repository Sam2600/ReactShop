import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

const ProductCard = ({ id, title, price, image, onclick, value }) => {
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
        <div className="bg-slate-200 p-2 rounded-md">
          <AiOutlineShoppingCart
            onClick={onclick}
            className={`hover: cursor-pointer ${value && "disabled:border-green-500"}`}
            size={17}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
