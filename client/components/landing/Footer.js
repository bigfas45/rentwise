import React, { Component, Fragment, useState } from 'react';
import useRequest from '../../hooks/use-request';
import { Spinner, Button } from 'reactstrap';

const Footer = () => {
  const NewLetter = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState('');
    const { doRequest, errors, loading } = useRequest({
      url: '/api/subscription/newletter',
      method: 'post',
      body: {
        email,
      },
      onSuccess: (email) => {
        setSuccess(
          <div class="alert alert-icon alert-success" role="alert">
            <em class="icon ni ni-alert-circle"></em>
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
      <div class="subscribe-box">
        <div class="container">
          <div class="row subscribe-inner align-items-center">
            <div class="col-md-6 col-sm-12">
              <h4>Subscribe Our Newsletter</h4>
              <p class="lead mb-0">
                Get started for 1 Month free trial No Purchace required.
              </p>
            </div>
            <div class="col-md-6 col-sm-12 sm-mt-2">
              <div class="subscribe-form sm-mt-2">
                <form onSubmit={onSubmit} id="mc-form" class="group">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    name="EMAIL"
                    class="email"
                    id="mc-email"
                    placeholder="Email Address"
                    required=""
                  />
                  {/* <input
                  class="btn btn-theme"
                  type="submit"
                  name="subscribe"
                  value="Subscribe"
                /> */}
                  {loading && loading ? (
                    <Button
                      className="btn btn-theme"
                      variant="success"
                      disabled
                    >
                      <Spinner
                        as="span"
                        animation="grow"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                      />
                      Loading...
                    </Button>
                  ) : (
                    <input
                      class="btn btn-theme"
                      type="submit"
                      name="subscribe"
                      value="Subscribe"
                    />
                  )}{' '}
                  {errors}
                  {success}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Fragment>
      <footer
        className="footer footer-1 pos-r"
        data-bg-img="/assets/landing/assets/images/pattern/03.png"
      >
        <div
          className="footer-wave"
          data-bg-img="/assets/landing/assets/images/bg/08.png"
        ></div>

        {NewLetter()}

        <div className="primary-footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="footer-logo">
                  <img
                    id="footer-logo-white-img"
                    src="/assets/landing/assets/images/logo-customizer-white/logo-color-5.png"
                    className="img-center"
                    alt=""
                  />
                </div>
                <p className="mb-0">
                  Softino Software Landing Page Is fully responsible, Build
                  whatever you like with the Softino, Softino is the creative,
                  modern HTML5 Template suitable for Your business.
                </p>
              </div>
              <div className="col-lg-4 col-md-6 pl-md-5 sm-mt-5 footer-list justify-content-between d-flex">
                <ul className="list-unstyled w-100">
                  <li>
                    <a href="about-us.html">About Us</a>
                  </li>
                  <li>
                    <a href="services.html">Service</a>
                  </li>
                  <li>
                    <a href="team.html">Team</a>
                  </li>
                  <li>
                    <a href="team-single.html">Team Single</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact Us</a>
                  </li>
                </ul>
                <ul className="list-unstyled w-100">
                  <li>
                    <a href="blog-right-sidebar.html">Blog</a>
                  </li>
                  <li>
                    <a href="faq.html">Faq</a>
                  </li>
                  <li>
                    <a href="error-404.html">Error 404</a>
                  </li>
                  <li>
                    <a href="privacy-policy.html">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="terms-and-conditions.html">Terms</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-12 md-mt-5">
                <ul className="media-icon list-unstyled">
                  <li>
                    <p className="mb-0">
                      Address: <b>423B, Road Wordwide Country, USA</b>
                    </p>
                  </li>
                  <li>
                    Email:{' '}
                    <a href="mailto:themeht23@gmail.com">
                      <b>themeht23@gmail.com</b>
                    </a>
                  </li>
                  <li>
                    Phone:{' '}
                    <a href="tel:+912345678900">
                      <b>+91-234-567-8900</b>
                    </a>
                  </li>
                  <li>
                    Fax:{' '}
                    <a href="tel:+912345678900">
                      <b>+91-234-567-8900</b>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="secondary-footer">
          <div className="container">
            <div className="copyright">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12">
                  {' '}
                  <span>
                    Copyright 2019 Softino Theme by{' '}
                    <u>
                      <a href="#">ThemeHt</a>
                    </u>{' '}
                    | All Rights Reserved
                  </span>
                </div>
                <div className="col-lg-6 col-md-12 text-lg-right md-mt-3">
                  <div className="footer-social">
                    <ul className="list-inline">
                      <li className="mr-2">
                        <a href="#">
                          <i className="fab fa-facebook-f"></i> Facebook
                        </a>
                      </li>
                      <li className="mr-2">
                        <a href="#">
                          <i className="fab fa-twitter"></i> Twitter
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-google-plus-g"></i> Google Plus
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
