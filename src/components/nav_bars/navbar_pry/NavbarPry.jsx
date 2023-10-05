// ============== || PACKAGES IMPORTS || ==================
// import { useState } from "react";
import { Link } from "react-router-dom";

// ============== || ICONS IMPORTS || ==================
import { HiOutlineUserCircle } from "react-icons/hi";
import { GoSearch } from "react-icons/go";
import { BsFillPlusCircleFill } from "react-icons/bs";

// ============== || IMAGES IMPORTS || ==================

// ============== || FUNCTIONS/UTILITIES IMPORTS || ==================

// ============== || HOOKS IMPORTS || ==================

// ============== || COMPONENTS IMPORTS || ==================
import "./NavbarPry.css";

const NavbarPry = () => {
  return (
    <>
      <div className="navbar-container">
        <div className="navbar">
          <div className="logo">
            <Link to="/">MyNotes</Link>
          </div>
          <section className="navs-section">
            <nav className="">
              <ul className="nav-items">
                <li>
                  <Link to="/about">About us</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/blogs">Blogs</Link>
                </li>
              </ul>
            </nav>
            <div className="extra-nav-items">
              <GoSearch />
              <HiOutlineUserCircle />
            </div>
          </section>
        </div>
        <div className="navbar-two">
          <div className="navbar-two-inner">
            <ul className="navbar-two-items ">
              <li>
                <button className="nav-button">Finished</button>
              </li>
              <li>
                <button className="nav-button">Bookmarks</button>
              </li>

              <li className="add-button-container">
                <button className="nav-button add-button">
                  <BsFillPlusCircleFill size={36} />
                </button>
              </li>

              <li>
                <button className="nav-button">Search</button>
              </li>
              <li>
                <button className="nav-button">Settings</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarPry;
