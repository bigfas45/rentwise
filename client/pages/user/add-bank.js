import { Fragment, useEffect, useState } from 'react';
import Layout from '../../components/layout';
import SideBar from '../../components/user/side-bar';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Router, { useRouter } from 'next/router';
import Skeleton from 'react-loading-skeleton';
import Link from 'next/link';
import { Spinner, Button } from 'reactstrap';
import useRequest from '../../hooks/use-request';
import useRequest2 from '../../hooks/use-request2';

const Payment = ({ currentuser }) => {
  const router = useRouter();
  const [bank_account, setBank_account] = useState('');
  const [bank_code, setBank_code] = useState('');
  const [codeError, setCodeError] = useState('');
    const [success, setSuccess] = useState('');


  const { doRequest2, errors2, loading2 } = useRequest2({
    url: `/api/users/${currentuser.id}`,
    method: 'put',
    body: {
      bvn: bank_account,
      bank: bank_code,
    },

    onSuccess: (data) => {
      console.log(data);
    },
  });

  const { doRequest, errors, loading } = useRequest({
    url: '/api/subscription/bank',
    method: 'post',
    body: {
      bank_account,
      bank_code,
    },

    onSuccess: (data) => {
      console.log(data.status);

      if (data.status === true) {
        doRequest2();
        setSuccess(data.message);
        setCodeError('');

      } else {
        setCodeError(data.message);
      }



    },
  });

  const onSubmit = async (event) => {
    event.preventDefault();
    setCodeError('')

    doRequest();
  };

  useEffect(() => {
    currentuser && currentuser.userType === 0
      ? ''
      : Router.push('/auth/signin');
    setBank_account(currentuser.bnv);
    setBank_code(currentuser.bank);
  }, []);

  const content = () => {
    return (
      <Fragment>
        <div class="nk-content nk-content-fluid">
          <div class="container-xl wide-lg">
            <div class="nk-content-body">
              <div class="card">
                <div class="card-inner">
                  <form onSubmit={onSubmit}>
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
                                type="number"
                                data-msg="Required"
                                value={bank_account}
                                onChange={(e) =>
                                  setBank_account(e.target.value)
                                }
                                class="form-control required"
                                id="fw-last-name"
                                name="fw-last-name"
                                placeholder="Enter Account Number "
                                required
                              />
                              <br />
                              <select
                                class="form-control"
                                id="default-06"
                                value={bank_code}
                                onChange={(e) => setBank_code(e.target.value)}
                              >
                                <option value="default_option">
                                  Select Bank
                                </option>
                                <option value="033">
                                  United Bank For Africa
                                </option>
                                <option value="232">Sterling Bank</option>
                              </select>
                              <br />
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
                                    value="submit"
                                  />
                                )}{' '}
                              </div>
                              {errors2}
                              {codeError ? (
                                <div
                                  key={codeError}
                                  className="alert alert-fill alert-danger alert-dismissible alert-icon"
                                >
                                  <em className="icon ni ni-cross-circle"></em>
                                  {codeError}
                                  <button
                                    className="close"
                                    data-dismiss="alert"
                                  ></button>
                                </div>
                              ) : (
                                ''
                              )}

                              {success ? (
                                <div
                                  key={success}
                                  className="alert alert-fill alert-success alert-dismissible alert-icon"
                                >
                                  <em className="icon ni ni-cross-circle"></em>
                                  {success}
                                  <button
                                    className="close"
                                    data-dismiss="alert"
                                  ></button>
                                </div>
                              ) : (
                                ''
                              )}
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
