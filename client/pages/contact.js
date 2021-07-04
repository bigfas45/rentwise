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

 

  const body2 = () => {

    return (
      <>
        <section id="page-title">
          <div className="container clearfix">
            <h1>Contact</h1>
            <span>Get in Touch with Us</span>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Contact
              </li>
            </ol>
          </div>
        </section>

        <section id="content">
          <div className="content-wrap">
            <div className="container">
              <div className="row gutter-40 col-mb-80">
                <div className="postcontent col-lg-9">
                  <h3>Send us an Email</h3>

                  <div className="form-widget">
                    <div className="form-result"></div>

                    <form
                      className="mb-0"
                      id="template-contactform"
                      onSubmit={onSubmit}
                    >
                      <div className="form-process">
                        <div className="css3-spinner">
                          <div className="css3-spinner-scaler"></div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-4 form-group">
                          <label for="template-contactform-name">
                            Name <small>*</small>
                          </label>
                          <input
                            type="text"
                            id="template-contactform-name"
                            name="template-contactform-name"
                            value={firstname}
                            onChange={(e) => setFirstname(e.target.value)}
                            className="sm-form-control required"
                          />
                        </div>

                        <div className="col-md-4 form-group">
                          <label for="template-contactform-email">
                            Email <small>*</small>
                          </label>
                          <input
                            type="email"
                            id="template-contactform-email"
                            name="template-contactform-email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="required email sm-form-control"
                          />
                        </div>

                        <div className="col-md-4 form-group">
                          <label for="template-contactform-phone">Phone</label>
                          <input
                            type="text"
                            id="template-contactform-phone"
                            name="template-contactform-phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="sm-form-control"
                          />
                        </div>

                        <div className="w-100"></div>

                        <div className="w-100"></div>

                        <div className="col-12 form-group">
                          <label for="template-contactform-message">
                            Message <small>*</small>
                          </label>
                          <textarea
                            className="required sm-form-control"
                            id="template-contactform-message"
                            name="template-contactform-message"
                            rows="6"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            cols="30"
                          ></textarea>
                        </div>

                        <div className="col-12 form-group d-none">
                          <input
                            type="text"
                            id="template-contactform-botcheck"
                            name="template-contactform-botcheck"
                            value=""
                            className="sm-form-control"
                          />
                        </div>

                        <div className="col-12 form-group">
                          {/* <button
                            className="button button-3d m-0"
                            type="submit"
                            id="template-contactform-submit"
                            name="template-contactform-submit"
                            value="submit"
                          >
                            Send Message
                          </button> */}
                          {loading && loading ? (
                            <Button
                              className="button button-3d m-0"
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
                              className="button button-3d m-0"
                              type="submit"
                              name="subscribe"
                              value="Send Message"
                            />
                          )}{' '}
                          {errors}
                          {success}
                        </div>
                      </div>

                      <input
                        type="hidden"
                        name="prefix"
                        value="template-contactform-"
                      />
                    </form>
                  </div>
                </div>
                <div className="sidebar col-lg-3">
                  <address>
                    <strong>Headquarters:</strong>
                    <br />
                    17A, Colorado street, Maitama Abuja
                    <br />
                  </address>
                  <abbr title="Phone Number">
                    <strong>Phone:</strong>
                  </abbr>{' '}
                  0815 556 7409·
                  <br />
                  <abbr title="Fax">
                    <strong>Fax:</strong>
                  </abbr>{' '}
                  0815 556 7409·
                  <br />
                  <abbr title="Email Address">
                    <strong>Email:</strong>
                  </abbr>{' '}
                  info@rentwise.com
                  <div className="widget border-0 pt-0">
                    <div
                      className="fslider customjs testimonial twitter-scroll twitter-feed"
                      data-username="envato"
                      data-count="3"
                      data-animation="slide"
                      data-arrows="false"
                    >
                      <i
                        className="i-plain i-small color icon-twitter mb-0"
                        style={{ marginRight: '15px' }}
                      ></i>
                      <div className="flexslider" style={{ width: 'auto' }}>
                        <div className="slider-wrap">
                          <div className="slide"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="widget border-0 pt-0">
                    <a
                      href="#"
                      className="social-icon si-small si-dark si-facebook"
                    >
                      <i className="icon-facebook"></i>
                      <i className="icon-facebook"></i>
                    </a>

                    <a
                      href="#"
                      className="social-icon si-small si-dark si-twitter"
                    >
                      <i className="icon-twitter"></i>
                      <i className="icon-twitter"></i>
                    </a>

                    <a
                      href="#"
                      className="social-icon si-small si-dark si-dribbble"
                    >
                      <i className="icon-dribbble"></i>
                      <i className="icon-dribbble"></i>
                    </a>

                    <a
                      href="#"
                      className="social-icon si-small si-dark si-forrst"
                    >
                      <i className="icon-forrst"></i>
                      <i className="icon-forrst"></i>
                    </a>

                    <a
                      href="#"
                      className="social-icon si-small si-dark si-pinterest"
                    >
                      <i className="icon-pinterest"></i>
                      <i className="icon-pinterest"></i>
                    </a>

                    <a
                      href="#"
                      className="social-icon si-small si-dark si-gplus"
                    >
                      <i className="icon-gplus"></i>
                      <i className="icon-gplus"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.5790058343814!2d7.47614755046896!3d9.10205999343816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0a8882070691%3A0xc401ae586b8c4b7c!2s17a%20Colorado%20St%2C%20Maitama%2C%20Abuja!5e0!3m2!1sen!2sng!4v1625314613472!5m2!1sen!2sng"
            width="600"
            height="450"
            style={{border:"0"}}
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </section>
      </>
    );

  }

  return (
    <Fragment>
      <Layout title="RentWise | Contact Us" />
      <Header currentuser={currentuser} title="RentWise | Contact Us" />
      {body2()}
      <Footer />
    </Fragment>
  );
};

Contact.getInitialProps = async (context, client, currentuser) => {};

export default Contact;
