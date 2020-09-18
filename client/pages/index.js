import { Fragment, useEffect } from 'react';
import Layout from '../components/landing/layout';
import SideBar from '../components/user/side-bar';
import Header from '../components/landing/Header';
import Footer from '../components/landing/Footer';
import Router, { useRouter } from 'next/router';
import Skeleton from 'react-loading-skeleton';

const LandingPage = ({ currentuser }) => {
  const router = useRouter();

  const body = () => {
    return (
      <Fragment>
        <div>
          <section className="fullscreen-banner banner p-0">
            <div className="align-center pt-0">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-6 col-md-12 img-side text-center">
                    <img
                      className="img-center"
                      src="https://image.freepik.com/free-vector/effective-manager-earning-money_74855-6381.jpg"
                      alt=""
                    />
                  </div>
                  <div className="col-lg-6 col-md-12 ml-auto md-mt-5 md-mb-7">
                    <h1
                      className="mb-4 font-weight-normal wow fadeInUp"
                      data-wow-duration="1.5s"
                    >
                      The Better Way <br />
                      To Save & Invest
                    </h1>
                    <p
                      className="lead mb-4 wow fadeInUp"
                      data-wow-duration="2s"
                      data-wow-delay="0.3s"
                    >
                      With impressive interest rates, an app, tools & guides,
                      Rentwise is the smartest way to plan, save & invest.
                    </p>
                    <a href="" className="btn btn-theme">
                      CREATE FREE ACCOUNT
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="page-content">
            <section className="text-center pos-r">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 col-md-10 ml-auto mr-auto">
                    <div className="section-title home__row">
                      <div className="title-effect">
                        <div className="bar bar-top"></div>
                        <div className="bar bar-right"></div>
                        <div className="bar bar-bottom"></div>
                        <div className="bar bar-left"></div>
                      </div>
                      <h2 className="title home__textcolor">
                        Invest in bits & on the go!
                      </h2>
                      <p>
                        Many investments are expensive, which makes it hard to
                        get started. <br />
                        At RentWise, you too can invest in tiny & affordable
                        chunks and still enjoy the same return rates in amazing
                        opportunities.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="container">
                  <div className="row mt-5">
                    <div className="col-lg-4 col-md-12">
                      <div className="featured-item style-2">
                        <div className="featured-icon">
                          {' '}
                          <i className="flaticon-data"></i>
                          <span className="rotateme"></span>
                        </div>
                        <div className="featured-title">
                          <h5>Co-invest in opportunities</h5>
                        </div>
                        <div className="featured-desc">
                          <p>
                            Join other PiggyVest users to co-invest in
                            guaranteed fixed income investments & other amazing
                            projects.
                          </p>
                          <a className="icon-btn mt-4" href="#">
                            {' '}
                            <i className="la la-angle-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-12 md-mt-5">
                      <div className="featured-item style-2">
                        <div className="featured-icon">
                          {' '}
                          <i className="flaticon-collaboration"></i>
                          <span className="rotateme"></span>
                        </div>
                        <div className="featured-title">
                          <h5>Decide on what to invest</h5>
                        </div>
                        <div className="featured-desc">
                          <p>
                            You have complete control on the type of investments
                            you want to engage. All opportunities are pre-vetted
                            by PiggyVest.
                          </p>
                          <a className="icon-btn mt-4" href="#">
                            {' '}
                            <i className="la la-angle-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-12 md-mt-5">
                      <div className="featured-item style-2">
                        <div className="featured-icon">
                          {' '}
                          <i className="flaticon-market"></i>
                          <span className="rotateme"></span>
                        </div>
                        <div className="featured-title">
                          <h5>Watch your portfolio grow</h5>
                        </div>
                        <div className="featured-desc">
                          <p>
                            Easily monitor the progress of your investments from
                            your PiggyVest dashboard.
                          </p>
                          <a className="icon-btn mt-4" href="#">
                            {' '}
                            <i className="la la-angle-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="text-center pos-r">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 col-md-10 ml-auto mr-auto">
                    <div className="section-title">
                      <div className="title-effect">
                        <div className="bar bar-top"></div>
                        <div className="bar bar-right"></div>
                        <div className="bar bar-bottom"></div>
                        <div className="bar bar-left"></div>
                      </div>

                      <h2 className="title home__textcolor">
                        Start building wealth in 5 minutes
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div id="svg-container">
                    <svg
                      id="svgC"
                      width="100%"
                      height="100%"
                      viewBox="0 0 620 120"
                      preserveAspectRatio="xMidYMid meet"
                    ></svg>
                  </div>
                  <div className="col-lg-4 col-md-12">
                    <div className="work-process">
                      <div className="box-loader">
                        {' '}
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                      <div className="step-num-box">
                        <div className="step-icon">
                          <span>
                            <i className="la la-lightbulb-o"></i>
                          </span>
                        </div>
                        <div className="step-num">01</div>
                      </div>
                      <div className="step-desc">
                        <h4>Create an account</h4>
                        <p className="mb-0">
                          Sign up for an account with your name, email and phone
                          number.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-12 md-mt-5">
                    <div className="work-process">
                      <div className="box-loader">
                        {' '}
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                      <div className="step-num-box">
                        <div className="step-icon">
                          <span>
                            <i className="la la-rocket"></i>
                          </span>
                        </div>
                        <div className="step-num">02</div>
                      </div>
                      <div className="step-desc">
                        <h4>Add a payment method</h4>
                        <p className="mb-0">
                          Using your debit card, bank account, USSD, QR Code,
                          setup your first plan.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-12 md-mt-5">
                    <div className="work-process">
                      <div className="step-num-box">
                        <div className="step-icon">
                          <span>
                            <i className="la la-check-square"></i>
                          </span>
                        </div>
                        <div className="step-num">03</div>
                      </div>
                      <div className="step-desc">
                        <h4>Watch your money grow</h4>
                        <p className="mb-0">
                          Sit back, relax & let your money work for you all day,
                          everyday.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section
              className="pos-r o-hidden"
              data-bg-img="/assets/landing/assets/images/pattern/01.png"
            />
            <div className="container">
              <div className="row text-center">
                <div className="col-lg-8 col-md-10 ml-auto mr-auto">
                  <div className="section-title">
                    <h2 className="title">
                      You Can See our clients feedback{' '}
                      <span className="text-theme">What You Say?</span>
                    </h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div
                    id="testimonial-3"
                    className="testimonial-carousel carousel slide testimonial-3"
                    data-ride="carousel"
                    data-interval="2500"
                  >
                    <div className="row">
                      <div className="col-lg-10 col-md-9 col-sm-8 ml-auto">
                        <div className="carousel-inner">
                          <div className="carousel-item active">
                            <div className="testimonial style-3">
                              <div className="testimonial-img">
                                <img
                                  className="img-center"
                                  src="/assets/landing/assets/images/testimonial/01.jpg"
                                  alt=""
                                />
                              </div>
                              <div className="testimonial-content">
                                <div className="testimonial-quote">
                                  <i className="la la-quote-left"></i>
                                </div>
                                <p>
                                  Recommended Professional and great experience,
                                  Nam pulvinar vitae neque et porttitor,
                                  Praesent sed nisi eleifend, Consectetur
                                  adipisicing elit, sed do eiusmodas temporo
                                  incididunt Praesent sed nisi eleifend,
                                  Consectetur adipisicing elit,
                                </p>
                                <div className="testimonial-caption">
                                  <h5>Lana Roadse</h5>
                                  <label>CEO of Softino</label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="carousel-item">
                            <div className="testimonial style-3">
                              <div className="testimonial-img">
                                <img
                                  className="img-center"
                                  src="/assets/landing/assets/images/testimonial/02.jpg"
                                  alt=""
                                />
                              </div>
                              <div className="testimonial-content">
                                <div className="testimonial-quote">
                                  <i className="la la-quote-left"></i>
                                </div>
                                <p>
                                  Professional Recommended crofessional and
                                  great experience, Nam pulvinar vitae neque et
                                  porttitor, Praesent sed nisi eleifend,
                                  adipisicing elit, sed do eiusmodas temporo
                                  incididunt Praesent sed nisi eleifend,
                                  Consectetur adipisicing elit,
                                </p>
                                <div className="testimonial-caption">
                                  <h5>Lana Roadse</h5>
                                  <label>CEO of Softino</label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="carousel-item">
                            <div className="testimonial style-3">
                              <div className="testimonial-img">
                                <img
                                  className="img-center"
                                  src="/assets/landing/assets/images/testimonial/03.jpg"
                                  alt=""
                                />
                              </div>
                              <div className="testimonial-content">
                                <div className="testimonial-quote">
                                  <i className="la la-quote-left"></i>
                                </div>
                                <p>
                                  Consectetur Recommended Professional and great
                                  experience, Nam pulvinar vitae neque et
                                  porttitor, Praesent sed nisi eleifend,
                                  adipisicing elitelit, sed do eiusmodas temporo
                                  incididunt Praesent sed nisi eleifend,
                                  Consectetur adipisicing elit,
                                </p>
                                <div className="testimonial-caption">
                                  <h5>Lana Roadse</h5>
                                  <label>CEO of Softino</label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="controls">
                      <ul className="nav">
                        <li
                          data-target="#testimonial-3"
                          data-slide-to="0"
                          className="active"
                        >
                          <a href="#">
                            <img
                              className="img-fluid"
                              src="/assets/landing/assets/images/testimonial/01.jpg"
                              alt=""
                            />
                          </a>
                        </li>
                        <li data-target="#testimonial-3" data-slide-to="1">
                          <a href="#">
                            <img
                              className="img-fluid"
                              src="/assets/landing/assets/images/testimonial/02.jpg"
                              alt=""
                            />
                          </a>
                        </li>
                        <li data-target="#testimonial-3" data-slide-to="2">
                          <a href="#">
                            <img
                              className="img-fluid"
                              src="/assets/landing/assets/images/testimonial/03.jpg"
                              alt=""
                            />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <br />
            <br />
            <br />
          </div>
        </div>
      </Fragment>
    );
  };

  return (
    <Fragment>
      <Layout title="Home" />
      <Header currentuser={currentuser} title="RentWise | Home." />
      {body()}
      <Footer />
    </Fragment>
  );
};

LandingPage.getInitialProps = async (context, client, currentuser) => {};

export default LandingPage;
