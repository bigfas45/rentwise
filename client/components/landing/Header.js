import React, { Component, Fragment } from 'react';
import Link from 'next/link';

const Header = ({ currentuser }) => {
  return (
    <Fragment>
      {/* <!-- Header
		============================================= --> */}
      <header
        id="header"
        className="transparent-header header-size-custom"
        data-sticky-shrink="false"
      >
        <div id="header-wrap">
          <div className="container">
            <div className="header-row">
              {/* <!-- Logo
						============================================= --> */}
              <div id="logo">
                <a href="index.html" className="standard-logo">
                  <img src="rentwised.png" alt="Rentwise Logo" />
                </a>
                <a href="index.html" className="retina-logo">
                  <img src="rentwised.png" alt="Rentwise Logo" />
                </a>
              </div>
              {/* <!-- #logo end --> */}

              <div className="header-misc">
                {/* <!-- Top Search
							============================================= --> */}
                <div id="top-search" className="header-misc-icon">
                  <a href="#" id="top-search-trigger">
                    <i className="icon-line-search"></i>
                    <i className="icon-line-cross"></i>
                  </a>
                </div>
              </div>

              <div id="primary-menu-trigger">
                <svg className="svg-trigger" viewBox="0 0 100 100">
                  <path d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"></path>
                  <path d="m 30,50 h 40"></path>
                  <path d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"></path>
                </svg>
              </div>

              {/* <!-- Primary Navigation
						============================================= --> */}
              <nav className="primary-menu">
                <ul className="menu-container">
                  <li className="current menu-item">
                    <a className="menu-link" href="/">
                      <div>Home</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a className="menu-link" href="/aboutus">
                      <div>About Us</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a className="menu-link" href="/plans">
                      <div>Plans</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a className="menu-link" href="/contact">
                      <div> Contact Us</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a className="menu-link" href="/auth/signin">
                      <div>
                        <i className="icon-line2-user font-weight-semibold"></i>
                        Login
                      </div>
                    </a>
                    <ul className="p-3 text-muted sub-menu-container">
                      <li>
                        Not Registered Yet? Genuine Clients, 100% Trust
                        Assurance and Lowest Fees on the Market.{' '}
                        <a
                          href="/auth/signin"
                          data-lightbox="inline"
                          className="d-block mt-2"
                        >
                          <u>Login/Register</u>{' '}
                          <i className="icon-line-arrow-right"></i>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
              {/* <!-- #primary-menu end --> */}
            </div>
          </div>
        </div>
        <div className="header-wrap-clone"></div>
      </header>
    </Fragment>
  );
};

export default Header;
