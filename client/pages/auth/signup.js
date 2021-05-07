import Head from 'next/head';
import { useSate, useState, Fragment } from 'react';
import Router from 'next/router';
import useRequest from '../../hooks/use-request';
import { Spinner, Button } from 'reactstrap';
import LayoutLogin from '../../components/layoutLogin';
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
      <LayoutLogin title="Sign Up" />

      <main
        class="d-flex align-items-center min-vh-100 py-3 py-md-0"
        style={{
          background:
            "linear-gradient(to top, rgba(38,38,38,0.922), rgba(38,38,38,0.922)), url('/demos/real-estate/images/hero/3.jpg') no-repeat center center/ cover",
        }}
      >
        <div class="container">
          <div class="card login-card">
            <div class="row no-gutters">
              <div class="col-md-5">
                <img
                  src="/demos/real-estate/images/hero/3.jpg"
                  alt="login"
                  class="login-card-img"
                />
              </div>
              <div class="col-md-7">
                <div class="card-body">
                  <div class="brand-wrapper">
                    <img src="/rentwised.png" alt="logo" class="logo" />
                  </div>
                  <p class="login-card-description">Create an account</p>

                  <form onSubmit={onSubmit}>
                    <div className="row">
                      <div class="form-group  col-6">
                        <label className="form-label">First Name</label>
                        <input
                          value={firstname}
                          onChange={(e) => setFirstname(e.target.value)}
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="Enter your firstname"
                        />
                      </div>
                      <div class="form-group mb-4 col-6">
                        <label className="form-label">Last name</label>

                        <input
                          value={lastname}
                          onChange={(e) => setLastname(e.target.value)}
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="Enter your lastname"
                        />
                      </div>
                      <div class="form-group mb-6 col-6">
                        <label className="form-label" htmlFor="default-01">
                          Email
                        </label>
                        <input
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="Enter your email address or username"
                        />
                      </div>
                      <div class="form-group mb-4 col-6">
                        <label className="form-label">Telephone</label>

                        <input
                          value={telephone}
                          onChange={(e) => setTelephone(e.target.value)}
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="Enter your telephone number"
                        />
                      </div>
                      <div class="form-group mb-4 col-12">
                        <label className="form-label" htmlFor="password">
                          Password
                        </label>

                        <input
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          type="password"
                          className="form-control form-control-lg"
                          id="password"
                          placeholder="Enter your passcode"
                        />
                      </div>
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
                          class="btn btn-block login-btn mb-4"
                          value="Submit"
                        />
                      )}{' '}
                    </div>
                    {errors}{' '}
                  </form>
                  <Link href="/auth/password/forgot-password">
                    <a class="forgot-password-link">Forgot Code?</a>
                  </Link>
                  <p class="login-card-footer-text">
                    You already have an account?{' '}
                    <Link href="/auth/signin">Signin here</Link>
                  </p>
                  <nav class="login-card-footer-nav">
                    <a href="#!">Terms of use.</a>
                    <a href="#!">Privacy policy</a>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

Signup.getInitialProps = async (context, client, currentuser) => {};

export default Signup;
