import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-center gap-8 bg-neutral-400 py-4 px-8 text-white shadow-lg">
      <Link
        to={"/"}
        className={
          "text-2xl font-semibold transition-all duration-300 hover:text-purple-700"
        }
      >
        Redux Toolkit
      </Link>

      <Link
        to={"/employees"}
        className={"text-xl transition-all duration-300 hover:text-purple-700"}
      >
        Employees
      </Link>

      <Link
        to={"/counter"}
        className={"text-xl transition-all duration-300 hover:text-purple-700"}
      >
        Counter
      </Link>

      <Link
        to={"/users"}
        className={"text-xl transition-all duration-300 hover:text-purple-700"}
      >
        Users
      </Link>
    </nav>
  );
};

export default Navbar;
