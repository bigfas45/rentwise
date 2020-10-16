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
      <div className="subscribe-box">
        <div className="container">
          <div className="row subscribe-inner align-items-center">
            <div className="col-md-6 col-sm-12">
              <h4>Subscribe Our Newsletter</h4>
              <p className="lead mb-0">
                Get started for 1 Month free trial No Purchace required.
              </p>
            </div>
            <div className="col-md-6 col-sm-12 sm-mt-2">
              <div className="subscribe-form sm-mt-2">
                <form onSubmit={onSubmit} id="mc-form" className="group">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    name="EMAIL"
                    className="email"
                    id="mc-email"
                    placeholder="Email Address"
                    required=""
                  />
                  {/* <input
                  className="btn btn-theme"
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
                      className="btn btn-theme"
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
                    src="/assets/images/rentWise.PNG"
                    className="img-center"
                    alt=""
                  />
                </div>
                <p className="mb-0">
                  RentWise is the largest online savings & investing platform in
                  Nigeria. For over 4 years, our customers have saved and
                  invested billions of Naira that they would normally be tempted
                  to spend.
                </p>
              </div>
              <div className="col-lg-4 col-md-6 pl-md-5 sm-mt-5 footer-list justify-content-between d-flex">
                <ul className="list-unstyled w-100">
                  <li>
                    <a href="/aboutus">About Us</a>
                  </li>
                  <li>
                    <a href="/plans">Plans</a>
                  </li>

                  <li>
                    <a href="/contact">Contact Us</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-12 md-mt-5">
                <ul className="media-icon list-unstyled">
                  <li>
                    <p className="mb-0">
                      Address: <b>Suite D5, Innovation plaza Wuye Abuja</b>
                    </p>
                  </li>
                  <li>
                    Email:{' '}
                    <a href="mailto:themeht23@gmail.com">
                      <b>info@rentwise.ng</b>
                    </a>
                  </li>
                  <li>
                    Phone:{' '}
                    <a href="tel:+912345678900">
                      <b>0815 556 7409</b>
                    </a>
                  </li>
                  {/* <li>
                    Fax:{' '}
                    <a href="tel:+912345678900">
                      <b>+91-234-567-8900</b>
                    </a>
                  </li> */}
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
                    Copyright 2020 RentWise Theme by{' '}
                    <u>
                      <a href="#">rentwise</a>
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
