import React, { Fragment, useEffect, useState } from 'react';
import Layout from '../../../../components/layout';
import SideBar from '../../../../components/user/side-bar';
import Header from '../../../../components/header';
import Footer from '../../../../components/footer';
import useRequest from '../../../../hooks/use-request';
import Router, { useRouter } from 'next/router';
import Skeleton from 'react-loading-skeleton';
import moment from 'moment';
import Link from 'next/link';
import { PaystackButton } from 'react-paystack';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const Savings = ({ currentuser, orders }) => {
  const config = {
    reference: new Date().getTime(),
    email: currentuser.email,
    plan: orders.plan_code,
    amount: 100 * 100,
    publicKey: 'pk_test_a3c6eed2d7700ebb41bf5417adeee9ae037f0fdc',
  };

  const router = useRouter();

  const [state, setState] = useState('');
  const [sub, setSub] = useState(['']);

  const { doRequest, errors, loading } = useRequest({
    url: `/api/subscription/`,
    method: 'post',
    body: {
      orderId: orders.id,
      customer: 'CUS_1meb3gzqopqszhc',
    },

    onSuccess: (data) => {
      console.log(data);
      Router.push('/user/plans');
    },
  });

  const TPayment = () => {
    const { doRequest, errors, loading } = useRequest({
      url: `/api/subscription/${orders.id}`,
      method: 'get',
      body: {},

      onSuccess: (data) => {
        setSub(data);
        console.log(data);
        var payments = 0;
        data.map((pay, i) => {
          var payment = pay.order.amount;
          payments += payment;
        });

        setState(payments);
      },
    });

    useEffect(() => {
      doRequest();
    }, []);
  };

  useEffect(() => {
    currentuser && currentuser.userType === 0
      ? ''
      : Router.push('/auth/signin');
  }, []);

  const componentProps = {
    ...config,
    text: 'Proceed',
    onSuccess: (data) => {
      // subscribtion insertion to the db
      // doRequest();
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

  const transaction = () => {
    return (
      <div class="col-xl-7 col-xxl-8">
        <div class="card card-bordered card-full">
          <div class="card-inner">
            <div class="card-title-group">
              <div class="card-title">
                <h6 class="title">
                  <span class="mr-2">Orders Activities</span>{' '}
                  <a href="#" class="link d-none d-sm-inline">
                    See History
                  </a>
                </h6>
              </div>
            </div>
          </div>
          <div class="card-inner p-0 border-top">
            <div class="nk-tb-list nk-tb-orders">
              <div class="nk-tb-item nk-tb-head">
                <div class="nk-tb-col nk-tb-orders-type">
                  <span>Type</span>
                </div>
                <div class="nk-tb-col">
                  <span>Desc</span>
                </div>
                <div class="nk-tb-col tb-col-sm">
                  <span>Date</span>
                </div>
                <div class="nk-tb-col tb-col-xxl">
                  <span>Time</span>
                </div>
                <div class="nk-tb-col tb-col-xxl">
                  <span>Ref</span>
                </div>
                <div class="nk-tb-col tb-col-sm text-right">
                  <span>NGN Amount</span>
                </div>
              </div>

              {sub.map((s, i) => {
                return (
                  <div key={i} class="nk-tb-item">
                    <div class="nk-tb-col nk-tb-orders-type">
                      <ul class="icon-overlap">
                        <li>
                          <em class="bg-btc-dim icon-circle icon ni ni-sign-btc"></em>
                        </li>
                        <li>
                          <em class="bg-purple-dim icon-circle icon ni ni-arrow-up-right"></em>
                        </li>
                      </ul>
                    </div>
                    <div class="nk-tb-col tb-col-sm">
                      <span class="tb-sub">02/10/2020</span>
                    </div>
                    <div class="nk-tb-col tb-col-sm">
                      <span class="tb-sub">
                        {' '}
                        {moment(s.createdAt).format('LL')}{' '}
                      </span>
                    </div>
                  
                    <div class="nk-tb-col tb-col-sm text-right">
                      <span class="tb-sub tb-amount">
                        {/* {s.order.amount}  <span>NGN</span> */}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const body = () => (
    <Fragment>
      <div class="nk-content nk-content-fluid">
        <div class="container">
          <div class="col-lg-12">
            <div
              class="row"
              style={{
                backgroundColor: '#473fa8!important',
                height: '10%',
                color: 'white',
              }}
            >
              <div class="col-lg-4">
                <div
                  class="card"
                  style={{
                    padding: '20px 12px',
                    backgroundColor: '#473fa8!important',
                    display: 'block',
                    transition: 'border .3s ease,transform .3s ease',
                    marginBottom: '10px',
                  }}
                >
                  <div
                    style={{ backgroundColor: '#473fa8' }}
                    class="card-header"
                  >
                    <h6
                      style={{
                        fontSize: '1.5rem',
                        fontWeight: '600',
                        color: 'white',
                      }}
                    >
                      Principal
                    </h6>
                  </div>
                  <div class="card-inner">
                    <p class="card-title" style={{ color: '#473fa8' }}>
                      <sup>₦</sup> <b style={{ fontSize: '25px' }}>
                        {/* subscribtion totaln */}
                        {/* {state} */}
                      
                      
                      </b>
                      .00
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-lg-4">
                <div
                  class="card"
                  style={{
                    padding: '20px 12px',
                    backgroundColor: '#473fa8!important',
                    display: 'block',
                    transition: 'border .3s ease,transform .3s ease',
                    marginBottom: '10px',
                  }}
                >
                  <div
                    style={{ backgroundColor: '#473fa8' }}
                    class="card-header"
                  >
                    <h6
                      style={{
                        fontSize: '1.5rem',
                        fontWeight: '600',
                        color: 'white',
                      }}
                    >
                      Returns
                    </h6>
                  </div>
                  <div class="card-inner">
                    <p class="card-title" style={{ color: '#473fa8' }}>
                      <sup>₦</sup>{' '}
                      <b style={{ fontSize: '25px' }}>
                        {' '}
                        {(state / 1000) * orders.plan.returnPercentage +
                          state}{' '}
                      </b>
                      .00
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-lg-4">
                <div
                  class="card"
                  style={{
                    padding: '20px 12px',
                    backgroundColor: '#473fa8!important',
                    display: 'block',
                    transition: 'border .3s ease transform .3s ease',
                    marginBottom: '10px',
                  }}
                >
                  <div
                    style={{ backgroundColor: '#473fa8' }}
                    class="card-header"
                  >
                    <h6
                      style={{
                        fontSize: '1.5rem',
                        fontWeight: '600',
                        color: 'white',
                      }}
                    >
                      Interest Rate P.A.
                    </h6>
                  </div>
                  <div class="card-inner">
                    <p class="card-title" style={{ color: '#473fa8' }}>
                      <b style={{ fontSize: '25px' }}>
                        {' '}
                        {orders.plan.returnPercentage}
                      </b>
                      %
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <br />

            <div class="col-lg-12" style={{ marginLeft: '5%' }}>
              <div
                class="nk-fmg-listing nk-block-lg"
                style={{ minHeight: '150px' }}
              >
                <div class="nk-files nk-files-view-grid">
                  <div class="nk-files-list">
                    <div class="nk-file-item nk-file" style={{ border: '0px' }}>
                      <div class="nk-file-info">
                        <div class="nk-file-title">
                          <div class="nk-file-icon">
                            <Link
                              href="/user/plans/savings/update/[create_user_plan]"
                              as={`/user/plans/savings/update/${orders.id}`}
                            >
                              <span class="nk-file-icon-type">
                                <img src="./assets/edit.svg" alt="edit_plan" />
                              </span>
                            </Link>
                          </div>

                          <div class="nk-file-name">
                            <div class="nk-file-name-text">
                              <Link
                                href="/user/plans/savings/update/[create_user_plan]"
                                as={`/user/plans/savings/update/${orders.id}`}
                              >
                                Edit Plan
                              </Link>
                            </div>
                          </div>
                        </div>
                        <ul class="nk-file-desc"></ul>
                      </div>
                    </div>

                    <div class="nk-file-item nk-file" style={{ border: '0px' }}>
                      <div class="nk-file-info">
                        <div class="nk-file-title">
                          <div class="nk-file-icon">
                            <a class="nk-file-icon-link" href="#">
                              <span class="nk-file-icon-type">
                                <img
                                  src="./assets/withdraw.svg"
                                  alt="Withdraw"
                                />
                              </span>
                            </a>
                          </div>
                          <div class="nk-file-name">
                            <div class="nk-file-name-text">
                              <a href="#" class="title">
                                Withdraw
                              </a>
                            </div>
                          </div>
                        </div>
                        <ul class="nk-file-desc"></ul>
                      </div>
                    </div>

                    <div class="nk-file-item nk-file" style={{ border: '0px' }}>
                      <div class="nk-file-info">
                        <div class="nk-file-title">
                          <div class="nk-file-icon">
                            <a onClick={handleClickOpen}>
                              <span class="nk-file-icon-type">
                                <img src="./assets/topup.svg" alt="topup" />
                              </span>
                            </a>
                          </div>
                          <div class="nk-file-name">
                            <div class="nk-file-name-text">
                              <a onClick={handleClickOpen} class="title">
                                <Dialog
                                  open={open}
                                  onClose={handleClose}
                                  aria-labelledby="alert-dialog-title"
                                  aria-describedby="alert-dialog-description"
                                >
                                  <DialogTitle id="alert-dialog-title">
                                    {'Charges'}
                                  </DialogTitle>
                                  <DialogContent>
                                    <DialogContentText id="alert-dialog-description">
                                      Your {orders.interval} due of{' '}
                                      {orders.amount} will be charged
                                    </DialogContentText>
                                  </DialogContent>
                                  <DialogActions>
                                    <Button
                                      onClick={handleClose}
                                      color="primary"
                                    >
                                      Cancel
                                    </Button>

                                    <PaystackButton {...componentProps} />
                                  </DialogActions>
                                </Dialog>
                                Top Up
                              </a>
                            </div>
                          </div>
                        </div>
                        <ul class="nk-file-desc"></ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="nk-fmg-listing nk-block-lg"
              style={{ minHeight: '150px' }}
            >
              <div class="nk-files nk-files-view-grid">
                <div class="col-lg-12">
                  <div class="nk-files-list">
                    <div class="col-lg-4">
                      <div
                        class="nk-file-item nk-file"
                        style={{ width: '100%' }}
                      >
                        <div class="nk-file-info">
                          <div class="nk-file-title">
                            <div class="nk-file-icon">
                              <a class="nk-file-icon-link">
                                <br />
                                SAVING PREFERENCE
                              </a>

                              <hr />
                            </div>

                            <br />

                            <div class="nk-file-name">
                              <div class="nk-file-name-text">
                                <p className="card-title">
                                  <sup>₦</sup>{' '}
                                  <b style={{ fontSize: '25px' }}>
                                    {' '}
                                    {orders.amount}{' '}
                                  </b>{' '}
                                  /{orders.interval}
                                </p>
                              </div>
                            </div>
                          </div>
                          <br />
                          <ul class="nk-file-desc">
                            <li class="date">
                              <a
                                href="#"
                                style={{
                                  fontSize: '13px',
                                  color: '#0066f5',
                                  boxShadow: 'none',
                                  padding: '0',
                                  fontSize: '.95rem',
                                  fontWeight: '500',
                                }}
                              >
                                <em class="icon ni ni-arrow-right-circle-fill"></em>
                                &nbsp;Edit Amount
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-4">
                      <div
                        class="nk-file-item nk-file"
                        style={{ width: '100%' }}
                      >
                        <div class="nk-file-info">
                          <div class="nk-file-title">
                            <div class="nk-file-icon">
                              <a class="nk-file-icon-link">
                                <br />
                                PLAN PROGRESS
                              </a>

                              <hr />
                            </div>

                            <br />

                            <div class="nk-file-name">
                              <div class="nk-file-name-text">
                                <p class="card-title">
                                  <b style={{ fontSize: '25px' }}>0</b>%
                                </p>
                              </div>
                            </div>
                          </div>
                          <br />
                          <ul class="nk-file-desc">
                            <li class="date">
                              <p
                                class="card-text"
                                style={{
                                  fontSize: '.8rem',
                                  color: 'rgba(10,46,101,.6)!important',
                                }}
                              >
                                Your savings target determines your plan
                                progress
                              </p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-4">
                      <div
                        class="nk-file-item nk-file"
                        style={{ width: '100%' }}
                      >
                        <div class="nk-file-info">
                          <div class="nk-file-title">
                            <div class="nk-file-icon">
                              <a class="nk-file-icon-link">
                                <br />
                                AUTOMATION STATUS
                              </a>

                              <hr />
                            </div>

                            <br />

                            <div class="nk-file-name">
                              <div class="nk-file-name-text">
                                <p class="card-title">
                                  <b style={{ fontSize: '25px' }}>Paused</b>
                                </p>
                              </div>
                            </div>
                          </div>
                          <br />
                          <ul class="nk-file-desc">
                            <li class="date">
                              <a
                                href="html/change_status.html"
                                style={{
                                  fontSize: '13px',
                                  color: '#0066f5',
                                  boxShadow: 'none',
                                  padding: '0',
                                  fontSize: '.95rem',
                                  fontWeight: '500',
                                }}
                              >
                                <em class="icon ni ni-arrow-right-circle-fill"></em>
                                &nbsp;Change Status
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="nk-content-body">
                <div class="nk-block nk-block-lg">
                  <div class="nk-block nk-block-lg">
                    <div class="card card-preview">
                      <div class="card-inner">
                        <div class="row">
                          {transaction()}

                          <div class="col-lg-5">
                            <div
                              class="card"
                              style={{
                                padding: '20px 12px',
                                backgroundColor: '#f5f6fa',
                                borderRadius: '8px',
                                height: '250px !important',
                                display: 'block',
                                transition:
                                  'border .3s ease transform .3s ease',
                                border: '1px solid rgba(10,46,101,.09)',
                                background: '#fff',
                                marginBottom: '40px',
                                marginTop: '40px',
                              }}
                            >
                              <div
                                style={{ backgroundColor: '#fff' }}
                                class="card-header border-bottom"
                              >
                                <h6 style={{ marginBottom: '10px' }}>
                                  <div
                                    style={{
                                      fontSize: '.8125rem',
                                      opacity: '.6',
                                      float: 'left',
                                    }}
                                  >
                                    {' '}
                                    PLAN INFO
                                  </div>

                                  <div
                                    style={{
                                      fontSize: ' .8125rem',
                                      opacity: '.6',
                                      float: 'right',
                                    }}
                                  >
                                    {' '}
                                    MY EARNINGS
                                  </div>
                                </h6>
                              </div>
                              <div class="card-inner">
                                <p class="card-title">
                                  <h6 style={{ marginBottom: '10px' }}>
                                    <div
                                      style={{
                                        fontSize: '.8125rem',
                                        opacity: '.6',
                                        float: 'left',
                                      }}
                                    >
                                      Start Date
                                    </div>

                                    <div
                                      style={{
                                        fontSize: '.8125rem',
                                        opacity: '.6',
                                        float: 'right',
                                      }}
                                    >
                                      {' '}
                                      Maturity Date
                                    </div>
                                  </h6>
                                </p>
                                <br />
                                <p
                                  class="card-text"
                                  style={{ fontSize: '.9rem', float: 'left' }}
                                >
                                  Aug 09, 2020
                                </p>

                                <p
                                  class="card-text"
                                  style={{ fontSize: '.9rem', float: 'right' }}
                                >
                                  Nov 07, 2020
                                </p>
                              </div>

                              <div class="card-inner">
                                <p class="card-title">
                                  <h6 style={{ marginBottom: '10px' }}>
                                    <div
                                      style={{
                                        fontSize: '.8125rem',
                                        opacity: '.6',
                                        float: 'left',
                                      }}
                                    >
                                      Plan Type
                                    </div>

                                    <div
                                      style={{
                                        fontSize: '.8125rem',
                                        opacity: '.6',
                                        float: 'right',
                                      }}
                                    >
                                      {' '}
                                      Next Saving Date
                                    </div>
                                  </h6>
                                </p>
                                <br />
                                <p
                                  class="card-text"
                                  style={{
                                    fontSize: '.7rem',
                                    float: 'left!important',
                                  }}
                                >
                                  Regular Savings Plan
                                </p>

                                <p
                                  class="card-text"
                                  style={{ fontSize: '.7rem', float: 'right' }}
                                >
                                  Aug 09, 2020
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );

  return currentuser ? (
    <Fragment>
      <Layout title="Plans | Savings" />
      <body className="nk-body npc-crypto bg-white has-sidebar ">
        <div className="nk-app-root">
          <div className="nk-main">
            <SideBar />

            <div className="nk-wrap ">
              <Header currentuser={currentuser} title={orders.name} />{' '}
              {/* Content Main */}
              {TPayment()}
              {body()}
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

Savings.getInitialProps = async (context, client, currentuser) => {
  const { savings } = context.query;

  const { data } = await client.get(`/api/orders/${savings}`);

  return { orders: data };
};

export default Savings;
