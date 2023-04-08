import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 60) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <nav
      className={`navbar bg-green flex align-center ${
        scrolled ? "scrolled" : ""
      }`}
    >
      <div className="container w-100">
        <div className="navbar-content text-white">
          <div className="brand-and-toggler flex align-center justify-between">
            <Link to="/" className="navbar-brand fw-3 fs-22 ">
              <span className="navbar-brand-text fw-7">Logo</span>
            </Link>
            <div className="navbar-btns flex align-center">
              <button type="button" className="navbar-show-btn text-white">
                <IoMdMenu size={27} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
