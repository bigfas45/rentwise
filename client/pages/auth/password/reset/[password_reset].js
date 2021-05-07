import {useState} from 'react'
import {Fragment} from "react";
import Layout from '../../../../components/layoutLogin';
import useRequest from '../../../../hooks/use-request'
import {Spinner, Button} from "reactstrap";
import Link from 'next/link';


const PasswordReset = ({user}) => {


    const userId = user.id


    const [data, setData] = useState('');
    const [password, setPassword] = useState('');
    const {doRequest, errors, loading} = useRequest({
        url: `/api/users/password-reset/${userId}`,
        method: 'post',
        body: {
            password

        },

        onSuccess: (data) => {
            setData(true)
        }
    })


    const onSubmit = async (event) => {

        event.preventDefault();

        doRequest();

    }

    const template = () => {
        return (
          <Fragment>
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
                        <p class="login-card-description">
                          Reset your password
                        </p>
                        <form onSubmit={onSubmit}>
                          <div class="form-group">
                            <label for="email" class="sr-only">
                              Password
                            </label>
                            <input
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              type="password"
                              className="form-control form-control-lg"
                              id="password"
                              placeholder="New Password"
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
                          {data ? (
                            <div class="alert alert-success">
                              <button
                                type="button"
                                class="close"
                                data-dismiss="alert"
                                aria-hidden="true"
                              >
                                &times;
                              </button>
                              <i class="icon-gift"></i>
                              <strong>Well done!</strong> Your password has been
                              successfully reset{' '}
                              <a href="/auth/signin" class="alert-link">
                                Click here to login
                              </a>
                              .
                            </div>
                          ) : (
                            ''
                          )}
                        </form>

                        <p class="login-card-footer-text">
                          You already have an account?{' '}
                          <a href="/auth/signin">Signin here</a>
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
    }


    return (<Fragment>
        <Layout title="My RentWise"/> {
        template()
    } </Fragment>);

};

PasswordReset.getInitialProps = async (context, client) => {
    const {password_reset} = context.query;

    const {data} = await client.get(`/api/users/${password_reset}`);

    console.log(data)


    return {user: data};

}


export default PasswordReset
