import { Fragment, useEffect } from 'react';
import Layout from '../../components/layout';
import SideBar from '../../components/user/side-bar';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Router, { useRouter } from 'next/router';
import Skeleton from 'react-loading-skeleton';
import Link from 'next/link';

const Payment = ({ currentuser }) => {
  const router = useRouter();

  useEffect(() => {
    currentuser && currentuser.userType === 0
      ? ''
      : Router.push('/auth/signin');
  }, []);

  const content = () => {
    return (
      <Fragment>
        <div class="nk-content nk-content-fluid">
          <div class="container-xl wide-lg">
            <div class="nk-content-body">
              <div class="card">
                <div class="card-inner">
                  <form action="#" class="nk-wizard nk-wizard-simple is-alter">
                    <div class="nk-wizard-content">
                      <div class="row gy-3">
                        <div class="col-md-6">
                          <h2>Add bank account</h2>
                          <h6 style={{ color: 'grey' }}>
                            Withdraws are paid into your bank account.
                          </h6>
                        </div>
                        <div class="col-md-5">
                          <div class="form-group">
                            <label
                              class="form-label"
                              for="fw-last-name"
                            ></label>
                            <div class="form-control-wrap">
                              <input
                                type="text"
                                data-msg="Required"
                                class="form-control required"
                                id="fw-last-name"
                                name="fw-last-name"
                                placeholder="Enter Plan Name"
                                required
                              />
                              <br />

                              <select class="form-control" id="default-06">
                                <option value="default_option">
                                  Select Bank
                                </option>
                                <option value="option_select_name">
                                  Option select name
                                </option>
                                <option value="option_select_name">
                                  Option select name
                                </option>
                              </select>

                              <br />
                              <a
                                href="#"
                                class="btn btn-primary"
                                style={{ marginLeft: '65%' }}
                              >
                                Add Bank
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  };

  return currentuser ? (
    <Fragment>
      <style jsx>{`
        
        }
      `}</style>
      <Layout title="Landing Page" />
      <body className="nk-body npc-crypto bg-white has-sidebar ">
        <div className="nk-app-root">
          <div className="nk-main">
            <SideBar />

            <div className="nk-wrap ">
              <Header
                currentuser={currentuser}
                title="Add Bank
"
              />{' '}
              {/* Content Main */}
              {content()}
              {/* Content Main */}
              {/* Footer */}
              <Footer /> {/* Footer */}{' '}
            </div>
          </div>
        </div>
      </body>
    </Fragment>
  ) : (
    <Skeleton height={40} count={5} />
  );
};

Payment.getInitialProps = async (context, client, currentuser) => {
  return {};
};

export default Payment;
