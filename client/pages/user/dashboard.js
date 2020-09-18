import { Fragment, useEffect } from 'react';
import Layout from '../../components/layout';
import SideBar from '../../components/user/side-bar';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Router, { useRouter } from 'next/router';
import Skeleton from 'react-loading-skeleton';
const UserDashbaordLandingPage = ({ currentuser }) => {
  const router = useRouter();

  useEffect(() => {
    currentuser && currentuser.userType === 0
      ? ''
      : Router.push('/auth/signin');
  }, []);

  const body = () => {
    return (
      <Fragment>
        <div className="nk-content nk-content-fluid">
          <div className="container-xl wide-lg">
            <div className="nk-content-body">
              <div className="nk-block-head">
                <div className="nk-block-head-sub">
                  <span>Total Balance</span>
                </div>

                <div className="nk-block-between-md g-4">
                  <div className="nk-block-head-content">
                    <h3 className="nk-block-title fw-normal">
                      ₦ <strong>0</strong>.00
                    </h3>
                    <div className="nk-block-des"></div>
                  </div>
                </div>
              </div>

              <h2 className="nk-block-title title" style={{ color: '#7f8dff' }}>
                Get Started
              </h2>

              <div className="nk-block nk-block-lg">
                <div className="container text-center my-3">
                  <div className="row mx-auto my-auto">
                    <div
                      id="recipeCarousel"
                      className="carousel slide w-100"
                      data-ride="carousel"
                    >
                      <div className="carousel-inner w-100" role="listbox">
                        <div className="carousel-item active">
                          <div className="col-md-4">
                            <div className="card card-body">
                              <a href="html/plan.html">
                                <div
                                  className="card bg-light"
                                  style={{
                                    backgroundColor: 'white!important',
                                    borderRadius: '10px',
                                    border: '1px solid #c4cefe',
                                    marginBottom: '5px',
                                    height: '25%',
                                    width: '100%',
                                  }}
                                >
                                  <div className="card-inner">
                                    <h5 className="card-title">
                                      <img
                                        src="/assets/newsavings.svg"
                                        alt="image2"
                                        height="40"
                                        width="40"
                                      />
                                    </h5>
                                    <br />

                                    <p className="card-text">New Saving Plan</p>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>

                        <div className="carousel-item">
                          <div className="col-md-4">
                            <div className="card card-body">
                              <a href="html/goals.html">
                                <div
                                  className="card bg-light"
                                  style={{
                                    backgroundColor: 'white!important',
                                    borderRadius: '10px',
                                    border: '1px solid #c4cefe',
                                    marginBottom: '5px',
                                    height: '25%',
                                    width: '100%',
                                  }}
                                >
                                  <div className="card-inner">
                                    <h5 className="card-title">
                                      <img
                                        src="/assets/goals.svg"
                                        alt="image2"
                                        height="40"
                                        width="40"
                                      />
                                    </h5>
                                    <br />

                                    <p className="card-text">
                                      Create Life Goals
                                    </p>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>

                        <div className="carousel-item">
                          <div className="col-md-4">
                            <div className="card card-body">
                              <a href="html/mutualfriends.html">
                                <div
                                  className="card bg-light"
                                  style={{
                                    backgroundColor: 'white!important',
                                    borderRadius: '10px',
                                    border: '1px solid #c4cefe',
                                    marginBottom: '5px',
                                    height: '25%',
                                    width: '100%',
                                  }}
                                >
                                  <div className="card-inner">
                                    <h5 className="card-title">
                                      <img
                                        src="/assets/mutual.svg"
                                        style={{ color: 'blue!important' }}
                                        alt="image2"
                                        height="40"
                                        width="40"
                                      />
                                    </h5>
                                    <br />

                                    <p className="card-text">
                                      Invest with Mutual Friends
                                    </p>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>

                        <div className="carousel-item">
                          <div className="col-md-4">
                            <div className="card card-body">
                              <a href="html/emergencyfunds.html">
                                <div
                                  className="card bg-light"
                                  style={{
                                    backgroundColor: 'white!important',
                                    borderRadius: '10px',
                                    border: '1px solid #c4cefe',
                                    marginBottom: '5px',
                                    height: '25%',
                                    width: '100%',
                                  }}
                                >
                                  <div className="card-inner">
                                    <h5 className="card-title">
                                      <img
                                        src="/assets/emergencyfunds.svg"
                                        alt="image2"
                                        height="40"
                                        width="40"
                                      />
                                    </h5>
                                    <br />

                                    <p className="card-text">
                                      Build Emergency Funds
                                    </p>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      <a
                        className="carousel-control-prev w-auto"
                        href="#recipeCarousel"
                        role="button"
                        data-slide="prev"
                      >
                        <span
                          className="carousel-control-prev-icon"
                          style={{ backgroundColor: '#7f8dff!important' }}
                          aria-hidden="true"
                        ></span>
                        <span className="sr-only">Previous</span>
                      </a>

                      <a
                        className="carousel-control-next w-auto"
                        href="#recipeCarousel"
                        role="button"
                        data-slide="next"
                      >
                        <span
                          className="carousel-control-next-icon"
                          style={{ backgroundColor: '#7f8dff!important' }}
                          aria-hidden="true"
                        ></span>
                        <span className="sr-only">Next</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="nk-block nk-block-lg"></div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  };

  return currentuser ? (
    <Fragment>
      <Layout title="Landing Page" title="Account Overview" />
      <body className="nk-body npc-crypto bg-white has-sidebar ">
        <div className="nk-app-root">
          <div className="nk-main">
            <SideBar />

            <div className="nk-wrap ">
              <Header currentuser={currentuser} title="Account Overview" /> {/* Content Main */}
              <div className="nk-content nk-content-fluid">{body()}</div>
              {/* Content Main */}
              {/* Footer */}
              <Footer /> {/* Footer */}{' '}
            </div>
          </div>
        </div>
      </body>
      {/* {
        currentuser && currentuser.userType === 0 ? <h1>You are signed in</h1> : <h1>You are not signed in</h1>
    }  */}{' '}
    </Fragment>
  ) : (
    <Skeleton height={40} count={5} />
  );
};

UserDashbaordLandingPage.getInitialProps = async (
  context,
  client,
  currentuser
) => {};

export default UserDashbaordLandingPage;
