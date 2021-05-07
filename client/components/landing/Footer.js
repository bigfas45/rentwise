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
      <div
        className="section rounded px-4 section-mobile"
        style={{
          background:
            "url('demos/covid-care/images/illustration/bg-pattern.svg') no-repeat center left / contain",
          backgroundColor: '#f1f6fd',
        }}
      >
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-5">
            <h3 className="mb-4 mb-lg-0">
              Sign up for Updates &amp; Newsletters.
            </h3>
          </div>
          <div className="col-lg-6">
            <div className="widget subscribe-widget" data-loader="button">
              <div className="widget-subscribe-form-result"></div>
              <form
                id="widget-subscribe-form"
                onSubmit={onSubmit}
                className="mb-0 d-flex"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="widget-subscribe-form-email"
                  name="widget-subscribe-form-email"
                  className="form-control form-control-lg not-dark required email"
                  placeholder="Your Email Address"
                />
                {loading && loading ? (
                  <Button
                    class="button button-large button-black button-dark font-weight-medium ls0 button-rounded m-0 ml-3"
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
                    class="button button-large button-black button-dark font-weight-medium ls0 button-rounded m-0 ml-3"
                    type="submit"
                    name="subscribe"
                    value="Subscribe Now"
                  />
                )}{' '}
              </form>
              {errors}
              {success}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Fragment>
      {NewLetter()}
      <footer id="footer" className="blue">
        <div id="copyrights">
          <div className="container">
            <div className="row col-mb-30">
              <div className="col-md-6 text-center text-md-left">
                Copyrights &copy; 2021 All Rights Reserved by RentWise.
                <br />
                <div className="copyright-links">
                  <a href="#">Terms of Use</a> / <a href="#">Privacy Policy</a>
                </div>
              </div>

              <div className="col-md-6 text-center text-md-right">
                <div className="d-flex justify-content-center justify-content-md-end">
                  <a
                    href="#"
                    className="social-icon si-small si-borderless si-facebook"
                  >
                    <i className="icon-facebook"></i>
                    <i className="icon-facebook"></i>
                  </a>

                  <a
                    href="#"
                    className="social-icon si-small si-borderless si-twitter"
                  >
                    <i className="icon-twitter"></i>
                    <i className="icon-twitter"></i>
                  </a>

                  <a
                    href="#"
                    className="social-icon si-small si-borderless si-gplus"
                  >
                    <i className="icon-gplus"></i>
                    <i className="icon-gplus"></i>
                  </a>

                  <a
                    href="#"
                    className="social-icon si-small si-borderless si-pinterest"
                  >
                    <i className="icon-pinterest"></i>
                    <i className="icon-pinterest"></i>
                  </a>

                  <a
                    href="#"
                    className="social-icon si-small si-borderless si-vimeo"
                  >
                    <i className="icon-vimeo"></i>
                    <i className="icon-vimeo"></i>
                  </a>

                  <a
                    href="#"
                    className="social-icon si-small si-borderless si-github"
                  >
                    <i className="icon-github"></i>
                    <i className="icon-github"></i>
                  </a>

                  <a
                    href="#"
                    className="social-icon si-small si-borderless si-yahoo"
                  >
                    <i className="icon-yahoo"></i>
                    <i className="icon-yahoo"></i>
                  </a>

                  <a
                    href="#"
                    className="social-icon si-small si-borderless si-linkedin"
                  >
                    <i className="icon-linkedin"></i>
                    <i className="icon-linkedin"></i>
                  </a>
                </div>
                <div className="clear"></div>
                <i className="icon-envelope2"></i> info@rentwise.ng{' '}
                <span className="middot">&middot;</span>{' '}
                <i className="icon-headphones"></i> 0815 556 7409
                <span className="middot">&middot;</span>{' '}
                <i className="icon-skype2"></i> RentWiseOnSkype
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
