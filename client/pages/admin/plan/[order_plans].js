import { Fragment, useEffect, useState } from 'react';
import Layout from '../../../components/layout';
import SideBar from '../../../components/side-bar';
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import Router, { useRouter } from 'next/router';
import Skeleton from 'react-loading-skeleton';
import moment from 'moment';
import Link from 'next/link';
import useRequest from '../../../hooks/use-request';

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
        <div class="container-xl wide-lg">
          <div class="nk-content-body">
            <div class="nk-block-head nk-block-head-sm">
              <div class="nk-block-between">
                <div class="nk-block-head-content">
                  <h3 class="nk-block-title page-title">
                    Plans Subscription Lists
                  </h3>
                  <div class="nk-block-des text-soft">
                    <p>You have total {subs.length} Subscription.</p>
                  </div>
                </div>
                <div class="nk-block-head-content">
                  <div class="toggle-wrap nk-block-tools-toggle">
                    <a
                      href="#"
                      class="btn btn-icon btn-trigger toggle-expand mr-n1"
                      data-target="pageMenu"
                    >
                      <em class="icon ni ni-menu-alt-r"></em>
                    </a>
                    <div class="toggle-expand-content" data-content="pageMenu">
                      <ul class="nk-block-tools g-3">
                        <li class="nk-block-tools-opt">
                          <div class="drodown">
                            <a
                              href="#"
                              class="dropdown-toggle btn btn-icon btn-primary"
                              data-toggle="dropdown"
                            >
                              <em class="icon ni ni-plus"></em>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right">
                              <ul class="link-list-opt no-bdr">
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
                            <th class="nk-tb-col">
                              <span class="sub-text">Title</span>
                            </th>
                            <th class="nk-tb-col tb-col-mb">
                              <span class="sub-text">Amount</span>
                            </th>
                            <th class="nk-tb-col tb-col-mb">
                              <span class="sub-text">User</span>
                            </th>
                            <th class="nk-tb-col tb-col-md">
                              <span class="sub-text">Start Date </span>
                            </th>

                            <th class="nk-tb-col tb-col-lg">
                              <span class="sub-text">End Date </span>
                            </th>
                            <th class="nk-tb-col tb-col-md">
                              <span class="sub-text">Status</span>
                            </th>
                            <th class="nk-tb-col nk-tb-col-tools text-right"></th>
                          </tr>
                        </thead>
                        <tbody>
                          {subs.map((sub, i) => {
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
                                <td class="nk-tb-col">
                                  <div class="user-card">
                                    <div class="user-info">
                                      <span class="tb-lead">
                                        {sub.name}
                                        <span class="dot dot-success d-md-none ml-1"></span>
                                      </span>
                                    </div>
                                  </div>
                                </td>
                                <td
                                  class="nk-tb-col tb-col-mb"
                                  data-order={sub.amount}
                                >
                                  <span class="tb-amount">
                                    {sub.amount}{' '}
                                    <span class="currency">NGN</span>
                                  </span>
                                </td>
                                <td class="nk-tb-col tb-col-md">
                                  <span>
                                    {/* {sub.userId} */}
                                    {getUser(sub.userId)}
                                  </span>
                                </td>
                                <td class="nk-tb-col tb-col-md">
                                  <span>
                                    {' '}
                                    {moment(sub.startDate).format('LL')}{' '}
                                  </span>
                                </td>

                                <td class="nk-tb-col tb-col-lg">
                                  <span>
                                    {' '}
                                    {moment(sub.expiresAt).format('LL')}{' '}
                                  </span>
                                </td>
                                <td class="nk-tb-col tb-col-md">
                                  <span class="tb-status text-success">
                                    {sub.expiresAt >
                                    moment().format('DD-MM-YYYY hh:mm:ss') ? (
                                      <span class="tb-status text-success">
                                        Active
                                      </span>
                                    ) : (
                                      <span class="tb-status text-success">
                                        Expired
                                      </span>
                                    )}
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
                                              <Link
                                                href="/admin/plan/subscriptions/[order_subscriptions]"
                                                as={`/admin/plan/subscriptions/${sub.id}`}
                                              >
                                                <a>
                                                  <em class="icon ni ni-eye"></em>
                                                  <span>View Details</span>
                                                </a>
                                              </Link>
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
                title="Plans Subscription List"
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
  const { order_plans } = context.query;

  const { data } = await client.get(`/api/orders/plan/${order_plans}`);
  const user = 'afasina@nasdng.com';

  return { subs: data, user: user };
};

export default OrderPlan;
