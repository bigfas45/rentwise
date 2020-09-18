import React, { Component, Fragment } from 'react';
import Link from 'next/link';

const Header = ({ currentuser }) => {
  return (
    <Fragment>
      <div className="page-wrapper">
        <header id="site-header" className="header header-1">
          <div className="container-fluid">
            <div id="header-wrap" className="box-shadow">
              <div className="row">
                <div className="col-lg-12">
                  <nav className="navbar navbar-expand-lg">
                    <a className="navbar-brand logo" href="index.html">
                      <img
                        id="logo-img"
                        className="img-center"
                        src="/assets/images/logo.png"
                        alt=""
                      />
                    </a>
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-toggle="collapse"
                      data-target="#navbarNavDropdown"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      {' '}
                      <span></span>
                      <span></span>
                      <span></span>
                    </button>
                    <div
                      className="collapse navbar-collapse"
                      id="navbarNavDropdown"
                    >
                      <ul
                        id="main-menu"
                        className="nav navbar-nav ml-auto mr-auto"
                      >
                        <li className="nav-item">
                          {' '}
                          <a href="/" className="nav-link active">
                            Home
                          </a>
                        </li>

                        <li className="nav-item">
                          <a href="/aboutus" className="nav-link">
                            About Us
                          </a>
                        </li>

                        <li className="nav-item">
                          {' '}
                          <a className="nav-link" href="/plans">
                            Plans
                          </a>
                        </li>

                        <li className="nav-item">
                          {' '}
                          <a className="nav-link" href="/contact">
                            Contact Us
                          </a>
                        </li>
                      </ul>
                    </div>

                    {currentuser ? (
                      currentuser.userType === 1 ? (
                        <a
                          href="/admin/dashboard"
                          className="btn btn-theme btn-sm"
                          data-text={`Admin ${currentuser.firstname.charAt(
                            0
                          )}${currentuser.lastname.charAt(0)}`}
                        >
                          <span> {currentuser.email} </span>
                        </a>
                      ) : (
                        <a
                          href="/user/dashboard"
                          className="btn btn-theme btn-sm"
                          data-text={`Dashboard ${currentuser.firstname.charAt(
                            0
                          )}${currentuser.lastname.charAt(0)}`}
                        >
                          <span> {currentuser.email} </span>
                        </a>
                      )
                    ) : (
                      <a
                        href="/auth/signin"
                        className="btn btn-theme btn-sm"
                        data-text="Login"
                      >
                        {' '}
                        <span>L</span>
                        <span>o</span>
                        <span>g</span>
                        <span>i</span>
                        <span>n</span>
                      </a>
                    )}
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </Fragment>
  );
};

export default Header;
