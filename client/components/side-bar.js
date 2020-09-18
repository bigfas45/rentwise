import Link from 'next/link';
import { Fragment } from 'react';

const SideBar = ({ currentuser }) => {
  return (
    <Fragment>
      <div className="nk-sidebar nk-sidebar-fixed " data-content="sidebarMenu">
        <div className="nk-sidebar-element nk-sidebar-head">
          <div className="nk-sidebar-brand">
            <a
              href="html/crypto/index.html"
              className="logo-link nk-sidebar-logo"
            >
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
                    <li className="nk-menu-item">
                      <Link href="/admin/dashboard">
                        <a className="nk-menu-link">
                          <span className="nk-menu-icon">
                            <em className="icon ni ni-home"></em>
                          </span>
                          <span className="nk-menu-text">Dashboard</span>
                        </a>
                      </Link>
                    </li>
                  </li>

                  <li className="nk-menu-item has-sub">
                    <Link href="/admin/user/user-list">
                      <a className="nk-menu-link nk-menu-toggle">
                        <span className="nk-menu-icon">
                          <em className="icon ni ni-users"></em>
                        </span>
                        <span className="nk-menu-text">User Manage</span>
                      </a>
                    </Link>
                    <ul className="nk-menu-sub">
                      <li className="nk-menu-item">
                        <Link href="/admin/user/user-list">
                          <a
                            href="admin/packages_list.php"
                            className="nk-menu-link"
                          >
                            <span className="nk-menu-text">User Manage</span>
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nk-menu-item has-sub">
                    <Link href="/admin/plan/create-plan">
                      <a className="nk-menu-link nk-menu-toggle">
                        <span className="nk-menu-icon">
                          <em className="icon ni ni-file-docs"></em>
                        </span>
                        <span className="nk-menu-text"> Plans</span>
                      </a>
                    </Link>
                    <ul className="nk-menu-sub">
                      <li className="nk-menu-item">
                        <Link href="/admin/plan/create-plan">
                          <a className="nk-menu-link">
                            <span className="nk-menu-text">Plan List</span>
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nk-menu-item has-sub">
                    <Link href="/admin/plan/subscriptions">
                      <a href="#" className="nk-menu-link nk-menu-toggle">
                        <span className="nk-menu-icon">
                          <em className="icon ni ni-tranx"></em>
                        </span>
                        <span className="nk-menu-text">Transactions</span>
                      </a>
                    </Link>
                    <ul className="nk-menu-sub">
                      <li className="nk-menu-item">
                        <Link href="/admin/plan/subscriptions">
                          <a
                            href="admin/savings_history.php"
                            className="nk-menu-link"
                          >
                            <span className="nk-menu-text">
                              Savings History
                            </span>
                          </a>
                        </Link>
                      </li>
                      {/* <li className="nk-menu-item">
                        <a
                          href="admin/withdrawal_history.php"
                          className="nk-menu-link"
                        >
                          <span className="nk-menu-text">
                            Withdrawal History
                          </span>
                        </a>
                      </li> */}
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SideBar;
