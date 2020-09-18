import Head from 'next/head';
import { useSate, useState, Fragment } from 'react';
import Router from 'next/router';
import useRequest from '../../hooks/use-request';
import { Spinner, Button } from 'reactstrap';
import Layout from '../../components/layout';
import Link from 'next/link';

const Signup = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [telephone, setTelephone] = useState('');
  const { doRequest, errors, loading } = useRequest({
    url: '/api/users/signup',
    method: 'post',
    body: {
      email,
      firstname,
      lastname,
      password,
      telephone,
    },

    onSuccess: (user) => {
      if (user.userType === 1) {
        Router.push('/verifications/account-created');
      } else {
        Router.push('/verifications/account-created');
      }
    },
  });

  const onSubmit = async (event) => {
    event.preventDefault();

    doRequest();
  };

  return (
    <Fragment>
      <Layout title="Sign Up" />

      <body className="nk-body npc-crypto bg-white pg-auth">
        <div className="nk-app-root">
          <div className="nk-split nk-split-page nk-split-md">
            <div
              className="nk-split-content nk-split-stretch bg-lighter d-flex toggle-break-lg toggle-slide toggle-slide-right"
              data-content="athPromo"
              data-toggle-screen="lg"
              data-toggle-overlay="true"
            >
              <div className="slider-wrap w-100 w-max-550px p-3 p-sm-5 m-auto">
                <div
                  className="slider-init"
                  data-slick='{"dots":true, "arrows":false}'
                >
                  <div className="slider-item">
                    <div className="nk-feature nk-feature-center">
                      <div className="nk-feature-img ml-5">
                        <img
                          className="round"
                          src="https://image.freepik.com/free-vector/happy-man-making-money-online-laptop-metaphor_81522-4241.jpg"
                          srcSet="https://image.freepik.com/free-vector/happy-man-making-money-online-laptop-metaphor_81522-4241.jpg 2x"
                          alt=""
                        />
                      </div>
                      <div className="nk-feature-content py-4 p-sm-5">
                        <h2 className="text-blue mr-5">Create an account</h2>
                        <h3 className="text-blue mr-5">
                          Let's get to know you
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-dots"></div>
                <div className="slider-arrows"></div>
              </div>
            </div>

            <div className="nk-split-content nk-block-area nk-block-area-column nk-auth-container bg-white">
              <div className="absolute-top-right d-lg-none p-3 p-sm-5">
                <a
                  href="#"
                  className="toggle btn-white btn btn-icon btn-light"
                  data-target="athPromo"
                >
                  <em className="icon ni ni-info"></em>
                </a>
              </div>
              <div className="nk-block nk-block-middle nk-auth-body">
                <div className="brand-logo pb-5">
                  <a href="html/index.html" className="logo-link">
                    <img
                      className="logo-light logo-img logo-img-lg"
                      src="/assets/images/logo.png"
                      srcSet="/assets/images/logo2x.png 2x"
                      alt="logo"
                    />
                    <img
                      className="logo-dark logo-img logo-img-lg"
                      src="/assets/images/logo-dark.png"
                      srcSet="/assets/images/logo-dark2x.png 2x"
                      alt="logo-dark"
                    />
                  </a>
                </div>

                {/* {errors.map(err => err.message )} */}

                <form onSubmit={onSubmit}>
                  <div className="row">
                    <div className="form-group col-6">
                      <div className="form-label-group">
                        <label className="form-label">First Name</label>
                      </div>
                      <input
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter your firstname"
                      />
                    </div>

                    <div className="form-group col-6">
                      <div className="form-label-group">
                        <label className="form-label">Last name</label>
                      </div>
                      <input
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter your lastname"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="form-label-group">
                      <label className="form-label" htmlFor="default-01">
                        Email or Username
                      </label>
                    </div>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Enter your email address or username"
                    />
                  </div>
                  <div className="form-group">
                    <div className="form-label-group">
                      <label className="form-label">Telephone</label>
                    </div>
                    <input
                      value={telephone}
                      onChange={(e) => setTelephone(e.target.value)}
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Enter your telephone number"
                    />
                  </div>
                  <div className="form-group">
                    <div className="form-label-group">
                      <label className="form-label" htmlFor="password">
                        Passcode
                      </label>
                    </div>
                    <div className="form-control-wrap">
                      <a
                        tabIndex="-1"
                        href="#"
                        className="form-icon form-icon-right passcode-switch"
                        data-target="password"
                      >
                        <em className="passcode-icon icon-show icon ni ni-eye"></em>
                        <em className="passcode-icon icon-hide icon ni ni-eye-off"></em>
                      </a>
                      <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        className="form-control form-control-lg"
                        id="password"
                        placeholder="Enter your passcode"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    {loading && loading ? (
                      <Button
                        className="btn btn-lg btn-primary btn-block"
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
                        type="submit"
                        className="btn btn-lg btn-primary btn-block"
                        value="Submit"
                      />
                    )}{' '}
                  </div>
                  {errors}{' '}
                </form>
                <div className="form-note-s2 pt-4">
                  Got an account?
                  <Link href="/auth/signin">
                    <a>Sign In</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </Fragment>
  );
};

Signup.getInitialProps = async (context,client, currentuser) => {};

export default Signup;
