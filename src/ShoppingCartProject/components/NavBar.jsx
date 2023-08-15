import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { selectedCartProducts } from "../Redux/features/ProductSlice";
import { useSelector } from "react-redux";

const NavBar = () => {

  const cartItems = useSelector(selectedCartProducts)

  return (
    <div>
      <nav className="text-xl items-center sticky top-0 shadow-lg object-cover p-5 bg-blue-300 flex justify-between px-20">
        <div>
          <Link to="/">SHOPPING.</Link>
        </div>
        <div>
          <Link to="/cart" className="flex space-x-3 items-center">
            <span>Cart</span>
            <FaShoppingCart /> <span className={`${cartItems.length === 0 && "invisible "} -z-30 border-none relative right-5 -top-3 w-6 text-sm text-center text-white bg-red-500 rounded-full`}>{cartItems.length}</span>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
