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
        <section id="content">
          <div>
            <div class="row  align-content-stretch no-gutters topmargin section-mobile">
              <div
                class="col-md-6 order-md-2"
                style={{
                  background:
                    "url('/demos/real-estate/images/hero/3.jpg') center center / cover",
                  minHeight: '300px',
                }}
              ></div>

              <div
                class="col-md-6 order-md-1"
                style={{ backgroundColor: '#0066f5' }}
              >
                <div class="section-features">
                  <h2
                    class="mb-3 h4 font-weight-bold"
                    style={{ color: 'white' }}
                  >
                    Flexible plans and attractive interest rates
                  </h2>
                  <p
                    class="h6 font-weight-normal mb-5"
                    style={{ color: 'white' }}
                  >
                    {' '}
                    Whatever your goals, short term or long term, we got you
                    covered with great returns on savings. Consider us the
                    savings platform with investment benefits
                  </p>

                  <h2
                    class="mb-3 h4 font-weight-bold"
                    style={{ color: 'white' }}
                  >
                    All your housing solutions in one place
                  </h2>
                  <p class="h6 font-weight-normal" style={{ color: 'white' }}>
                    <ul>
                      <li>Savings – Various savings plans to choose from</li>
                      <li>Loans – Get a loan to cover your housing needs</li>
                      <li>
                        Mortgage – Own your house with just 20% down payment
                      </li>
                      <li>
                        Rent2Own – Pay rent over a period and a lump sum to own
                        properties
                      </li>
                    </ul>
                  </p>

                  <h2
                    class="mb-3 h4 font-weight-semibold"
                    style={{ color: 'white' }}
                  >
                    Completely exploit focused.
                  </h2>
                  <p
                    class="h6 font-weight-normal mb-0"
                    style={{ color: 'white' }}
                  >
                    Continually enable leveraged users after functional
                    web-readiness. Interactively conceptualize accurate
                    resources whereas distinctive e-markets.
                  </p>
                </div>
              </div>
            </div>
            <div class="clear"></div>
            <div class="section bg-transparent mb-0 pb-0 border-0 ">
              <div class="container bg-color-light border-0 rounded-lg p-4 p-md-5">
                <div class="row justify-content-between align-items-center bottommargin-sm">
                  <div class="col-lg-7 col-sm-7">
                    <div class="heading-block border-bottom-0 mb-3">
                      <h2 style={{ color: '#022b69' }}>
                        Start saving in 5 minutes
                      </h2>
                    </div>
                    <p
                      class="font-weight-semibold mb-0"
                      style={{ color: '#022b69' }}
                    >
                      Save for your rent, mortgage, rent2own schemes or any
                      purpose
                    </p>
                  </div>
                </div>
                <div class="clear"></div>
                <div class="row justify-content-around">
                  <div class="col-lg-3 col-md-4 mt-5">
                    <div class="feature-text">
                      <div class="fbox-text color">1.</div>
                      <h3
                        class="font-weight-semibold"
                        style={{ color: '#022b69' }}
                      >
                        Create an account.
                      </h3>
                    </div>
                    <p
                      class="font-weight-semibold"
                      style={{ color: '#436290' }}
                    >
                      Sign up for an account with your name, email and phone
                      number.
                    </p>
                  </div>
                  <div class="col-lg-3 col-md-4 mt-5">
                    <div class="feature-text">
                      <div class="fbox-text color">2.</div>
                      <h3
                        class="font-weight-semibold"
                        style={{ color: '#022b69' }}
                      >
                        Fund your account using your debit card
                      </h3>
                    </div>
                    <p
                      class="font-weight-semibold"
                      style={{ color: '#436290' }}
                    >
                      Using your debit card, bank account, USSD, QR Code, setup
                      your first plan.
                    </p>
                  </div>
                  <div class="col-lg-3 col-md-4 mt-5">
                    <div class="feature-text">
                      <div class="fbox-text color">3.</div>
                      <h3
                        class="font-weight-semibold"
                        style={{ color: '#022b69' }}
                      >
                        {' '}
                        Get attractive interest rates on your savings.
                      </h3>
                    </div>
                    <p
                      class="font-weight-semibold"
                      style={{ color: '#436290' }}
                    >
                      Sit back, relax & let your money work for you all day,
                      everyday.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* here */}

            <div class="section border-0 bg-transparent mb-1">
              <div class="container">
                <div class="row justify-content-between align-items-end bottommargin">
                  <div class="col-md-7">
                    <div class="heading-block border-bottom-0 mb-3">
                      <h2 class="font-weight-bold" style={{ color: '#022b69' }}>
                        Our Exciting feature And Service
                      </h2>
                    </div>
                    <p
                      class="font-weight-normal mb-0"
                      style={{ color: '#022b69' }}
                    >
                      You can also save for other purposes Whatever your saving
                      goals, we have attractive saving plans to meet your needs.
                    </p>
                  </div>
                  <div class="col-md-5 d-flex flex-row justify-content-md-end mt-4 mt-md-0"></div>
                </div>

                <div class="row">
                  <div class="col-lg-4 col-sm-6 mb-4">
                    <div class="i-products">
                      <div class="products-image">
                        <a href="#l">
                          <img
                            src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F962178478%2F960x0.jpg%3Ffit%3Dscale"
                            alt="Image 1"
                          />
                          <span class="badge">Investment opportunities</span>
                        </a>
                      </div>
                      <div class="products-desc">
                        <h3>
                          <a
                            href="#"
                            class="font-weight-bold mb-0"
                            style={{ color: '#022b69' }}
                          >
                            Investment opportunities
                          </a>
                        </h3>
                        <p
                          class="font-weight-normal"
                          style={{ color: '#436290' }}
                        >
                          Take advantage of periodic investment opportunities in
                          Real Estate. Whatever your budget is, you can own a
                          house. Co-own properties with like minded investors
                          and earn a percentage on rent/sale.
                        </p>
                        <div class="clear"></div>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-4 col-sm-6 mb-4">
                    <div class="i-products">
                      <div class="products-image">
                        <a href="#">
                          <img
                            src="demos/crowdfunding/images/items/2.jpg"
                            alt="Image 2"
                          />
                          <span class="badge">You are in control</span>
                        </a>
                      </div>
                      <div class="products-desc">
                        <h3>
                          <a
                            href="#"
                            class="font-weight-bold mb-0"
                            style={{ color: '#022b69' }}
                          >
                            You are in control
                          </a>
                        </h3>
                        <p
                          class="font-weight-normal"
                          style={{ color: '#436290' }}
                        >
                          Combine various unique options or stick to one savings
                          plan, the choice is yours.
                        </p>
                        <div class="clear"></div>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-4 col-sm-6 mb-4">
                    <div class="i-products">
                      <div class="products-image">
                        <a href="#l">
                          <img
                            src="https://media.istockphoto.com/photos/miniature-house-on-a-financial-graph-picture-id1179975591?k=6&m=1179975591&s=612x612&w=0&h=BZJmj5cmumeuuoSDehEvCnjys-W-bCcEr1Mvd0dV6Ag="
                            alt="Image 3"
                          />
                          <span class="badge">We are here for your growth</span>
                        </a>
                      </div>
                      <div class="products-desc">
                        <h3>
                          <a
                            href="#"
                            class="font-weight-bold mb-0"
                            style={{ color: '#022b69' }}
                          >
                            We are here for your growth
                          </a>
                        </h3>
                        <p
                          class="font-weight-normal"
                          style={{ color: '#436290' }}
                        >
                          Monitor and control your progress from our simplified
                          dashboard which helps you take decisive steps on your
                          savings.
                        </p>
                        <div class="clear"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="clear"></div>
          </div>
        </section>
      </Fragment>
    );
  };

  const LoginModal = () => {
    return (
      <Fragment>
        {/* <!-- Login/Register Modal --> */}
        <div className="modal-register mfp-hide" id="modal-register">
          <div className="card mx-auto" style={{ maxWidth: "400px" }}>
            <div className="card-header py-3 bg-transparent center">
              <h3 className="mb-0 font-weight-normal">Hello, Welcome Back</h3>
            </div>
            <div className="card-body mx-auto p-5">

              <form id="login-form" name="login-form" className="mb-0 row" action="#" method="post">

                <div className="col-12">
                  <input type="text" id="login-form-username" name="login-form-username" value="" className="form-control not-dark" placeholder="Username" />
                </div>

                <div className="col-12 mt-4">
                  <input type="password" id="login-form-password" name="login-form-password" value="" className="form-control not-dark" placeholder="Password" />
                </div>

                <div className="col-12 text-right mt-2">
                  <a href="#" className="text-dark font-weight-light text-smaller">Forgot Password?</a>
                </div>

                <div className="col-12 mt-4">
                  <button className="button btn-block m-0" id="login-form-submit" name="login-form-submit" value="login">Login</button>
                </div>
              </form>
            </div>
            <div className="card-footer py-4 center">
              <p className="mb-0">Don't have an account? <a href="#"><u>Sign up</u></a></p>
            </div>
          </div>
        </div>
      </Fragment>
    )
  };

  const slide = () => {
    return (
      <Fragment>
        <section
          id="slider"
          class="slider-element min-vh-100 include-header"
          style={{
            background:
              "url('/demos/crowdfunding/images/hero.svg') no-repeat center bottom / cover",
          }}
        >
          <div class="slider-inner">
            <div class="vertical-middle">
              <div class="container py-5">
                <div class="row">
                  <div class="col-lg-6 col-md-8">
                    <div class="slider-title">
                      <h1 class="font-weight-bold">
                        {' '}
                        <h1 style={{ color: '#022b69' }}>
                          Housing solution
                          <br /> made easy
                        </h1>
                      </h1>
                      <h4
                        class="font-weight-semibold"
                        style={{ color: '#436290' }}
                      >
                        We provide flexible options for you to save towards your
                        rent, mortgage or outright purchase of properties.We
                        also give loans to cover for housing needs
                      </h4>
                    </div>
                    {/* <a
                      href="/auth/signin"
                      data-lightbox="inline"
                      class="button button-large font-weight-semibold button-rounded ls0 nott ml-0"
                    >
                      Start A Plan
                    </a> */}
                    <div>
                      <a href="#">
                        <img
                          src="/appstore.png"
                          alt="Image"
                          height="54"
                          class="mt-3"
                        />
                      </a>
                      <a href="#">
                        <img
                          src="/googleplay.png"
                          alt="Image"
                          class="ml-xl-3 ml-lg-1 mt-3 ml-0 "
                          height="54"
                        />
                      </a>
                    </div>

                    <br />
                  </div>
                </div>
              </div>
            </div>
            <img
              src="/demos/real-estate/images/hero/4.jpg"
              alt=""
              class="slider-img parallax"
              data-start="margin-top: 0px;"
              data-400="margin-top: 50px;"
            />
          </div>
        </section>
      </Fragment>
    );
  };

  const downloadAppTemp = () => {
    return (
      <Fragment>
        {/* <!-- Download App Section
				============================================= --> */}
        <div
          class="section py-md-0 section-mobile bg-color-2"
          style={{
            background:
              "url('demos/covid-care/images/illustration/bg-pattern.svg') no-repeat center left / contain",
          }}
        >
          <div class="container">
            <div class="row align-items-center justify-content-between">
              <div class="col-lg-5 col-md-6 py-5 py-lg-0">
                <h3 class="display-3 color font-weight-normal font-display mb-5">
                  Download Our Rentwise mobile App.
                </h3>
                <p class="text-large color">
                  Progressively strategize just in time scenarios and compelling
                  results. Intrinsicly parallel task extensive systems whereas
                  distinctive catalysts for scenarios and compelling results
                  change.
                </p>
                <div>
                  <a href="#">
                    <img
                      src="/appstore.png"
                      alt="Image"
                      height="54"
                      class="mt-3"
                    />
                  </a>
                  <a href="#">
                    <img
                      src="/googleplay.png"
                      alt="Image"
                      class="ml-xl-3 ml-lg-1 mt-3 ml-0 "
                      height="54"
                    />
                  </a>
                </div>
              </div>

              <div class="col-lg-6 col-md-6 mt-5 mt-sm-0">
                <div class="d-none d-lg-flex">
                  <img
                    src="demos/covid-care/images/iphone-2.png"
                    class="fast"
                    alt="Image"
                    style={{ height: '600px' }}
                    data-animate="fadeInUp"
                    data-delay="200"
                  />
                  <img
                    src="demos/covid-care/images/iphone-1.png"
                    class="fast"
                    alt="Image"
                    style={{ height: '600px' }}
                    data-animate="fadeInUp"
                  />
                </div>
                <img
                  src="demos/covid-care/images/iphone.png"
                  alt="Image"
                  class="d-block d-lg-none px-5 px-sm-0 p-md-5"
                />
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <html dir="ltr" lang="en-US">
        <Layout title="Home"> </Layout>
        <body className="stretched">
          <div id="wrapper" className="clearfix">
            <Header currentuser={currentuser} title="RentWise | Home." />
            {LoginModal()}
            {slide()}
            {body()}
            {downloadAppTemp()}
            <Footer />
          </div>
        </body>
      </html>
    </Fragment>
  );
};

LandingPage.getInitialProps = async (context, client, currentuser) => {};

export default LandingPage;
