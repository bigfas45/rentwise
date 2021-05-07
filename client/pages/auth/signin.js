import { useState, Fragment } from 'react';
import Router from 'next/router';
import useRequest from '../../hooks/use-request';
import { Spinner, Button } from 'reactstrap';
import LayoutLogin from '../../components/layoutLogin';
import Link from 'next/link';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { doRequest, errors, loading } = useRequest({
    url: '/api/users/signin',
    method: 'post',
    body: {
      email,
      password,
    },

    onSuccess: (user) => {
      if (user.userType === 1) {
        Router.push('/admin/dashboard');
      } else {
        Router.push('/user/dashboard');
      }
    },
  });

  const onSubmit = async (event) => {
    event.preventDefault();

    doRequest();
  };

  return (
    <Fragment>
      <LayoutLogin title="Sign In" />

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
                  <p class="login-card-description">Sign into your account</p>
                  <form onSubmit={onSubmit}>
                    <div class="form-group">
                      <label for="email" class="sr-only">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        id="email"
                        class="form-control"
                        placeholder="Email address"
                      />
                    </div>
                    <div class="form-group mb-4">
                      <label for="password" class="sr-only">
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        id="password"
                        class="form-control"
                        placeholder="***********"
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
                        name="login"
                        id="login"
                        class="btn btn-block login-btn mb-4"
                        value="Login"
                      />
                    )}{' '}
                    {errors}{' '}
                  </form>

                  <Link href="/auth/password/forgot-password">
                    <a class="forgot-password-link">Forgot Code?</a>
                  </Link>
                  <p class="login-card-footer-text">
                    Don't have an account?{' '}
                    <Link href="/auth/signup">
                      <a class="text-reset">Create an account</a>
                    </Link>
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

Signin.getInitialProps = async (context, client, currentuser) => {};

export default Signin;
