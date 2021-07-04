import { Fragment, useEffect, useState } from 'react';
import Layout from '../components/landing/layout';
import SideBar from '../components/user/side-bar';
import Header from '../components/landing/Header';
import Footer from '../components/landing/Footer';
import Router, { useRouter } from 'next/router';
import Skeleton from 'react-loading-skeleton';
import ProdctCom from '../components/ProductCom';
import useRequest from '../hooks/use-request';


const LandingPage = ({ currentuser }) => {
  const router = useRouter();

  const body = () => {
    return (
      <Fragment>
        <section id="content" style={{ marginBottom: '-100px' }}>
          <div>
            <div className="clear"></div>
            <div
              className="section border-0 bg-transparent"
              style={{ marginBottom: '-60px' }}
            >
              <div className="header" style={{ textAlign: 'center' }}>
                <h1 className="font-weight-bold" style={{ color: '#022b69' }}>
                  Our Plans And Service
                </h1>
              </div>
              <div className="container">
                <div className="row justify-content-between align-items-end bottommargin">
                  <div className="col-sm-4">
                    <ProdctCom
                      img="https://img.freepik.com/free-photo/close-up-view-hand-man-placing-coin-into-slot-piggy-bank-savings-investment-concept_1391-160.jpg?size=626&ext=jpg"
                      title="Savings"
                      content="Whatever your goals, short term or long term, we got you
                    covered with great returns on savings. "
                      type="Find a saving Plan"
                      link={`/plans`}
                    />
                  </div>
                  <div className="col-md-4">
                    <ProdctCom
                      img="/demos/real-estate/images/hero/4.jpg"
                      title="Mortgage"
                      content="Affordable mortgage option with just 20% down payment. Rent2own schemes. Monthly rental options "
                      type="Find a Mortgage Plan"
                      link={`/plans`}
                    />
                  </div>
                  <div className="col-md-4">
                    <ProdctCom
                      img="https://media.gettyimages.com/photos/loan-text-written-on-wooden-block-with-stacked-coins-picture-id955530262?s=612x612"
                      title="Loan"
                      content={`Get loans to pay for your rent at low interest rates. Flexible payback options. 6 – 12 months duration`}
                      type="Apply For Loan"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="section bg-transparent mb-0 pb-0 border-0 ">
              <div className="container bg-color-light border-0 rounded-lg p-4 p-md-5">
                <div className="row justify-content-between align-items-center bottommargin-sm">
                  <div className="col-lg-7 col-sm-7">
                    <div className="heading-block border-bottom-0 mb-3">
                      <h2 style={{ color: '#022b69' }}>
                        Start saving in 5 minutes
                      </h2>
                    </div>
                    <p
                      className="font-weight-semibold mb-0"
                      style={{ color: '#022b69' }}
                    >
                      Save for your rent, mortgage, rent2own schemes or any
                      purpose
                    </p>
                  </div>
                </div>
                <div className="clear"></div>
                <div className="row justify-content-around">
                  <div className="col-lg-3 col-md-4 mt-5">
                    <div className="feature-text">
                      <div className="fbox-text color">1.</div>
                      <h3
                        className="font-weight-semibold"
                        style={{ color: '#022b69' }}
                      >
                        Create an account.
                      </h3>
                    </div>
                    <p
                      className="font-weight-semibold"
                      style={{ color: '#436290' }}
                    >
                      Sign up for an account with your name, email and phone
                      number.
                    </p>
                  </div>
                  <div className="col-lg-3 col-md-4 mt-5">
                    <div className="feature-text">
                      <div className="fbox-text color">2.</div>
                      <h3
                        className="font-weight-semibold"
                        style={{ color: '#022b69' }}
                      >
                        Fund your account using your debit card
                      </h3>
                    </div>
                    <p
                      className="font-weight-semibold"
                      style={{ color: '#436290' }}
                    >
                      Using your debit card, bank account, USSD, QR Code, setup
                      your first plan.
                    </p>
                  </div>
                  <div className="col-lg-3 col-md-4 mt-5">
                    <div className="feature-text">
                      <div className="fbox-text color">3.</div>
                      <h3
                        className="font-weight-semibold"
                        style={{ color: '#022b69' }}
                      >
                        {' '}
                        Get attractive interest rates on your savings.
                      </h3>
                    </div>
                    <p
                      className="font-weight-semibold"
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

            <div className="section border-0 bg-transparent mb-1">
              <div className="container">
                <div className="row justify-content-between align-items-end bottommargin">
                  <div className="col-md-7">
                    <div className="heading-block border-bottom-0 mb-3">
                      <h2
                        className="font-weight-bold"
                        style={{ color: '#022b69' }}
                      >
                        Our Exciting feature And Service
                      </h2>
                    </div>
                    <p
                      className="font-weight-normal mb-0"
                      style={{ color: '#022b69' }}
                    >
                      You can also save for other purposes Whatever your saving
                      goals, we have attractive saving plans to meet your needs.
                    </p>
                  </div>
                  <div className="col-md-5 d-flex flex-row justify-content-md-end mt-4 mt-md-0"></div>
                </div>

                <div className="row">
                  <div className="col-lg-4 col-sm-6 mb-4">
                    <div className="i-products">
                      <div className="products-image">
                        <a href="#l">
                          <img
                            src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F962178478%2F960x0.jpg%3Ffit%3Dscale"
                            alt="Image 1"
                          />
                          <span className="badge">
                            Investment opportunities
                          </span>
                        </a>
                      </div>
                      <div className="products-desc">
                        <h3>
                          <a
                            href="#"
                            className="font-weight-bold mb-0"
                            style={{ color: '#022b69' }}
                          >
                            Investment opportunities
                          </a>
                        </h3>
                        <p
                          className="font-weight-normal"
                          style={{ color: '#436290' }}
                        >
                          Take advantage of periodic investment opportunities in
                          Real Estate. Whatever your budget is, you can own a
                          house. Co-own properties with like minded investors
                          and earn a percentage on rent/sale.
                        </p>
                        <div className="clear"></div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-sm-6 mb-4">
                    <div className="i-products">
                      <div className="products-image">
                        <a href="#">
                          <img
                            src="demos/crowdfunding/images/items/2.jpg"
                            alt="Image 2"
                          />
                          <span className="badge">You are in control</span>
                        </a>
                      </div>
                      <div className="products-desc">
                        <h3>
                          <a
                            href="#"
                            className="font-weight-bold mb-0"
                            style={{ color: '#022b69' }}
                          >
                            You are in control
                          </a>
                        </h3>
                        <p
                          className="font-weight-normal"
                          style={{ color: '#436290' }}
                        >
                          Combine various unique options or stick to one savings
                          plan, the choice is yours.
                        </p>
                        <div className="clear"></div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-sm-6 mb-4">
                    <div className="i-products">
                      <div className="products-image">
                        <a href="#l">
                          <img
                            src="https://media.istockphoto.com/photos/miniature-house-on-a-financial-graph-picture-id1179975591?k=6&m=1179975591&s=612x612&w=0&h=BZJmj5cmumeuuoSDehEvCnjys-W-bCcEr1Mvd0dV6Ag="
                            alt="Image 3"
                          />
                          <span className="badge">
                            We are here for your growth
                          </span>
                        </a>
                      </div>
                      <div className="products-desc">
                        <h3>
                          <a
                            href="#"
                            className="font-weight-bold mb-0"
                            style={{ color: '#022b69' }}
                          >
                            We are here for your growth
                          </a>
                        </h3>
                        <p
                          className="font-weight-normal"
                          style={{ color: '#436290' }}
                        >
                          Monitor and control your progress from our simplified
                          dashboard which helps you take decisive steps on your
                          savings.
                        </p>
                        <div className="clear"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="clear"></div>
          </div>
        </section>
      </Fragment>
    );
  };


  
  const LoginModal = () => {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [telephone, setTelephone] = useState('');
    const [annualRent, setAnnualRent] = useState('');
    const [salary, setSalary] = useState('');
    const [rentDue, setRentDue] = useState('');
    const [duration, setDuratiom] = useState('');
    

     const [success, setSuccess] = useState('');
     const { doRequest, errors, loading } = useRequest({
       url: '/api/subscription/newletter',
       method: 'post',
       body: {
         email,
       },
       onSuccess: (email) => {
         setSuccess(
           <div className="alert alert-icon alert-success" role="alert">
             <em className="icon ni ni-alert-circle"></em>
             <strong>You requested has been submited </strong>.Cheers!!!.
           </div>
         );
       },
     });

     const onSubmit = async (event) => {
       event.preventDefault();
       doRequest();
     };
    return (
      <Fragment>
        {/* <!-- Login/Register Modal --> */}
        <div className="modal-register mfp-hide" id="modal-register">
          <div className="card mx-auto" style={{ maxWidth: '800px' }}>
            <div className="card-header py-3 bg-transparent center">
              <h3 className="mb-0 font-weight-normal">Loan Application</h3>
            </div>
            <div className="card-body mx-auto p-5">
              <form
                id="login-form"
                name="login-form"
                className="mb-0 row"
                onSubmit={onSubmit}
              >
                <div className="col-12">
                  <input
                    type="text"
                    id="login-form-username"
                    name="login-form-username"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control not-dark"
                    placeholder="Email"
                  />
                </div>
                <div className="clear"></div>
                <br />
                <div className="col-12">
                  <input
                    type="text"
                    id="login-form-name"
                    name="login-form-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control not-dark"
                    placeholder="Full name"
                  />
                </div>
                <div className="clear"></div>
                <br />
                <div className="col-12">
                  <input
                    type="telephone"
                    id="login-form-username"
                    name="login-form-username"
                    value={telephone}
                    onChange={(e) => setTelephone(e.target.value)}
                    className="form-control not-dark"
                    placeholder="Telephone"
                  />
                </div>
                <div className="clear"></div>
                <br />
                <div className="col-12">
                  <input
                    type="number"
                    id="login-form-rent"
                    name="login-form-rent"
                    value={annualRent}
                    onChange={(e) => setAnnualRent(e.target.value)}
                    className="form-control not-dark"
                    placeholder="How much is your annual rent?"
                  />
                </div>
                <div className="clear"></div>
                <br />
                <div className="col-12">
                  <input
                    type="number"
                    id="login-form-salary"
                    name="login-form-salary"
                    value={salary}
                    onChange={(e) => setSalary(e.target.value)}
                    className="form-control not-dark"
                    placeholder="How much is you net monthly salary? "
                  />
                </div>
                <div className="clear"></div>
                <br />
                <div className="col-12">
                  <input
                    type="text"
                    id="login-form-rentDue"
                    name="login-form-rentDue"
                    value={rentDue}
                    onChange={(e) => setRentDue(e.target.value)}
                    className="form-control not-dark"
                    placeholder="When is the rent due for payment"
                  />
                </div>
                <div className="clear"></div>
                <br />
                <div className="col-12">
                  <input
                    type="text"
                    id="login-form-duration"
                    name="login-form-duration"
                    value={duration}
                    onChange={(e) => setDuratiom(e.target.value)}
                    className="form-control not-dark"
                    placeholder="What is the duration? "
                  />
                </div>
                <div className="clear"></div>
                <br />

               

                <div className="col-12 mt-4">
                  <button
                    className="button btn-block m-0"
                    id="login-form-submit"
                    name="login-form-submit"
                    value="login"
                  >
                    Apply
                  </button>
                </div>
              </form>
            </div>
            <div className="card-footer py-4 center">
              <p className="mb-0">
                Don't have an account?{' '}
                <a href="/authsignin">
                  <u>Sign in</u>
                </a>
              </p>
            </div>
          </div>
        </div>
      </Fragment>
    );
  };

  const slide = () => {
    return (
      <Fragment>
        <section
          id="slider"
          className="slider-element min-vh-100 include-header"
          style={{
            background:
              "url('/demos/crowdfunding/images/hero.svg') no-repeat center bottom / cover",
          }}
        >
          <div className="slider-inner">
            <div className="vertical-middle">
              <div className="container py-5">
                <div className="row">
                  <div className="col-lg-6 col-md-8">
                    <div className="slider-title">
                      <h1 className="font-weight-bold">
                        {' '}
                        <h1 style={{ color: '#022b69' }}>
                          Housing solution
                          <br /> made easy
                        </h1>
                      </h1>
                      <h4
                        className="font-weight-semibold"
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
                      className="button button-large font-weight-semibold button-rounded ls0 nott ml-0"
                    >
                      Start A Plan
                    </a> */}
                    <div>
                      <a href="#">
                        <img
                          src="/appstore.png"
                          alt="Image"
                          height="54"
                          className="mt-3"
                        />
                      </a>
                      <a href="#">
                        <img
                          src="/googleplay.png"
                          alt="Image"
                          className="ml-xl-3 ml-lg-1 mt-3 ml-0 "
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
              className="slider-img parallax"
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
          className="section py-md-0 section-mobile bg-color-2"
          style={{
            background:
              "url('demos/covid-care/images/illustration/bg-pattern.svg') no-repeat center left / contain",
          }}
        >
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-lg-5 col-md-6 py-5 py-lg-0">
                <h3 className="display-3 color font-weight-normal font-display mb-5">
                  Download Our Rentwise mobile App.
                </h3>
                <p className="text-large color">
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
                      className="mt-3"
                    />
                  </a>
                  <a href="#">
                    <img
                      src="/googleplay.png"
                      alt="Image"
                      className="ml-xl-3 ml-lg-1 mt-3 ml-0 "
                      height="54"
                    />
                  </a>
                </div>
              </div>

              <div className="col-lg-6 col-md-6 mt-5 mt-sm-0">
                <div className="d-none d-lg-flex">
                  <img
                    src="demos/covid-care/images/iphone-2.png"
                    className="fast"
                    alt="Image"
                    style={{ height: '600px' }}
                    data-animate="fadeInUp"
                    data-delay="200"
                  />
                  <img
                    src="demos/covid-care/images/iphone-1.png"
                    className="fast"
                    alt="Image"
                    style={{ height: '600px' }}
                    data-animate="fadeInUp"
                  />
                </div>
                <img
                  src="demos/covid-care/images/iphone.png"
                  alt="Image"
                  className="d-block d-lg-none px-5 px-sm-0 p-md-5"
                />
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  };

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
