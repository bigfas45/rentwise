import { Fragment, useEffect } from 'react';
import Layout from '../../../components/layout';
import SideBar from '../../../components/side-bar';
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import Router, { useRouter } from 'next/router';
import Skeleton from 'react-loading-skeleton';
import Link from 'next/link';
const UserDetails = ({ currentuser, user }) => {
  const router = useRouter();
  console.log(user);

  useEffect(() => {
    currentuser && currentuser.userType === 1
      ? ''
      : Router.push('/auth/signin');
  }, []);

  const body = () => {
    return (
      <Fragment>
        <div className="container-xl wide-lg">
          <div className="nk-content-body">
            <div className="nk-block">
              <div className="card card-bordered">
                <div className="card-aside-wrap">
                  <div className="card-inner card-inner-lg">
                    <div className="nk-block-head nk-block-head-lg">
                      <div className="nk-block-between">
                        <div className="nk-block-head-content">
                          <h4 className="nk-block-title">Personal Information</h4>
                          <div className="nk-block-des"></div>
                        </div>
                        <div className="nk-block-head-content align-self-start d-lg-none">
                          <a
                            href="#"
                            className="toggle btn btn-icon btn-trigger mt-n1"
                            data-target="userAside"
                          >
                            <em className="icon ni ni-menu-alt-r"></em>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="nk-block">
                      <div className="nk-data data-list">
                        <div className="data-head">
                          <h6 className="overline-title">Basics</h6>
                        </div>
                        <div
                          className="data-item"
                          data-toggle="modal"
                          data-target="#profile-edit"
                        >
                          <div className="data-col">
                            <span className="data-label">Full Name</span>
                            <span className="data-value">{user.firstname} {user.lastname} </span>
                          </div>
                          <div className="data-col data-col-end">
                            <span className="data-more">
                              <em className="icon ni ni-forward-ios"></em>
                            </span>
                          </div>
                        </div>
                       
                        <div className="data-item">
                          <div className="data-col">
                            <span className="data-label">Email</span>
                            <span className="data-value"> {user.email} </span>
                          </div>
                          <div className="data-col data-col-end">
                            <span className="data-more disable">
                              <em className="icon ni ni-lock-alt"></em>
                            </span>
                          </div>
                        </div>
                        <div
                          className="data-item"
                          data-toggle="modal"
                          data-target="#profile-edit"
                        >
                          <div className="data-col">
                            <span className="data-label">Phone Number</span>
                            <span className="data-value text-soft">
                             {user.telephone}
                            </span>
                          </div>
                          <div className="data-col data-col-end">
                            <span className="data-more">
                              <em className="icon ni ni-forward-ios"></em>
                            </span>
                          </div>
                        </div>
                        <div
                          className="data-item"
                          data-toggle="modal"
                          data-target="#profile-edit"
                        >
                          <div className="data-col">
                            <span className="data-label">Date of Birth</span>
                            <span className="data-value"> {user.dob ? user.dob : 'Not yet added'} </span>
                          </div>
                          <div className="data-col data-col-end">
                            <span className="data-more">
                              <em className="icon ni ni-forward-ios"></em>
                            </span>
                          </div>
                        </div>
                        <div
                          className="data-item"
                          data-toggle="modal"
                          data-target="#profile-edit"
                          data-tab-target="#address"
                        >
                          <div className="data-col">
                            <span className="data-label">Address</span>
                            <span className="data-value">
                            {user.address ? user.address : 'Not yet added'}
                            </span>
                          </div>
                          <div className="data-col data-col-end">
                            <span className="data-more">
                              <em className="icon ni ni-forward-ios"></em>
                            </span>
                          </div>
                        </div>
                        <div
                          className="data-item"
                          data-toggle="modal"
                          data-target="#profile-edit"
                          data-tab-target="#address"
                        >
                          <div className="data-col">
                            <span className="data-label">Account Number</span>
                            <span className="data-value">
                            {user.bvn ? user.bvn : 'Not yet added'}
                            </span>
                          </div>
                          <div className="data-col data-col-end">
                            <span className="data-more">
                              <em className="icon ni ni-forward-ios"></em>
                            </span>
                          </div>
                        </div>
                        <div
                          className="data-item"
                          data-toggle="modal"
                          data-target="#profile-edit"
                          data-tab-target="#address"
                        >
                          <div className="data-col">
                            <span className="data-label">Bank Name</span>
                            <span className="data-value">
                            {user.bank ? user.bank : 'Not yet added'}
                            </span>
                          </div>
                          <div className="data-col data-col-end">
                            <span className="data-more">
                              <em className="icon ni ni-forward-ios"></em>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="card-aside card-aside-left user-aside toggle-slide toggle-slide-left toggle-break-lg"
                    data-content="userAside"
                    data-toggle-screen="lg"
                    data-toggle-overlay="true"
                  >
                    <div className="card-inner-group" data-simplebar>
                      <div className="card-inner">
                        <div className="user-card">
                          <div className="user-avatar bg-primary">
                            <span>{user.firstname.charAt(0)}{user.lastname.charAt(0)}</span>
                          </div>
                          <div className="user-info">
                            <span className="lead-text">{user.firstname} {user.lastname}</span>
                            <span className="sub-text"> {user.email} </span>
                          </div>
                          <div className="user-action">
                            <div className="dropdown">
                              <a
                                className="btn btn-icon btn-trigger mr-n2"
                                data-toggle="dropdown"
                                href="#"
                              >
                                <em className="icon ni ni-more-v"></em>
                              </a>
                              <div className="dropdown-menu dropdown-menu-right">
                                <ul className="link-list-opt no-bdr">
                                  <li>
                                    <a href="#">
                                      <em className="icon ni ni-camera-fill"></em>
                                      <span>Change Photo</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <em className="icon ni ni-edit-fill"></em>
                                      <span>Update Profile</span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card-inner">
                        <div className="user-account-info py-0">
                          <h6 className="overline-title-alt"> Wallet Account</h6>
                          <div className="user-balance">
                         0.00
                            <small className="currency currency-btc">NGN</small>
                          </div>
                          
                        </div>
                      </div>
                      <div className="card-inner p-0">
                        <ul className="link-list-menu">
                          <li>
                          <Link href="/admin/user/[user_details]" as={`/admin/user/${user.id}`}>
                            <a className="active" >
                              <em className="icon ni ni-user-fill-c"></em>
                              <span>Personal Infomation</span>
                            </a>
                            </Link>
                          </li>

                          {/* <li>
                            <a href="admin/user_security.php">
                              <em className="icon ni ni-lock-alt-fill"></em>
                              <span>Security Settings</span>
                            </a>
                          </li> */}

                          <li>
                            <Link href=''>
                            <a >
                              <em className="icon ni ni-wallet-alt"></em>
                              <span>Wallet</span>
                            </a>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- @@ Profile Edit Modal @e --> */}
        {/* <div className="modal fade" tabindex="-1" role="dialog" id="profile-edit">
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div className="modal-content">
              <a href="#" className="close" data-dismiss="modal">
                <em className="icon ni ni-cross-sm"></em>
              </a>
              <div className="modal-body modal-body-lg">
                <h5 className="title">Update Profile</h5>
                <ul className="nk-nav nav nav-tabs">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      data-toggle="tab"
                      href="#personal"
                    >
                      Personal
                    </a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div className="tab-pane active" id="personal">
                    <div className="row gy-4">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="form-label" for="full-name">
                            First Name
                          </label>
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            id="full-name"
                            value="Abu Bin Ishtiyak"
                            placeholder="Enter Full name"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="form-label" for="display-name">
                            Last Name
                          </label>
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            id="display-name"
                            value="Ishtiyak"
                            placeholder="Enter display name"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="form-label" for="phone-no">
                            Phone Number
                          </label>
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            id="phone-no"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="form-label" for="phone-no">
                            Email Address
                          </label>
                          <input
                            type="email"
                            className="form-control form-control-lg"
                            id="phone-no"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="form-label" for="birth-day">
                            Date of Birth
                          </label>
                          <input
                            type="text"
                            className="form-control form-control-lg date-picker"
                            id="birth-day"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="form-label" for="phone-no">
                            Occupation
                          </label>
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            id="phone-no"
                          />
                        </div>
                      </div>

                      <div className="col-md-12">
                        <div className="form-group">
                          <label className="form-label" for="phone-no">
                            Address
                          </label>
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            id="phone-no"
                          />
                        </div>
                      </div>

                      <div className="col-12">
                        <ul className="align-center flex-wrap flex-sm-nowrap gx-4 gy-2">
                          <li>
                            <a href="#" className="btn btn-lg btn-primary">
                              Update Profile
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              data-dismiss="modal"
                              className="link link-light"
                            >
                              Cancel
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
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
              <Header currentuser={currentuser} title="Admin Dashboard" />{' '}
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

UserDetails.getInitialProps = async (context, client, currentuser) => {
  const { user_details } = context.query;

  const { data } = await client.get(`/api/users/${user_details}`);

  return { user: data };
};

export default UserDetails;
