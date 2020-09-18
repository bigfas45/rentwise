import { Fragment, useEffect, useState } from 'react';
import Layout from '../../../components/layout';
import SideBar from '../../../components/side-bar';
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import Router, { useRouter } from 'next/router';
import Skeleton from 'react-loading-skeleton';
import Link from 'next/link';
import useRequest from '../../../hooks/use-request';
import { Spinner, Button } from 'reactstrap';

const UserList = ({ currentuser, users }) => {
  const router = useRouter();

  useEffect(() => {
    currentuser && currentuser.userType === 1
      ? ''
      : Router.push('/auth/signin');
  }, []);

  const [subject, setSubject] = useState('');
  const [emailBody, setBody] = useState('');
  const { doRequest, errors, loading } = useRequest({
    url: '/api/subscription/email',
    method: 'post',
    body: {
      subject,
      emailBody,
      emailTo: users.email,
    },

    onSuccess: (data) => {
      Router.push('/admin/user/user-list');
    },
  });

  const onSubmit = async (event) => {
    event.preventDefault();

    doRequest();
  };

  const balance = (userId) => {
    const { doRequest, errors, loading, dat } = useRequest({
      url: `/api/subscription/user/${userId}`,
      method: 'get',

      onSuccess: (data) => {
        //  console.log(data);
      },
    });
    useEffect(() => {
      doRequest();
    }, []);



   dat.map((dt, i) => {
      console.log(dt)
   })
  };

  const body = () => {
    return (
      <Fragment>
        <div className="container-xl wide-lg">
          <div className="nk-content-body">
            <div className="nk-block-head nk-block-head-sm">
              <div className="nk-block-between">
                <div className="nk-block-head-content">
                  <h3 className="nk-block-title page-title">Users Lists</h3>
                  <div className="nk-block-des text-soft">
                    <p>You have total {users.length} users.</p>
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
                                  <a href="admin/add_user.php">
                                    <span>Add User</span>
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
                                  htmlFor="uid"
                                ></label>
                              </div>
                            </th>
                            <th className="nk-tb-col">
                              <span className="sub-text">User</span>
                            </th>
                            <th className="nk-tb-col tb-col-mb">
                              <span className="sub-text">Balance</span>
                            </th>
                            <th className="nk-tb-col tb-col-md">
                              <span className="sub-text">Phone</span>
                            </th>
                            <th className="nk-tb-col tb-col-lg">
                              <span className="sub-text">Verified</span>
                            </th>
                            <th className="nk-tb-col tb-col-lg">
                              <span className="sub-text">Last Login</span>
                            </th>
                            <th className="nk-tb-col tb-col-md">
                              <span className="sub-text">Status</span>
                            </th>
                            <th className="nk-tb-col nk-tb-col-tools text-right"></th>
                          </tr>
                        </thead>
                        <tbody>
                          {users.map((user, i) => {
                            return (
                              <tr key={i} className="nk-tb-item">
                                <td className="nk-tb-col nk-tb-col-check">
                                  <div className="custom-control custom-control-sm custom-checkbox notext">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="uid2"
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor="uid2"
                                    ></label>
                                  </div>
                                </td>
                                <td className="nk-tb-col">
                                  <div className="user-card">
                                    <div className="user-avatar bg-success d-none d-sm-flex">
                                      <span>AL</span>
                                    </div>
                                    <div className="user-info">
                                      <span className="tb-lead">
                                        {user.firstname} {user.lastname}
                                        <span className="dot dot-warning d-md-none ml-1"></span>
                                      </span>
                                      <span> {user.email} </span>
                                    </div>
                                  </div>
                                </td>
                                <td
                                  className="nk-tb-col tb-col-mb"
                                  data-order="580.00"
                                >
                                  <span className="tb-amount">
                                00.00 <span className="currency">NGN</span>
                                  </span>
                                </td>
                                <td className="nk-tb-col tb-col-md">
                                  <span> {user.telephone} </span>
                                </td>
                                <td
                                  className="nk-tb-col tb-col-lg"
                                  data-order="Email Verified - Kyc Submited"
                                >
                                  <ul className="list-status">
                                    <li>
                                      <em className="icon text-success ni ni-check-circle"></em>{' '}
                                      <span>Email</span>
                                    </li>
                                    <li>
                                      <em className="icon text-info ni ni-alert-circle"></em>{' '}
                                      <span>KYC</span>
                                    </li>
                                  </ul>
                                </td>
                                <td className="nk-tb-col tb-col-lg">
                                  <span>07 Feb 2020</span>
                                </td>
                                <td className="nk-tb-col tb-col-md">
                                  <span className="tb-status text-warning">
                                    {user.status === 1 ? 'Active' : 'Suspended'}
                                  </span>
                                </td>
                                <td className="nk-tb-col nk-tb-col-tools">
                                  <ul className="nk-tb-actions gx-1">
                                    <li className="nk-tb-action-hidden">
                                      <a
                                        href="#"
                                        className="btn btn-trigger btn-icon"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        title="plan"
                                      >
                                        <em className="icon ni ni-wallet-fill"></em>
                                      </a>
                                    </li>
                                    <li className="nk-tb-action-hidden">
                                      <a
                                        data-toggle="modal"
                                        data-target="#modalForm"
                                        className="btn btn-trigger btn-icon"
                                        title="Send Email"
                                      >
                                        <em className="icon ni ni-mail-fill"></em>
                                      </a>
                                    </li>

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
                                                href="/admin/user/[user_details]"
                                                as={`/admin/user/${user.id}`}
                                              >
                                                <a>
                                                  <em className="icon ni ni-eye"></em>
                                                  <span>View Details</span>
                                                </a>
                                              </Link>
                                            </li>
                                            <li>
                                            <Link
                                                href="/admin/user/plan/[orders]"
                                                as={`/admin/user/plan/${user.id}`}
                                              >
                                              <a >
                                                <em className="icon ni ni-repeat"></em>
                                                <span>Transaction</span>
                                              </a>
                                              </Link>
                                            </li>{' '}
                                            <li>
                                              <Link
                                                href="/admin/user/suspend/[suspend_user]"
                                                as={`/admin/user/suspend/${user.id}`}
                                              >
                                                <a>
                                                  <em className="icon ni ni-na"></em>
                                                  <span>
                                                    {' '}
                                                    {user.status === 1
                                                      ? 'Suspend User '
                                                      : 'UnSuspend User'}
                                                  </span>
                                                </a>
                                              </Link>
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
        {modalF()}
      </Fragment>
    );
  };

  const modalF = () => {
    return (
      <Fragment>
        <div className="modal fade" tabIndex="-1" id="modalForm">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Send Email</h5>
                <a
                  href="#"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <em className="icon ni ni-cross"></em>
                </a>
              </div>
              <div className="modal-body">
                <form onSubmit={onSubmit}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="full-name">
                      Subject
                    </label>
                    <div className="form-control-wrap">
                      <input
                        type="text"
                        className="form-control"
                        id="full-name"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="email-address">
                      Email address
                    </label>
                    <div className="form-control-wrap">
                      <textarea
                        type="text"
                        className="form-control"
                        id="email-address"
                        value={emailBody}
                        onChange={(e) => setBody(e.target.value)}
                        required
                      />
                    </div>
                  </div>

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
                        value="Send"
                      />
                    )}{' '}
                  </div>
                </form>
              </div>
              <div className="modal-footer bg-light">
                <span className="sub-text">Modal Footer Text</span>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
      // <!-- Modal Tabs -->
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
              <Header currentuser={currentuser} title="User Creation" />{' '}
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

UserList.getInitialProps = async (context, client, currentuser) => {
  const { data } = await client.get(`/api/users`);

  return { users: data };
};

export default UserList;
