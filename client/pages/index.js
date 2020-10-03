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
          {/* <section className="fullscreen-banner banner p-0">
            <div className="align-center pt-0">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-6 col-md-12 img-side text-center">
                    <img
                      className="img-center"
                      src="https://media.istockphoto.com/photos/black-woman-with-saving-piggy-bank-picture-id1040557610?k=6&m=1040557610&s=170667a&w=0&h=frWSb1j3cGsZGwXvCj_1Uoq170ZuoctGMTDbemGcy-A="
                      alt=""
                    />
                  </div>
                  <div className="col-lg-6 col-md-12 ml-auto md-mt-5 md-mb-7">
                    <h1
                      className="mb-4 font-weight-normal wow fadeInUp title text-theme"
                      data-wow-duration="1.5s"
                    >
                      Landlord no <br />
                      go shame us....
                    </h1>
                    <p
                      className="lead mb-4 wow fadeInUp"
                      data-wow-duration="2s"
                      data-wow-delay="0.3s"
                    >
                      We provide flexible options for you to save towards your
                      rent, mortgage or outright purchase of properties. <br />
                      To Save & Invest
                    </p>
                    <a href="/auth/signin" className="btn btn-theme">
                      CREATE FREE ACCOUNT
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section> */}

          <section className="fullscreen-banner banner p-0 grediant-bg">
            <div className="h-100" data-bg-img="/assets/images/bg/07.png">
              <div className="align-center pt-0">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-lg-7 col-md-12 order-lg-12">
                      <div
                        className="owl-carousel owl-theme no-pb"
                        data-dots="false"
                        data-items="1"
                        data-autoplay="true"
                      >
                        <div className="item">
                          <div className="img-box">
                            <div className="box-loader">
                              {' '}
                              <span></span>
                              <span></span>
                              <span></span>
                            </div>
                            <img
                              className="img-center"
                              src="https://media.istockphoto.com/photos/black-woman-with-saving-piggy-bank-picture-id1040557610?k=6&m=1040557610&s=170667a&w=0&h=frWSb1j3cGsZGwXvCj_1Uoq170ZuoctGMTDbemGcy-A="
                              alt=""
                            ></img>
                          </div>
                        </div>
                        <div className="item">
                          <div className="img-box">
                            <div className="box-loader">
                              {' '}
                              <span></span>
                              <span></span>
                              <span></span>
                            </div>
                            <img
                              className="img-center"
                              src="https://image.shutterstock.com/image-photo/african-american-woman-saving-money-260nw-1156100959.jpg"
                              alt=""
                            ></img>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-5 col-md-12 md-mt-5 order-lg-1">
                      <h1
                        className="mb-4 text-white wow fadeInUp"
                        data-wow-duration="1.5s"
                      >
                        {' '}
                        Landlord no <br />
                        go shame us....
                      </h1>
                      <p
                        className="lead mb-5 text-white wow fadeInUp"
                        data-wow-duration="2s"
                        data-wow-delay="0.3s"
                      >
                        {' '}
                        We provide flexible options for you to save towards your
                        rent, mortgage or outright purchase of properties.{' '}
                        <br />
                        To Save & Invest
                      </p>
                      <div className="video-box">
                        <div className="video-btn heartbeat">
                          {' '}
                          <a
                            className="play-btn popup-youtube"
                            href="https://www.youtube.com/watch?v=P_wKDMcr1Tg"
                          >
                            <i className="la la-play"></i>
                          </a>
                          <div className="spinner-eff">
                            <div className="spinner-circle circle-1"></div>
                            <div className="spinner-circle circle-2"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <svg
              className="wave-animation"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 24 150 28"
              preserveAspectRatio="none"
            >
              <defs>
                <path
                  id="gentle-wave"
                  d="M-160 44c30 0 
    58-18 88-18s
    58 18 88 18 
    58-18 88-18 
    58 18 88 18
    v44h-352z"
                />
              </defs>
              <g className="wave-bg">
                <use
                  xlinkHref="#gentle-wave"
                  x="50"
                  y="0"
                  fill="rgba(237,251,233,0.2)"
                />
                <use
                  xlinkHref="#gentle-wave"
                  x="50"
                  y="3"
                  fill="rgba(255,204,112,0.2)"
                />
                <use xlinkHref="#gentle-wave" x="50" y="6" fill="#ffffff" />
              </g>
            </svg>
          </section>

          <div className="page-content">
            <section className="text-center pos-r">
              <div className="container">
                <div className="row">
                  <div className="col-lg-8 col-md-12 ml-auto mr-auto">
                    <div className="section-title">
                      <div className="title-effect title-effect-2">
                        <div className="ellipse"></div>{' '}
                        <i className="la la-cubes"></i>
                      </div>
                      <h2 className="title text-theme">
                        Our Exciting feature And Service
                      </h2>
                      <p>
                        You can also save for other purposes Whatever your
                        saving goals, we have attractive saving plans to meet
                        your needs.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="container">
                  <div className="row mt-5">
                    <div className="col-lg-4 col-md-12">
                      <div className="featured-item style-2">
                        <img
                          className="img-fluid"
                          src="https://storage.googleapis.com/piggybankservice.appspot.com/statics/New-homepage-2.png"
                          alt=""
                        ></img>
                        <div className="featured-title">
                          <h5>Investment opportunities</h5>
                        </div>
                        <div className="featured-desc">
                          <p>
                            Take advantage of periodic investment opportunities
                            in Real Estate. Whatever your budget is, you can own
                            a house. Co-own properties with like minded
                            investors and earn a percentage on rent/sale.
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
                        <img
                          className="img-fluid"
                          src="https://storage.googleapis.com/piggybankservice.appspot.com/statics/New-homepage-3.png"
                          alt=""
                        ></img>

                        <div className="featured-title">
                          <h5>You are in control</h5>
                        </div>
                        <div className="featured-desc">
                          <p>
                            Combine various unique options or stick to one
                            savings plan, the choice is yours.
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
                        <img
                          className="img-fluid"
                          src="https://storage.googleapis.com/piggybankservice.appspot.com/statics/New-homepage-1.png"
                          alt=""
                        ></img>

                        <div className="featured-title">
                          <h5>We are here for your growth</h5>
                        </div>
                        <div className="featured-desc">
                          <p>
                            Monitor and control your progress from our
                            simplified dashboard which helps you take decisive
                            steps on your savings.
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

            <section
              className="dark-bg pos-r o-hidden text-center"
              data-bg-img="images/pattern/03.png"
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 col-md-10 ml-auto mr-auto">
                    <div className="section-title">
                      <h2 className="title">
                        {' '}
                        Start now in 3 easy steps
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="row">
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
                          {' '}
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
            <section className="grey-bg md-pb-15">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 col-md-12 mr-auto">
                    <div className="section-title mb-0">
                      <div className="title-effect title-effect-2">
                        <div className="ellipse"></div>{' '}
                        <i className="la la-sort-numeric-asc"></i>
                      </div>
                      <h2>Number Speak Louder then Word</h2>
                      <p className="lead">
                        Softino Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderi
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="p-0">
              <div className="container custom-mt-20 md-custom-mt-10">
                <div className="row">
                  <div className="col-lg-6 col-md-12 ml-auto">
                    <div
                      className="owl-carousel owl-theme"
                      data-dots="false"
                      data-items="2"
                      data-margin="30"
                      data-autoplay="true"
                    >
                      <div className="item">
                        <div className="counter">
                          <div className="counter-icon">
                            <img
                              className="img-center"
                              src="/assets/counter/01.png"
                              alt=""
                            ></img>
                          </div>
                          <div className="counter-desc">
                            {' '}
                            <span
                              className="count-number"
                              data-to="2304"
                              data-speed="10000"
                            >
                              2304
                            </span>
                            <h5>Project Done</h5>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="counter">
                          <div className="counter-icon">
                            <img
                              className="img-center"
                              src="/assets/counter/02.png"
                              alt=""
                            ></img>
                          </div>
                          <div className="counter-desc">
                            {' '}
                            <span
                              className="count-number"
                              data-to="3585"
                              data-speed="10000"
                            >
                              3585
                            </span>
                            <h5>Success Rate</h5>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="counter">
                          <div className="counter-icon">
                            <img
                              className="img-center"
                              src="/assets/counter/03.png"
                              alt=""
                            ></img>
                          </div>
                          <div className="counter-desc">
                            {' '}
                            <span
                              className="count-number"
                              data-to="1365"
                              data-speed="10000"
                            >
                              1365
                            </span>
                            <h5>Awards</h5>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="counter">
                          <div className="counter-icon">
                            <img
                              className="img-center"
                              src="/assets/counter/04.png"
                              alt=""
                            ></img>
                          </div>
                          <div className="counter-desc">
                            {' '}
                            <span
                              className="count-number"
                              data-to="4328"
                              data-speed="10000"
                            >
                              4328
                            </span>
                            <h5>Happy Client</h5>
                          </div>
                        </div>
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
                                  src="/assets/landing/assets/images/testimonial/dimeji.jpg"
                                  alt=""
                                />
                              </div>
                              <div className="testimonial-content">
                                <div className="testimonial-quote">
                                  <i className="la la-quote-left"></i>
                                </div>
                                <p>
                                Every month, we shine a spotlight on one saver, asking them questions about their savings culture and how the product is specifically helping them shape how they spend and save for future responsibilities.
                                </p>
                                <div className="testimonial-caption">
                                  <h5>Ayodimeji Fasina</h5>
                                  {/* <label>CEO of Redly</label> */}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="carousel-item">
                            <div className="testimonial style-3">
                              <div className="testimonial-img">
                                <img
                                  className="img-center"
                                  src="/assets/landing/assets/images/testimonial/emmanuel.jpg"
                                  alt=""
                                />
                              </div>
                              <div className="testimonial-content">
                                <div className="testimonial-quote">
                                  <i className="la la-quote-left"></i>
                                </div>
                                <p>
                                  PI used to feel too young to start setting money aside, with Cowrywise I have realized it is never too early to get started with your savings. Cowrywise is my coping mechanism to build up for an independent life.
                                </p>
                                <div className="testimonial-caption">
                                  <h5>Emmanuel Aboaja</h5>
                                  {/* <label>CEO of Softino</label> */}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="carousel-item">
                            <div className="testimonial style-3">
                              <div className="testimonial-img">
                                <img
                                  className="img-center"
                                  src="/assets/landing/assets/images/testimonial/paul.jpg"
                                  alt=""
                                />
                              </div>
                              <div className="testimonial-content">
                                <div className="testimonial-quote">
                                  <i className="la la-quote-left"></i>
                                </div>
                                <p>
                                 My experience with Cowrywise in line with my goals has been so far amazing in terms of helping me to know how much to save monthly/weekly to meet my goals target. It feels good knowing my money is been saved and yielding interest as well and not just held up in my bank account falling victim of the schemes of banks. Thank you Cowrywise.
                                </p>
                                <div className="testimonial-caption">
                                  <h5>Paul </h5>
                                  {/* <label>CEO of Softino</label> */}
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
                              src="/assets/landing/assets/images/testimonial/dimeji.jpg"
                              alt=""
                            />
                          </a>
                        </li>
                        <li data-target="#testimonial-3" data-slide-to="1">
                          <a href="#">
                            <img
                              className="img-fluid"
                              src="/assets/landing/assets/images/testimonial/emmanuel.jpg"
                              alt=""
                            />
                          </a>
                        </li>
                        <li data-target="#testimonial-3" data-slide-to="2">
                          <a href="#">
                            <img
                              className="img-fluid"
                              src="/assets/landing/assets/images/testimonial/paul.jpg"
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
