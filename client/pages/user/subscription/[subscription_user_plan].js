import React, { Fragment, useEffect } from 'react';
import Layout from '../../../components/layout';
import SideBar from '../../../components/user/side-bar';
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import useRequest from '../../../hooks/use-request';
import Router, { useRouter } from 'next/router';
import Skeleton from 'react-loading-skeleton';
import moment from 'moment';
import { PaystackButton } from 'react-paystack';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const SubPlan = ({ currentuser, order }) => {
  const config = {
    reference: new Date().getTime(),
    email: currentuser.email,
    amount: 100 * 100,
    publicKey: 'pk_test_a3c6eed2d7700ebb41bf5417adeee9ae037f0fdc',
    plan: order.plan_code,
  };

  const router = useRouter();

  const { doRequest, errors, loading } = useRequest({
    url: `/api/subscription/`,
    method: 'post',
    body: {
      orderId: order.id,
    },

    onSuccess: (data) => {
      console.log(data);
      Router.push('/user/plans');
    },
  });

  useEffect(() => {
    currentuser && currentuser.userType === 0
      ? ''
      : Router.push('/auth/signin');
  }, []);

  const componentProps = {
    ...config,
    text: 'Proceed',
    onSuccess: (data) => {
      doRequest();
    },
    onClose: () => {
      null;
    },
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = () => {
    return (
      <Fragment>
        <div className="nk-block-head">
          <div className="nk-block-between-md g-4"></div>
        </div>

        <div className="nk-block nk-block-lg">
          <div className="nk-block-head-sm">
            <div className="nk-block-head-content">
              <h4 className="nk-block-title title">
                {' '}
                <button className="btn btn-primary">Back</button>
              </h4>
            </div>
          </div>

          <div className="nk-block nk-block-lg">
            <div className="card card-preview">
              <div className="card-inner">
                <div className="row">
                  <div className="col-lg-4">
                    <h2>Okay, let's review </h2>
                  </div>
                  <br />

                  <div className="col-lg-8">
                    <div
                      className="card bg-light"
                      style={{
                        borderRadius: ' 10px',
                        border: '1px solid #c4cefe',
                        marginBottom: '10px',
                      }}
                    >
                      <div className="card-inner">
                        <div className="invoice">
                          <header className="clearfix">
                            <div className="row">
                              <div className="col-sm-6 mt-md">
                                <h2 className="h6 mt-none mb-sm text-dark text-bold">
                                  {order ? order.name : ''}
                                </h2>
                                <h6 className="h6 m-none text-blue text-bold">
                                  {order ? order.plan.title : ''}
                                </h6>
                              </div>
                              <div className="col-sm-6 text-right mt-md mb-md"></div>
                            </div>
                          </header>

                          <br />
                          <br />

                          <div className="bill-info">
                            <div className="row">
                              <div className="col-md-6">
                                <div className="bill-to">
                                  <p>Amount</p>
                                  <address className="h6 mb-xs text-dark text-semibold">
                                    #
                                    {order
                                      ? order.amount.toLocaleString(undefined, {
                                          maximumFractionDigits: 2,
                                        })
                                      : ''}
                                    <br />
                                  </address>
                                </div>
                              </div>

                              <div className="col-md-6">
                                <div className="bill-data text-right">
                                  <p className="mb-none">
                                    <p className="text-dark">Frequency</p>
                                    <address className="h6 mb-xs text-dark text-semibold">
                                      {order ? order.interval : ''}
                                      <br />
                                    </address>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <br />

                          <div className="bill-info">
                            <div className="row">
                              <div className="col-md-6">
                                <div className="bill-to">
                                  <p>Start Date</p>
                                  <address className="h6 mb-xs text-dark text-semibold">
                                    {moment(order.startDate).format('LL')}
                                    <br />
                                  </address>
                                </div>
                              </div>

                              <div className="col-md-6">
                                <div className="bill-data text-right">
                                  <p className="mb-none">
                                    <p className="text-dark">Maturity Date</p>
                                    <address className="h6 mb-xs text-dark text-semibold">
                                      {moment(order.expiresAt).format('LL')}
                                      <br />
                                    </address>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <br />

                          <div className="bill-info">
                            <div className="row">
                              <div className="col-md-6">
                                <div className="bill-to">
                                  <p>Interest Rate p.a</p>
                                  <address className="h6 mb-xs text-dark text-semibold">
                                    {order ? order.plan.returnPercentage : ''}%
                                    <br />
                                  </address>
                                </div>
                              </div>

                              <div className="col-md-6">
                                <div className="bill-data text-right">
                                  <p className="mb-none">
                                    <p className="text-dark">Lock Status</p>
                                    <address className="h6 mb-xs text-dark text-semibold">
                                      Locked
                                      <br />
                                    </address>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <br />

                          <div className="invoice-summary">
                            <div className="row"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <br />

                    <div>
                      <Button
                        variant="outlined"
                        color="primary"
                        style={{ marginLeft: '67%', marginRight: '5%' }}
                        onClick={handleClickOpen}
                      >
                        Let's Do This
                      </Button>
                      <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                      >
                        <DialogTitle id="alert-dialog-title">
                          {'Add Card'}
                        </DialogTitle>
                        <DialogContent>
                          <DialogContentText id="alert-dialog-description">
                            To add and verify your card ₦ 100 will be charged
                            and saved into your plan
                          </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                          <Button onClick={handleClose} color="primary">
                            Cancel
                          </Button>

                          <PaystackButton {...componentProps} />
                        </DialogActions>
                      </Dialog>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- <button className="btn btn-sm clipboard-init" title="Copy to clipboard" data-clipboard-target="#cardTT" data-clip-success="Copied" data-clip-text="Copy"><span className="clipboard-text">Copy</span></button> -->     */}
            </div>
          </div>
        </div>
      </Fragment>
    );
  };

  return currentuser ? (
    <Fragment>
      <Layout title="Landing Page" />
      <body className="nk-body npc-crypto bg-white has-sidebar ">
        <div className="nk-app-root">
          <div className="nk-main">
            <SideBar />

            <div className="nk-wrap ">
              <Header currentuser={currentuser} /> {/* Content Main */}
              <div className="nk-content nk-content-fluid">
                <div className="container-xl wide-lg">
                  <div className="nk-content-body">{body()}</div>
                </div>
              </div>
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

SubPlan.getInitialProps = async (context, client, currentuser) => {
  const { subscription_user_plan } = context.query;

  const { data } = await client.get(`/api/orders/${subscription_user_plan}`);

  console.log(data);

  return { order: data };
};

export default SubPlan;
