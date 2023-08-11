import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ContextUse } from "../Context/contextProvider";

const NavBar = () => {

  const {count} = ContextUse();

  return (
    <div>
      <nav className="text-xl items-center sticky top-0 shadow-lg object-cover p-5 bg-blue-300 flex justify-between px-20">
        <div>
          <Link to="/">SHOPPING.</Link>
        </div>
        <div>
          <Link to="/cart" className="flex space-x-3 items-center">
            <span>Cart</span>
            <FaShoppingCart />
            {count !== 0 &&  <span>{count}</span>}
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
