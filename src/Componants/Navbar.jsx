import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-t from-cyan-600 to-indigo-950 sticky top-0 z-50">
      <h1
        className="text-6xl text-center italic font-bold text-white"
        id="title"
      >
        Sports League Info
      </h1>
      <div className="w-10/12 mx-auto flex mt-8 mb-5 justify-evenly">
        <NavLink
          className="bg-white w-20 text-center p-2 rounded-t-xl inline-block underline-on-hover"
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className="bg-white w-20 text-center p-2 rounded-t-xl inline-block underline-on-hover"
          to="/countries"
        >
          Countries
        </NavLink>
        <NavLink
          className="bg-white w-20 text-center p-2 rounded-t-xl inline-block underline-on-hover"
          to="/leagues"
        >
          Leagues
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
