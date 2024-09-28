import React from "react";
import { Link } from "react-router-dom";
import PP from "../assets/pp2.png";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 px-4 md:px-10 fixed">
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/about"}>About</Link>
              </li>
              <li>
                <Link to={"/experience"}>Experience</Link>
              </li>
              <li>
                <Link to={"/skills"}>Skills</Link>
              </li>
              <li>
                <Link to={"/interest"}>Interest</Link>
              </li>
              <li>
                <Link to={"/awards"}>Awards</Link>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">deysiyuwai</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <Link to={"/experience"}>Experience</Link>
            </li>
            <li>
              <Link to={"/skills"}>Skills</Link>
            </li>
            <li>
              <Link to={"/interest"}>Interest</Link>
            </li>
            <li>
              <Link to={"/awards"}>Awards</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="avatar placeholder">
            <div className="bg-neutral text-neutral-content w-12 rounded-full">
              <img src={PP} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
