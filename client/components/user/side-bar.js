import Link from 'next/link';
import {Fragment} from 'react';


const SideBar = ({currentuser}) => {
    return (
        <Fragment>

<div className="nk-sidebar nk-sidebar-fixed " data-content="sidebarMenu">
        <div className="nk-sidebar-element nk-sidebar-head">
          <div className="nk-sidebar-brand">
            <Link href="/">
            <a className="logo-link nk-sidebar-logo">
              <img
                className="logo-light logo-img"
                src="/assets/images/logo.png"
                srcSet="/assets/images/logo2x.png 2x"
                alt="logo"
              />
              <img
                className="logo-dark logo-img"
                src="/assets/images/logo-dark.png"
                srcSet="/assets/images/images/logo-dark2x.png 2x"
                alt="logo-dark"
              />
            </a>
            </Link>
          </div>
          <div className="nk-menu-trigger mr-n2"></div>
        </div>
        <div className="nk-sidebar-element">
          <div className="nk-sidebar-body" data-simplebar>
            <div className="nk-sidebar-content">
              <div className="nk-sidebar-widget d-none d-xl-block"></div>
              <div className="nk-sidebar-widget nk-sidebar-widget-full d-xl-none pt-0"></div>

              <div className="nk-sidebar-menu">
                <ul className="nk-menu">
                  

                  <li className="nk-menu-item">
                  <Link href="/user/dashboard">
                    <a  href="/user/dashboard" className="nk-menu-link">
                      <span className="nk-menu-icon">
                        <em className="icon ni ni-dashboard"></em>
                      </span>
                      <span className="nk-menu-text">Home</span>
                    </a>
                    </Link>
                  </li>

                  <li className="nk-menu-item">
                  <Link href="/user/plans">
                    <a  href="/user/plans" className="nk-menu-link">
                      <span className="nk-menu-icon">
                        <em className="icon ni ni-report-profit"></em>
                      </span>
                      <span className="nk-menu-text">Plans</span>
                    </a>
                    </Link>
                  </li>

                  <li className="nk-menu-item">
                
                    <a k href="/user/profile" className="nk-menu-link">
                      <span className="nk-menu-icon">
                        <em className="icon ni ni-user-c"></em>
                      </span>
                      <span className="nk-menu-text">My Account</span>
                    </a>
                  </li>

                  <li className="nk-menu-item">
                    <a href="html/history.html" className="nk-menu-link">
                      <span className="nk-menu-icon">
                        <em className="icon ni ni-histroy"></em>
                      </span>
                      <span className="nk-menu-text">History</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

        </Fragment>
    )


}

export default SideBar;
