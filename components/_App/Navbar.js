import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from 'next/image';
import Link from "next/link";
import * as Icon from "react-feather";
import { useSelector } from "react-redux";

import logo from "/public/images/logo.png";

const Navbar = () => {
  // Add active class
  const [currentPath, setCurrentPath] = useState("");
  const router = useRouter();
  // console.log(router.asPath)

  useEffect(() => {
    setCurrentPath(router.asPath);
  }, [router]);

  const cart = useSelector((state) => state.cart);
  const [menu, setMenu] = React.useState(true);

  const toggleNavbar = () => {
    setMenu(!menu);
  };

  React.useEffect(() => {
    let elementId = document.getElementById("header");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  });

  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <header id="header" className="headroom">
        <div className="startp-nav">
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
              <Link href="/" className="navbar-brand">
                <Image src={logo} alt="logo" width={150} height={66} />
              </Link>

              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <Link
                      href="/"
                      onClick={toggleNavbar}
                      className={`nav-link ${
                        currentPath == "/" && "active"
                      }`}
                    >
                      Home
                    </Link>

                   
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/services-3/"
                      onClick={toggleNavbar}
                      className={`nav-link ${
                        currentPath == "/services-3/" && "active"
                      }`}
                    >
                      Services
                    </Link>

                  </li>

                  <li className="nav-item">
                    <Link
                      href="/about-2/"
                      onClick={toggleNavbar}
                      className={`nav-link ${
                        currentPath == "/about-2/" && "active"
                      }`}
                    >
                      About
                    </Link>

                   
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/contact/"
                      onClick={toggleNavbar}
                      className={`nav-link ${
                        currentPath == "/contact/" && "active"
                      }`}
                    >
                      Career
                    </Link>
                  </li>


                  <li className="nav-item">
                    <Link
                      href="/contact/"
                      onClick={toggleNavbar}
                      className={`nav-link ${
                        currentPath == "/contact/" && "active"
                      }`}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Others option */}
              <div className="others-option">
                {/* <Link href="/cart/" className="cart-wrapper-btn">
                  <Icon.ShoppingCart />
                  <span>{cart.length}</span>
                </Link> */}

                <Link href="/contact/" className="btn btn-light">
                  Support
                </Link>

                {/* <Link href="/login/" className="btn btn-primary">
                  Login
                </Link> */}
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
