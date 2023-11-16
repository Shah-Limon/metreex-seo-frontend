import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { signOut } from "firebase/auth";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import PageHero from "./PageHero";

const NavBar = () => {
  const [logo, setLogo] = useState([]);
  const [user] = useAuthState(auth);
  const location = useLocation();

  const handleSignout = () => {
    signOut(auth);
  };

  useEffect(() => {
    fetch(`http://localhost:5000/logo`)
      .then((res) => res.json())
      .then((info) => setLogo(info));
  }, []);

  const isHomePage = location.pathname === "/";
  const shouldRenderPageHero = !isHomePage;

  return (
    <>
      <div id="page" className="page">
        {shouldRenderPageHero && <PageHero />}
        <header id="header" className="header tra-menu navbar-dark dark-scroll">
          <div className="header-wrapper">
            <div className="wsmobileheader clearfix">
              <Link id="wsnavtoggle" className="wsanimated-arrow">
                <span />
              </Link>
              <span className="smllogo smllogo-black">
                {logo.length > 0 && (
                  <img
                    src={logo[0].logo}
                    width={162}
                    height={40}
                    alt="header-logo"
                  />
                )}
              </span>
              <span className="smllogo smllogo-white">
                {logo.length > 0 && (
                  <img
                    src={logo[0].logo}
                    width={162}
                    height={40}
                    alt="header-logo"
                  />
                )}
              </span>
              <a href="mailto:email@website.com" className="callusbtn">
                <i className="fas fa-envelope" />
              </a>
            </div>
            {/* NAVIGATION MENU */}
            <div className="wsmainfull menu clearfix">
              <div className="wsmainwp clearfix">
                {/* LOGO IMAGE */}
                {/* For Retina Ready displays take a image with double the amount of pixels that your image will be displayed (e.g 334 x 80 pixels) */}
                <div className="desktoplogo">
                  <Link to="/" className="logo-black">
                    {logo.length > 0 && (
                      <img
                        src={logo[1].logo}
                        width={162}
                        height={40}
                        alt="header-logo"
                      />
                    )}
                  </Link>
                </div>
                <div className="desktoplogo">
                  <Link to="/" className="logo-white">
                    {logo.length > 0 && (
                      <img
                        src={logo[0].logo}
                        width={162}
                        height={40}
                        alt="header-logo"
                      />
                    )}
                  </Link>
                </div>
                {/* MAIN MENU */}
                <nav className="wsmenu clearfix blue-header">
                  <ul className="wsmenu-list">
                    <li className="nl-simple">
                      <Link to="/" aria-haspopup="true">
                        Home
                      </Link>
                    </li>
                    <li className="nl-simple">
                      <Link to="/services" aria-haspopup="true">
                        Services
                      </Link>
                    </li>
                    <li className="nl-simple">
                      <Link to="/about-us" aria-haspopup="true">
                        About Us
                      </Link>
                    </li>
                    <li className="nl-simple">
                      <Link to="/contact-us" aria-haspopup="true">
                        Contact Us
                      </Link>
                    </li>
                    <li className="nl-simple">
                      <Link to="/admin/dashboard" aria-haspopup="true">
                        Admin
                      </Link>
                    </li>

                    <li className="nl-simple green-scroll">
                      <a
                        href="mailto:email@website.com"
                        aria-haspopup="true"
                        className="callusbtn"
                      >
                        <i className="fas fa-envelope" />
                      </a>
                    </li>

                    <li class="nl-simple">
                      <Link
                        to="/login"
                        aria-haspopup="true"
                        class="btn btn-green tra-white-hover last-link"
                      >
                        Login
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default NavBar;
