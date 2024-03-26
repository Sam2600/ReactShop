import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { addedToCart, fetchProductByID } from "../Redux/features/ProductSlice";
import { useDispatch } from "react-redux";

const ProductCard = ({ id, title, price, image, isAdded }) => {
  const dispatch = useDispatch();

  const handleClickCart = () => {
    dispatch(addedToCart(id));
  };

  const handleViewDetail = (id) => {
    localStorage.setItem("ITEM_DETAIL_ID", id);
    dispatch(fetchProductByID(id));
  };

  return (
    <div className="card py-5 border w-72 shadow-xl">
      <figure>
        <img
          className=" h-[100px] self-center object-contain"
          src={image}
          alt={title}
        />
      </figure>

      <div className="card-body justify-evenly">
        <div className="flex flex-col justify-between ml-4 items-start space-y-7">
          <h1 className="tooltip" data-tip={title}>
            {title.length > 20 ? `${title.substring(0, 20)}...` : title}
          </h1>
          <p>${price}</p>
        </div>

        <div className="card-actions items-start mt-2 justify-between">
          <Link to={`/detail/${id}`}>
            <button
              onClick={() => handleViewDetail(id)}
              className="btn btn-link"
            >
              View Detail
            </button>
          </Link>
          {isAdded ? (
            <button
              className="btn btn-success text-white cursor-default"
              disabled
              onClick={handleClickCart}
            >
              <AiOutlineShoppingCart size={20} />
            </button>
          ) : (
            <button className="btn btn-outline" onClick={handleClickCart}>
              <AiOutlineShoppingCart size={20} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
