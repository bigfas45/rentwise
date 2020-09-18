import { Fragment, useEffect, useState } from 'react';
import Layout from '../components/landing/layout';
import SideBar from '../components/user/side-bar';
import Header from '../components/landing/Header';
import Footer from '../components/landing/Footer';
import Router, { useRouter } from 'next/router';
import Skeleton from 'react-loading-skeleton';
import useRequest from '../hooks/use-request';
import { Spinner, Button } from 'reactstrap';

const Contact = ({ currentuser }) => {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState('');

  const { doRequest, errors, loading } = useRequest({
    url: '/api/subscription/contactus',
    method: 'post',
    body: {
      email,
      phone,
      firstname,
      lastname,
      message,
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

  const body = () => {
    return (
      <Fragment>
        <div>
          <section
            className="page-title o-hidden pos-r md-text-center"
            data-bg-color="#d4f7ea"
          >
            <canvas id="confetti"></canvas>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-7 col-md-12">
                  <h1 className="title">
                    <span>C</span>ontact Us
                  </h1>
                  <p>We're Building Modern And High Software</p>
                </div>
                <div className="col-lg-5 col-md-12 text-lg-right md-mt-3">
                  <nav aria-label="breadcrumb" className="page-breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="index.html">Home</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="#">Contact Us</a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Contact Us
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
            <div className="page-title-pattern">
              <img
                className="img-fluid"
                src="/assets/images/bg/11.png"
                alt=""
              />
            </div>
          </section>

          <div className="page-content">
            <section className="contact-1">
              <div className="container">
                <div className="row">
                  <div className="col-xl-6 col-lg-8 col-md-12 mr-auto">
                    <div className="section-title">
                      <div className="title-effect">
                        <div className="bar bar-top"></div>
                        <div className="bar bar-right"></div>
                        <div className="bar bar-bottom"></div>
                        <div className="bar bar-left"></div>
                      </div>
                      <h6>Get In Touch</h6>
                      <h2>Stay Contact Us</h2>
                      <p>
                        Get in touch and let us know how we can help. Fill out
                        the form and we’ll be in touch as soon as possible.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <form id="contact-form" onSubmit={onSubmit}>
                      <div className="messages"></div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>First Name</label>
                            <input
                              id="form_name"
                              type="text"
                              value={firstname}
                              onChange={(e) => setFirstname(e.target.value)}
                              className="form-control"
                              placeholder="Type First name"
                              required="required"
                              data-error="Firstname is required."
                            />
                            <div className="help-block with-errors"></div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Last Name</label>
                            <input
                              id="form_lastname"
                              type="text"
                              value={lastname}
                              onChange={(e) => setLastname(e.target.value)}
                              className="form-control"
                              placeholder="Type Last name"
                              required="required"
                              data-error="Lastname is required."
                            />
                            <div className="help-block with-errors"></div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Email Address</label>
                            <input
                              id="form_email"
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              className="form-control"
                              placeholder="Type Email"
                              required="required"
                              data-error="Valid email is required."
                            />
                            <div className="help-block with-errors"></div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Phone Number</label>
                            <input
                              id="form_phone"
                              type="tel"
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                              className="form-control"
                              placeholder="Type Phone"
                              required="required"
                              data-error="Phone is required"
                            />
                            <div className="help-block with-errors"></div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <label>Message</label>
                            <textarea
                              id="form_message"
                              value={message}
                              onChange={(e) => setMessage(e.target.value)}
                              className="form-control"
                              placeholder="Type Message"
                              rows="4"
                              required="required"
                              data-error="Please,leave us a message."
                            ></textarea>
                            <div className="help-block with-errors"></div>
                          </div>
                        </div>
                        <div className="col-md-12 mt-2">
                          {loading && loading ? (
                            <Button
                              classNameName="btn btn-theme btn-circle"
                              variant="success"
                              data-text="Send Message"
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
                              className="btn btn-theme btn-circle"
                              type="submit"
                              name="subscribe"
                              value="Send Message"
                            />
                          )}{' '}
                          {errors}
                          {success}
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </section>

            <section className="contact-info p-0 z-index-1">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-4 col-md-12">
                    <div className="contact-media">
                      {' '}
                      <i className="flaticon-paper-plane"></i>
                      <span>Address:</span>
                      <p>423B, Road Wordwide Country, USA</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 md-mt-5">
                    <div className="contact-media">
                      {' '}
                      <i className="flaticon-email"></i>
                      <span>Email Address</span>
                      <a href="mailto:themeht23@gmail.com">
                        {' '}
                        themeht23@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 md-mt-5">
                    <div className="contact-media">
                      {' '}
                      <i className="flaticon-social-media"></i>
                      <span>Phone Number</span>
                      <a href="tel:+912345678900">+91-234-567-8900</a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="o-hidden p-0 custom-mt-10 z-index-0">
              <div className="container-fluid p-0">
                <div className="row align-items-center">
                  <div className="col-md-12">
                    <div className="map iframe-h-2">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.840108181602!2d144.95373631539215!3d-37.8172139797516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sin!4v1497005461921"
                        allowFullScreen=""
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </Fragment>
    );
  };

  return (
    <Fragment>
      <Layout title="RentWise | Contact Us" />
      <Header currentuser={currentuser} title="RentWise | Contact Us" />
      {body()}
      <Footer />
    </Fragment>
  );
};

Contact.getInitialProps = async (context, client, currentuser) => {};

export default Contact;
