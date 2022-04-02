import React from "react";
import logo from "../images/cartoon.jpg";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="navBar">
        <img src={logo} alt="pizza" />
        <div className="menu-options">
          <ul>
            <Link to={"/"}>
              <li>Home</li>
            </Link>
            <Link to={"/About"}>
              <li>About</li>
            </Link>
            <Link to={"/Contact"}>
              <li>Contact</li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
