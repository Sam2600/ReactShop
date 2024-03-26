import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { totalProducts } from "../Redux/features/ProductSlice";
import dummy from "../../assets/dummy.jpg";
import { user } from "../Redux/features/UserSlice";

const NavBar = () => {
  //
  const authUser = useSelector(user);

  const dispatch = useDispatch();

  const total = useSelector(totalProducts);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="navbar shadow-md bg-base-100">
      <div className="flex-1">
        <NavLink className="btn btn-ghost text-xl text-primary" to="/">
          Shoppie
        </NavLink>
      </div>
      <div className="flex gap-4 px-5">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              {total > 0 && (
                <span className="badge badge-primary badge-sm indicator-item">
                  {total}
                </span>
              )}
            </div>
          </div>
          <div
            tabIndex={0}
            className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div className="card-body">
              <span className="font-bold text-lg">{`${total} items`}</span>
              {/* <span className="text-info">{"Subtotal: $999"}</span> */}
              <div className="card-actions">
                <NavLink
                  className="btn btn-primary btn-block text-lg"
                  to="/cart"
                >
                  View cart
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        {authUser?.email || authUser?.name ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img alt="user profile" src={authUser?.profile} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <Link to={"/login"} onClick={handleLogout} className="">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img alt="dummy profile" src={dummy} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to={"/login"}>Login</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
