import { Fragment, useEffect, useState } from 'react';
import Layout from '../../../../../components/layout';
import SideBar from '../../../../../components/side-bar';
import Header from '../../../../../components/header';
import Footer from '../../../../../components/footer';
import Router, { useRouter } from 'next/router';
import Skeleton from 'react-loading-skeleton';
import moment from 'moment';
import Link from 'next/link';
import useRequest from '../../../../../hooks/use-request';

const OrderPlan = ({ currentuser, payments,user }) => {
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
        <div class="container-xl wide-lg">
          <div class="nk-content-body">
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
            <div class="nk-block">
              <div class="card card-bordered card-stretch">
                <div class="card-inner-group">
                  <div class="card-inner p-0">
                    <div class="card-inner">
                      <table
                        class="datatable-init nk-tb-list nk-tb-ulist"
                        data-auto-responsive="false"
                      >
                        <thead>
                          <tr class="nk-tb-item nk-tb-head">
                            <th class="nk-tb-col nk-tb-col-check">
                              <div class="custom-control custom-control-sm custom-checkbox notext">
                                <input
                                  type="checkbox"
                                  class="custom-control-input"
                                  id="uid"
                                />
                                <label
                                  class="custom-control-label"
                                  for="uid"
                                ></label>
                              </div>
                            </th>
                           
                            <th class="nk-tb-col tb-col-mb">
                              <span class="sub-text">Amount</span>
                            </th>
                            <th class="nk-tb-col tb-col-mb">
                              <span class="sub-text">User</span>
                            </th>
                            <th class="nk-tb-col tb-col-mb">
                              <span class="sub-text">Debit Type</span>
                            </th>
                            <th class="nk-tb-col tb-col-mb">
                              <span class="sub-text">Status</span>
                            </th>
                           
                           
                            <th class="nk-tb-col nk-tb-col-tools text-right"></th>
                          </tr>
                        </thead>
                        <tbody>
                          {payments.map((payment, i) => {
                            return (
                              <tr key={i} class="nk-tb-item">
                                <td class="nk-tb-col nk-tb-col-check">
                                  <div class="custom-control custom-control-sm custom-checkbox notext">
                                    <input
                                      type="checkbox"
                                      class="custom-control-input"
                                      id="uid1"
                                    />
                                    <label
                                      class="custom-control-label"
                                      for="uid1"
                                    ></label>
                                  </div>
                                </td>
                               
                                <td
                                  class="nk-tb-col tb-col-mb"
                                  data-order={payment.order.amount}
                                >
                                  <span class="tb-amount">
                                    {payment.order.amount}{' '}
                                    <span class="currency">NGN</span>
                                  </span>
                                </td>
                                <td class="nk-tb-col tb-col-md">
                                  <span>
                                    {/* {sub.userId} */}
                                    {getUser(payment.order.userId)}
                                  </span>
                                </td>

                                <td class="nk-tb-col tb-col-md">
                                  <span>
                                    {/* {sub.userId} */}
                                   {payment.order.debitType}
                                  </span>
                                </td>

                                <td class="nk-tb-col tb-col-md">
                                  <span>
                                    {/* {sub.userId} */}
                                   {payment.order.status}
                                  </span>
                                </td>
                              

                               
                                <td class="nk-tb-col nk-tb-col-tools">
                                  <ul class="nk-tb-actions gx-1">
                                    <li>
                                      <div class="drodown">
                                        <a
                                          href="#"
                                          class="dropdown-toggle btn btn-icon btn-trigger"
                                          data-toggle="dropdown"
                                        >
                                          <em class="icon ni ni-more-h"></em>
                                        </a>
                                        <div class="dropdown-menu dropdown-menu-right">
                                          <ul class="link-list-opt no-bdr">
                                            <li>
                                              <a
                                                data-toggle="modal"
                                              >
                                                <em class="icon ni ni-eye"></em>
                                                <span>View Details</span>
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                href="#add-plan"
                                                data-toggle="modal"
                                              >
                                                <em class="icon ni ni-edit"></em>
                                                <span>Edit</span>
                                              </a>
                                            </li>
                                            <li>
                                              <a href="#">
                                                <em class="icon ni ni-na"></em>
                                                <span>Suspend Plan</span>
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
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
                title={`Payment Subscription Lists for ${getUser(user)}`}
              />{' '}
              {/* Content Main */}
              <div className="nk-content nk-content-fluid">
              {body()}
              </div>
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

OrderPlan.getInitialProps = async (context, client, currentuser) => {
  const { user_payment } = context.query;

  const { data } = await client.get(`/api/subscription/user/${user_payment}`);


  return { payments: data, user: user_payment };
};

export default OrderPlan;
