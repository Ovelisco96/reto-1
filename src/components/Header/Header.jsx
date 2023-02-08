import React from "react";
import Logo from "../../assets/logo.svg";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <button class="menu-btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="35"
          viewBox="0 0 24 24"
        >
          <path d="M4 6H20V8H4zM4 11H20V13H4zM4 16H20V18H4z" />
        </svg>
      </button>
      <nav className="links">
        <a className="link" href="">
          Home
        </a>
        <a className="link" href="">
          New
        </a>
        <a className="link" href="">
          Popular
        </a>
        <a className="link" href="">
          Trending
        </a>
        <a className="link" href="">
          Categories
        </a>
      </nav>
    </header>
  );
};

export default Header;
