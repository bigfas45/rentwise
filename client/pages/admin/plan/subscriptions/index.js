import { Fragment, useEffect, useState } from 'react';
import Layout from '../../../../components/layout';
import SideBar from '../../../../components/side-bar';
import Header from '../../../../components/header';
import Footer from '../../../../components/footer';
import Router, { useRouter } from 'next/router';
import Skeleton from 'react-loading-skeleton';
import moment from 'moment';
import Link from 'next/link';
import useRequest from '../../../../hooks/use-request';

const Subscription = ({ currentuser, payments }) => {
  const router = useRouter();

  useEffect(() => {
    currentuser && currentuser.userType === 1
      ? ''
      : Router.push('/auth/signin');
  }, []);

  const getUser = (userId) => {
    let email = 'u';
    const { doRequest, errors, loading, dat } = useRequest({
      url: `/api/users/${userId}`,
      method: 'get',

      onSuccess: (data) => {
        email = data.email;
      },
    });
    useEffect(() => {
      doRequest();
    }, []);
    return dat.email;
  };

  var totalPayment1;

  const getUserName = (userId) => {
    let email = 'u';
    const { doRequest, errors, loading, dat } = useRequest({
      url: `/api/users/${userId}`,
      method: 'get',

      onSuccess: (data) => {
        email = data.email;
      },
    });
    useEffect(() => {
      doRequest();
    }, []);
    return dat.firstname + ' ' + dat.firstname;
  };

  const Tpay = () => {
    var totalPayment=0 
    payments.map((payment, i) => {
       totalPayment += payment.order.amount;
       totalPayment;
    });
    return totalPayment
  };

  const body = () => {
    return (
      <Fragment>
        <div className="container-xl wide-lg">
          <div className="nk-content-body">
            <div className="nk-block-head">
              <div className="nk-block-between-md"></div>
            </div>
            <div className="nk-block"></div>
            <div className="nk-block nk-block-lg">
              <div className="row g-gs">
                <div className="col-md-6">
                  <div className="card card-bordered">
                    <div className="card-inner">
                      <div className="nk-wg5">
                        <div className="nk-wg5-title">
                          <h6 className="title overline-title">
                            Total Savings
                          </h6>
                        </div>
                        <div className="nk-wg5-text">
                          <div className="nk-wg5-amount">
                            <div className="amount">
                              {' '}
                              {Tpay()}
                              <span className="currency"> NGN</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card card-bordered">
                    <div className="card-inner">
                      <div className="nk-wg5">
                        <div className="nk-wg5-title">
                          <h6 className="title overline-title">
                            Total Withdraw
                          </h6>
                        </div>
                        <div className="nk-wg5-text">
                          <div className="nk-wg5-amount">
                            <div className="amount">
                              {' '}
                            0
                              <span className="currency currency-btc"> NGN</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="nk-block">
              <div className="card card-bordered card-stretch">
                <div className="card-inner-group">
                  <div className="card-inner p-0">
                    <div className="card-inner">
                      <table
                        className="datatable-init nk-tb-list nk-tb-ulist"
                        data-auto-responsive="false"
                      >
                        <thead>
                          <tr className="nk-tb-item nk-tb-head">
                            <th className="nk-tb-col nk-tb-col-check">
                              <div className="custom-control custom-control-sm custom-checkbox notext">
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  id="uid"
                                />
                                <label
                                  className="custom-control-label"
                                  for="uid"
                                ></label>
                              </div>
                            </th>
                            <th className="nk-tb-col">
                              <span className="sub-text">User</span>
                            </th>
                            <th className="nk-tb-col tb-col-mb">
                              <span className="sub-text">Amount</span>
                            </th>

                            <th className="nk-tb-col tb-col-md">
                              <span className="sub-text">Plan</span>
                            </th>

                            <th className="nk-tb-col tb-col-lg">
                              <span className="sub-text">Transaction Date</span>
                            </th>
                            <th className="nk-tb-col tb-col-md">
                              <span className="sub-text">Status</span>
                            </th>
                            <th className="nk-tb-col nk-tb-col-tools text-right"></th>
                          </tr>
                        </thead>
                        <tbody>
                          {payments.map((payment, i) => {
                           
                            return (
                              <tr key={i} className="nk-tb-item">
                                <td className="nk-tb-col nk-tb-col-check">
                                  <div className="nk-tnx-type-icon bg-warning-dim text-warning">
                                    <em className="icon ni ni-arrow-up-right"></em>
                                  </div>
                                </td>
                                <td className="nk-tb-col">
                                  <div className="user-card">
                                    <div className="user-info">
                                      <span className="tb-lead">
                                        {getUserName(payment.order.userId)}{' '}
                                    
                                        <span className="dot dot-warning d-md-none ml-1"></span>
                                      </span>
                                      <span>
                                        {' '}
                                        {getUser(payment.order.userId)}{' '}
                                      </span>
                                    </div>
                                  </div>
                                </td>
                                <td
                                  className="nk-tb-col tb-col-mb"
                                  data-order="580.00"
                                >
                                  <span className="tb-amount">
                                    {payment.order.amount}{' '}
                                    <span className="currency">NGN</span>
                                  </span>
                                </td>

                                <td className="nk-tb-col tb-col-md">
                                  <span>{}</span>
                                </td>

                                <td className="nk-tb-col tb-col-lg">
                                  <span>
                                    {' '}
                                    {moment(payment.createdAt).format(
                                      'LL'
                                    )}{' '}
                                  </span>
                                </td>
                                <td className="nk-tb-col tb-col-md">
                                  <span className="badge badge-sm badge-warning">
                                    {}
                                  </span>
                                </td>
                                <td className="nk-tb-col nk-tb-col-tools">
                                  <ul className="nk-tb-actions gx-1">
                                    <li>
                                      {/* <div className="drodown">
                                        <a
                                          href="#"
                                          className="dropdown-toggle btn btn-icon btn-trigger"
                                          data-toggle="dropdown"
                                        >
                                          <em className="icon ni ni-more-h"></em>
                                        </a> */}
                                        {/* <div className="dropdown-menu dropdown-menu-right">
                                    <ul className="link-list-opt no-bdr">
                                      <li>
                                        <a href="admin/user_profile.php">
                                          <em className="icon ni ni-eye"></em>
                                          <span>View Details</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <em className="icon ni ni-repeat"></em>
                                          <span>Transaction</span>
                                        </a>
                                      </li>{' '}
                                      <li>
                                        <a href="#">
                                          <em className="icon ni ni-na"></em>
                                          <span>Suspend User</span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div> */}
                                      {/* </div> */}
                                    </li>
                                  </ul>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
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
      <Layout title="Admin Dashboard" description="Admin Dashboard" />
      <body className="nk-body npc-crypto bg-white has-sidebar ">
        <div className="nk-app-root">
          <div className="nk-main">
            <SideBar />

            <div className="nk-wrap ">
              <Header
                currentuser={currentuser}
                title="Payment Subscription Lists"
              />{' '}
              {/* Content Main */}
              <div className="nk-content nk-content-fluid">{body()}</div>
              {/* Content Main */}
              {/* Footer */}
              <Footer /> {/* Footer */}{' '}
            </div>
          </div>
        </div>
      </body>
      {/* {
        currentuser && currentuser.userType === 0 ? <h1>You are signed in</h1> : <h1>You are not signed in</h1>
    }  */}{' '}
    </Fragment>
  ) : (
    <Skeleton height={40} count={5} />
  );
};

Subscription.getInitialProps = async (context, client, currentuser) => {
  const { data } = await client.get(`/api/subscription/`);

  return { payments: data };
};

export default Subscription;
