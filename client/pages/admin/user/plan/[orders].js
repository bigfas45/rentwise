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

const OrderPlan = ({ currentuser, subs, user }) => {
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

  const body = () => {
    return (
      <Fragment>
        <div className="container-xl wide-lg">
          <div className="nk-content-body">
            <div className="nk-block-head nk-block-head-sm">
              <div className="nk-block-between">
                <div className="nk-block-head-content">
                  <h3 className="nk-block-title page-title">
                    Plans Subscription Lists
                  </h3>
                  <div className="nk-block-des text-soft">
                    <p>You have total {subs.length} Subscription for {getUser(user)}.</p>
                  </div>
                </div>
                <div className="nk-block-head-content">
                  <div className="toggle-wrap nk-block-tools-toggle">
                    <a
                      href="#"
                      className="btn btn-icon btn-trigger toggle-expand mr-n1"
                      data-target="pageMenu"
                    >
                      <em className="icon ni ni-menu-alt-r"></em>
                    </a>
                    <div
                      className="toggle-expand-content"
                      data-content="pageMenu"
                    >
                      <ul className="nk-block-tools g-3">
                        <li className="nk-block-tools-opt">
                          <div className="drodown">
                            <a
                              href="#"
                              className="dropdown-toggle btn btn-icon btn-primary"
                              data-toggle="dropdown"
                            >
                              <em className="icon ni ni-plus"></em>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <ul className="link-list-opt no-bdr">
                                <li>
                                  <a href="#add-plan" data-toggle="modal">
                                    <span>Add Plan</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                      </ul>
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
                              <span className="sub-text">Title</span>
                            </th>
                            <th className="nk-tb-col tb-col-mb">
                              <span className="sub-text">Amount</span>
                            </th>
                            <th className="nk-tb-col tb-col-mb">
                              <span className="sub-text">User</span>
                            </th>
                            <th className="nk-tb-col tb-col-mb">
                              <span className="sub-text">Plan</span>
                            </th>
                            <th className="nk-tb-col tb-col-md">
                              <span className="sub-text">Start Date </span>
                            </th>

                            <th className="nk-tb-col tb-col-lg">
                              <span className="sub-text">End Date </span>
                            </th>
                            <th className="nk-tb-col tb-col-md">
                              <span className="sub-text">Status</span>
                            </th>
                            <th className="nk-tb-col nk-tb-col-tools text-right"></th>
                          </tr>
                        </thead>
                        <tbody>
                          {subs.map((sub, i) => {
                            return (
                              <tr key={i} className="nk-tb-item">
                                <td className="nk-tb-col nk-tb-col-check">
                                  <div className="custom-control custom-control-sm custom-checkbox notext">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="uid1"
                                    />
                                    <label
                                      className="custom-control-label"
                                      for="uid1"
                                    ></label>
                                  </div>
                                </td>
                                <td className="nk-tb-col">
                                  <div className="user-card">
                                    <div className="user-info">
                                      <span className="tb-lead">
                                        {sub.name}
                                        <span className="dot dot-success d-md-none ml-1"></span>
                                      </span>
                                    </div>
                                  </div>
                                </td>
                                <td
                                  className="nk-tb-col tb-col-mb"
                                  data-order={sub.amount}
                                >
                                  <span className="tb-amount">
                                    {sub.amount}{' '}
                                    <span className="currency">NGN</span>
                                  </span>
                                </td>
                                <td className="nk-tb-col tb-col-md">
                                  <span>
                                    {/* {sub.userId} */}
                                    {getUser(sub.userId)}
                                  </span>
                                </td>
                                <td className="nk-tb-col tb-col-md">
                                  <span>
                                    {' '}
                                   <Link href="/"><a> {sub.plan.title}</a></Link> 
                                  
                                  </span>
                                </td>
                                <td className="nk-tb-col tb-col-md">
                                  <span>
                                    {' '}
                                    {moment(sub.startDate).format('LL')}{' '}
                                  </span>
                                </td>

                                <td className="nk-tb-col tb-col-lg">
                                  <span>
                                    {' '}
                                    {moment(sub.expiresAt).format('LL')}{' '}
                                  </span>
                                </td>
                                <td className="nk-tb-col tb-col-md">
                                  <span className="tb-status text-success">
                                    {sub.expiresAt >
                                    moment().format('DD-MM-YYYY hh:mm:ss') ? (
                                      <span className="tb-status text-success">
                                        Active
                                      </span>
                                    ) : (
                                      <span className="tb-status text-success">
                                        Expired
                                      </span>
                                    )}
                                  </span>
                                </td>
                                <td className="nk-tb-col nk-tb-col-tools">
                                  <ul className="nk-tb-actions gx-1">
                                    <li>
                                      <div className="drodown">
                                        <a
                                          href="#"
                                          className="dropdown-toggle btn btn-icon btn-trigger"
                                          data-toggle="dropdown"
                                        >
                                          <em className="icon ni ni-more-h"></em>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                          <ul className="link-list-opt no-bdr">
                                            <li>
                                              <Link
                                                href="/admin/user/plan/payment/[user_payment]"
                                                as={`/admin/user/plan/payment/${user}`}
                                              >
                                                <a>
                                                  <em className="icon ni ni-eye"></em>
                                                  <span>View Payments</span>
                                                </a>
                                              </Link>
                                            </li>
                                            <li>
                                              <a
                                                href="#add-plan"
                                                data-toggle="modal"
                                              >
                                                <em className="icon ni ni-edit"></em>
                                                <span>Edit</span>
                                              </a>
                                            </li>
                                            <li>
                                              <a href="#">
                                                <em className="icon ni ni-na"></em>
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
                title={`Plan Subscription List for ${getUser(user)} `}
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

OrderPlan.getInitialProps = async (context, client, currentuser) => {
  const { orders } = context.query;

  const { data } = await client.get(`/api/orders/user/${orders}`);

  return { subs: data, user: orders };
};

export default OrderPlan;
