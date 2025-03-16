import React, { useContext } from "react";
import { Link } from "react-router";
import AuthContext from "../Provider/AuthContext";
import logo from "../assets/logo/logo.png";
const Navbar = () => {
  const { user, userSignOut } = useContext(AuthContext);
  const handleSignOut = () => {
    userSignOut()
      .then(() => {
        console.log("successfully signout");
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  const links = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/my_application">My Application</Link>
      </li>
      <li>
        <Link to="/addJob">Add Job</Link>
      </li>
      <li>
        <Link to="/my_posted_jobs">Posted Jobs</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to="/" className="flex items-center ml-4 text-xl">
          <img src={logo} alt="" />
          <h1>Job Portals</h1>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <button onClick={handleSignOut} className="btn">
              Sign Out
            </button>
          </>
        ) : (
          <>
            <Link to="/register" className="mr-4">
              Register
            </Link>
            <Link to="/login">
              <button className="btn">Sign In</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
