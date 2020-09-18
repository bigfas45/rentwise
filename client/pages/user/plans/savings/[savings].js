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
        setSub(data)
        console.log(data)
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
               return(
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
                  <span class="tb-sub"> {moment(s.createdAt).format('LL')}   </span>
                </div>
                {/* <div class="nk-tb-col tb-col-xxl">
                  <span class="tb-sub">10:45 PM1</span>
                </div>
                <div class="nk-tb-col tb-col-xxl">
                  <span class="tb-sub text-primary">RE2309232</span>
                </div> */}
                <div class="nk-tb-col tb-col-sm text-right">
                  <span class="tb-sub tb-amount">
                 {/* {s.order.amount}  <span>NGN</span> */}
                  </span>
                </div>
              
              </div>
               )
             })}
            





            </div>
          </div>
        </div>
      </div>
    );
  };

  const body = () => (
    <div className="nk-content nk-content-fluid">
      <div className="container-xl wide-lg">
        <div className="col-lg-12">
          <div
            className="row"
            style={{ backgroundColor: '#0062f5!important', height: '10%' }}
          >
            <div className="col-lg-4">
              {/* <!-- With Only Header --> */}
              <div
                className="card"
                style={{
                  padding: '20px 12px',
                  backgroundColor: '#0062f5!important',
                  display: 'block',
                  transition: 'border .3s ease, transform .3s ease',
                  marginBottom: '10px',
                }}
              >
                <div
                  className="card-header"
                  style={{ backgroundColor: '#0062f5' }}
                >
                  <h6
                    style={{
                      fontSize: '1.5rem',
                      fontWeight: 600,
                      opacity: '.6',
                      color: 'white',
                    }}
                  >
                    Principal
                  </h6>
                </div>
                <div className="card-inner">
                  <p className="card-title">
                    <sup>₦</sup> <b style={{ fontSize: '25px' }}> {state} </b>
                    .00
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              {/* <!-- With Only Header --> */}
              <div
                className="card"
                style={{
                  padding: '20px 12px',
                  backgroundColor: '#0062f5!important',
                  display: 'block',
                  transition: 'border .3s ease, transform .3s ease',
                  marginBottom: '10px',
                }}
              >
                <div
                  className="card-header"
                  style={{ backgroundColor: '#0062f5' }}
                >
                  <h6
                    style={{
                      fontSize: '1.5rem',
                      fontWeight: 600,
                      opacity: '.6',
                      color: 'white',
                    }}
                  >
                    Returns
                  </h6>
                </div>
                <div className="card-inner">
                  <p className="card-title">
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

            <div className="col-lg-4">
              {/* <!-- With Only Header --> */}
              <div
                className="card"
                style={{
                  padding: '20px 12px',
                  backgroundColor: '#0062f5!important',
                  display: 'block',
                  transition: 'border .3s ease, transform .3s ease',
                  marginBottom: '10px',
                  zIndex: '1',
                }}
              >
                <div
                  className="card-header"
                  style={{ backgroundColor: '#0062f5' }}
                >
                  <h6
                    style={{
                      fontSize: '1.5rem',
                      fontWeight: 600,
                      opacity: '.6',
                      color: 'white',
                    }}
                  >
                    Interest Rate P.A.
                  </h6>
                </div>
                <div className="card-inner">
                  <p className="card-title">
                    <b style={{ fontSize: '25px' }}>
                      {orders.plan.returnPercentage}
                    </b>
                    %
                  </p>
                </div>
              </div>
            </div>
          </div>

          <br />

          <div
            className="col-lg-10"
            style={{ marginLeft: '20%', marginRight: '20%' }}
          >
            <div
              className="row"
              style={{ backgroundColor: '#fff!important', height: '10%' }}
            >
              <div className="col-lg-3">
                {/* <!-- With Only Header --> */}
                <Link
                  href="/user/plans/savings/update/[create_user_plan]"
                  as={`/user/plans/savings/update/${orders.id}`}
                >
                  <a>
                    <div
                      className="card"
                      style={{
                        padding: '20px 12px',
                        backgroundColor: '#0062f5!important',
                        display: 'block',
                        transition: 'border .3s ease, transform .3s ease',
                        marginBottom: '10px',
                      }}
                    >
                      <div
                        style={{ backgroundColor: '#fff' }}
                        className="card-header"
                      >
                        <img
                          src="/assets/edit.svg"
                          alt="image2"
                          height="40"
                          width="40"
                        />
                      </div>
                      <div className="card-inner">
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
                          &nbsp;Edit Plan
                        </a>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>

              <div className="col-lg-3">
                {/* <!-- With Only Header --> */}
                <a href="html/withdraw.html">
                  <div
                    className="card"
                    style={{
                      padding: '20px 12px',
                      backgroundColor: '#0062f5!important',
                      display: 'block',
                      transition: 'border .3s ease, transform .3s ease',
                      marginBottom: '10px',
                    }}
                  >
                    <div
                      style={{ backgroundColor: '#fff' }}
                      className="card-header"
                    >
                      <h6
                        style={{
                          fontSize: '1.5rem',
                          fontWeight: 600,
                          opacity: '.6',
                        }}
                      >
                        <p className="card-title">
                          <img
                            src="/assets/withdraw.svg"
                            alt="image2"
                            height="40"
                            width="40"
                          />
                        </p>
                      </h6>
                    </div>
                    <div className="card-inner">
                      <a
                        href="html/withdraw.html"
                        style={{
                          fontSize: '13px',
                          color: '#0066f5',
                          boxShadow: 'none',
                          padding: '0',
                          fontSize: '.95rem',
                          fontWeight: 500,
                        }}
                      >
                        &nbsp; Withdraw
                      </a>
                    </div>
                  </div>
                </a>
              </div>

              <div className="col-lg-3">
                {/* <!-- With Only Header --> */}
                <a onClick={handleClickOpen}>
                  <div
                    className="card"
                    style={{
                      padding: '20px 12px',
                      backgroundColor: '#0062f5!important',
                      display: 'block',
                      transition: 'border .3s ease, transform .3s ease',
                      marginBottom: '10px',
                    }}
                  >
                    <div
                      style={{ backgroundColor: '#fff' }}
                      className="card-header"
                    >
                      <h6
                        style={{
                          fontSize: '1.5rem',
                          fontWeight: 600,
                          opacity: '.6',
                        }}
                      >
                        <p className="card-title">
                          <img
                            src="/assets/topup.svg"
                            alt="image2"
                            height="40"
                            width="40"
                          />
                        </p>
                      </h6>
                    </div>
                    <div className="card-inner">
                      <a
                        style={{
                          fontSize: '13px',
                          color: '#0066f5',
                          boxShadow: 'none',
                          padding: '0',
                          fontSize: '.95rem',
                          fontWeight: 500,
                        }}
                      >
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
                              Your {orders.interval} due of {orders.amount} will
                              be charged
                            </DialogContentText>
                          </DialogContent>
                          <DialogActions>
                            <Button onClick={handleClose} color="primary">
                              Cancel
                            </Button>

                            <PaystackButton {...componentProps} />
                          </DialogActions>
                        </Dialog>
                        &nbsp; Top Up
                      </a>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="nk-content-body">
            <div className="nk-block nk-block-lg">
              <div className="nk-block nk-block-lg">
                <div className="card card-preview">
                  <div className="card-inner">
                    <div className="row">
                      <div className="col-lg-4">
                        <div
                          className="card"
                          style={{
                            padding: '20px 12px',
                            backgroundColor: '#f5f6fa',
                            borderRadius: '8px',
                            height: '220px !important',
                            display: 'block',
                            transition: 'border .3s ease,transform .3s ease',
                            border: '1px solid rgba(10,46,101,.09)',
                            background: '#fff',
                            marginBottom: '40px',
                            marginTop: '20px',
                          }}
                        >
                          <div
                            style={{ backgroundColor: '#fff' }}
                            className="card-header border-bottom"
                          >
                            <h6
                              style={{
                                fontSize: '.8125rem',
                                fontWeight: 600,
                                opacity: '.6',
                              }}
                            >
                              SAVING PREFERENCE
                            </h6>
                          </div>
                          <div className="card-inner">
                            <p className="card-title">
                              <sup>₦</sup>{' '}
                              <b style={{ fontSize: '25px' }}>
                                {' '}
                                {orders.amount}{' '}
                              </b>{' '}
                              /{orders.interval}
                            </p>

                            <a
                              href="#"
                              style={{
                                fontSize: '13px',
                                color: '#0066f5',
                                boxShadow: 'none',
                                padding: '0',
                                fontSize: '.95rem',
                                fontWeight: 500,
                              }}
                            >
                              <em className="icon ni ni-arrow-right-circle-fill"></em>
                              &nbsp;Edit Amount
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-4">
                        <div
                          className="card"
                          style={{
                            padding: '20px 12px',
                            backgroundColor: '#f5f6fa',
                            borderRadius: '8px',
                            height: '220px !important',
                            display: 'block',
                            transition: 'border .3s ease,transform .3s ease',
                            border: '1px solid rgba(10,46,101,.09)',
                            background: '#fff',
                            marginBottom: '40px',
                            marginTop: '20px',
                          }}
                        >
                          <div
                            style={{ backgroundColor: '#fff' }}
                            className="card-header border-bottom"
                          >
                            <h6
                              style={{
                                fontSize: '.8125rem',
                                fontWeight: '600',
                                opacity: '.6',
                              }}
                            >
                              PLAN PROGRESS
                            </h6>
                          </div>
                          <div className="card-inner">
                            <p className="card-title">
                              <b style={{ fontSize: '25px' }}>50</b>%
                            </p>

                            <p className="card-text">
                              <div className="progress">
                                <div
                                  className="progress-bar progress-bar-striped"
                                  data-progress="50"
                                ></div>
                              </div>
                            </p>

                            <p
                              className="card-text"
                              style={{
                                fontSize: '.8rem',
                                color: 'rgba(10,46,101,.6)!important',
                              }}
                            >
                              Your savings target determines your plan progress
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-4">
                        <div
                          className="card"
                          style={{
                            padding: ' 20px 12px',
                            backgroundColor: '#f5f6fa',
                            borderRadius: '8px',
                            height: '220px !important',
                            display: 'block',
                            transition: 'border .3s ease,transform .3s ease',
                            border: ' 1px solid rgba(10,46,101,.09)',
                            background: '#fff',
                            marginBottom: '40px',
                            marginTop: '40px',
                          }}
                        >
                          <div
                            style={{ backgroundColor: '#fff' }}
                            className="card-header border-bottom"
                          >
                            <h6
                              style={{
                                fontSize: '.8125rem',
                                fontWeight: 600,
                                opacity: '.6',
                              }}
                            >
                              AUTOMATION STATUS
                            </h6>
                          </div>
                          <div className="card-inner">
                            <p className="card-title">
                              <b style={{ fontSize: '25px' }}>Paused</b>
                            </p>

                            <a
                              href="html/change_status.html"
                              style={{
                                fontSize: '13px',
                                color: '#0066f5',
                                boxShadow: 'none',
                                padding: '0',
                                fontSize: '.95rem',
                                fontWeight: 500,
                              }}
                            >
                              <em className="icon ni ni-arrow-right-circle-fill"></em>
                              &nbsp;Change Status
                            </a>
                          </div>
                        </div>
                      </div>

                      {/* Transaction */}

                      {transaction()}

                      <div class="col-xl-5 col-xxl-4">
                        <div class="row g-gs">
                          <div class="col-md-6 col-lg-12">
                            <div class="card card-bordered card-full">
                              <div class="card-inner">
                                <div class="card-title-group align-start mb-2">
                                  <div class="card-title">
                                    <h6 class="title">My Plans </h6>
                                    
                                  </div>
                                  <div class="card-tools mt-n1 mr-n1">
                                    <div class="drodown">
                                      <a
                                        href="#"
                                        class="dropdown-toggle btn btn-icon btn-trigger"
                                        data-toggle="dropdown"
                                      >
                                        <em class="icon ni ni-more-h"></em>
                                      </a>
                                      <div class="dropdown-menu dropdown-menu-sm dropdown-menu-right">
                                        <ul class="link-list-opt no-bdr">
                                          <li>
                                            <a href="#" class="active">
                                              <span>15 Days</span>
                                            </a>
                                          </li>
                                          <li>
                                            <a href="#">
                                              <span>30 Days</span>
                                            </a>
                                          </li>
                                          <li>
                                            <a href="#">
                                              <span>3 Months</span>
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="card-inner">
                                <p className="card-title">
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
                                  className="card-text"
                                  style={{ fontSize: '.9rem', float: 'left' }}
                                >
                                  {moment(orders.startDate).format('LL')}
                                </p>

                                <p
                                  className="card-text"
                                  style={{ fontSize: '.9rem', float: 'right' }}
                                >
                                  {moment(orders.expiresAt).format('LL')}
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
                                    fontSize: '.9rem',
                                    float: 'left!important',
                                  }}
                                >
                                  Regular Savings Plan
                                </p>

                                <p
                                  class="card-text"
                                  style={{ fontSize: '.9rem', float: 'right' }}
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
    </div>
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
