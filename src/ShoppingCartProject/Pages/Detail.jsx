import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { productByID } from "../Redux/features/ProductSlice";

const Detail = () => {
  //
  const itemByID = useSelector(productByID);

  return (
    <div className=" w-screen flex flex-col md:flex-row gap-10 lg:gap-40 px-10 py-20 pt-24">
      <div className=" md:w-[30%] lg:w-[25%] w-full">
        <img
          src={itemByID?.image}
          width={"100%"}
          className="rounded-lg"
          alt=""
        />
      </div>
      <div className=" flex-1">
        <div className=" flex justify-between items-center">
          <p className="text-lg tracking-wide">{itemByID?.title}</p>
          <p className=" bg-gray-500 px-4 py-1 text-white rounded-full">
            ${itemByID?.price}
          </p>
        </div>
        <p className=" my-2 flex items-center gap-3">
          <span>{itemByID?.rating?.rate}</span>
          <span>
            {[...Array(5)].map((x, index) => (
              <AiFillStar
                key={index}
                size={20}
                className={`inline-block ${
                  Math.round(Number(itemByID?.rating?.rate)) > index
                    ? "text-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
          </span>
          <span className=" text-gray-400 text-sm">
            by {itemByID?.rating?.count} users
          </span>
        </p>
        <p className=" my-5">
          <span className=" tracking-wide ">Description</span>
          <span className=" whitespace-wrap text-sm lg:text-base text-gray-500 mt-5 tracking-wide block">
            {itemByID?.description}
          </span>
        </p>
        <hr />
        <p className=" my-10 tracking-wider">
          Category -{" "}
          <span className=" text-gray-500">{itemByID?.category}</span>
        </p>
        <NavLink to={"/"} className="btn btn-primary">
          Go Back
        </NavLink>
      </div>
    </div>
  );
};

export default Detail;
