// ============== || PACKAGES IMPORTS || ==================
// import { useState } from "react";

// ============== || IMAGES IMPORTS || ==================

// ============== || FUNCTIONS/UTILITIES IMPORTS || ==================

// ============== || HOOKS IMPORTS || ==================

// ============== || COMPONENTS IMPORTS || ==================
import "./NavbarPry.css";
import { HiOutlineUserCircle } from "react-icons/hi";
import { GoSearch } from "react-icons/go";

const NavbarPry = () => {
  return (
    <>
      <div className="navbar-container">
        <div className="navbar">
          <div className="logo">MyNotes</div>
          <section className="navs-section">
            <nav className="">
              <ul className="nav-items">
                <li>About us</li>
                <li>Contact</li>
                {/* <li>Blog</li> */}
              </ul>
            </nav>
            <div className="extra-nav-items">
              <GoSearch />
              <HiOutlineUserCircle />
            </div>
          </section>
        </div>
        <div className="navbar-two">
          <ul className="navbar-two-items ">
            <li>
              <button>Finished</button>
            </li>
            <li>
              <button>Bookmarks</button>
            </li>
            <li>
              <button>Add</button>
            </li>
            <li>
              <button>Search</button>
            </li>
            <li>
              <button>Settings</button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavbarPry;
