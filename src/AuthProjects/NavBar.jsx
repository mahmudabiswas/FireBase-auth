import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => console.log("use log out"))
      .catch((error) => console.log(error));
  };

  const navLink = (
    <>
      <li>
        <NavLink to="/">Home </NavLink>
      </li>
      <li>
        <NavLink to="/login">LogIn </NavLink>
      </li>
      <li>
        <NavLink to="/register">Register </NavLink>
      </li>
      <li>
        <NavLink to="/order">Order </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>{navLink}</li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Email Auth</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li tabIndex={0}>
            <li>{navLink}</li>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <span> {user.email} </span>
            <a onClick={handleLogOut} className="btn">
              Sign out
            </a>
          </>
        ) : (
          <Link to="/login">
            {" "}
            <button className="btn">Log In</button>{" "}
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
