import { Fragment, useEffect, useState } from 'react';
import Layout from '../../components/layout';
import SideBar from '../../components/user/side-bar';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Router, { useRouter } from 'next/router';
import Skeleton from 'react-loading-skeleton';
import useRequest from '../../hooks/use-request';
import { Spinner, Button } from 'reactstrap';

const Profile = ({ currentuser }) => {
  const router = useRouter();

  const [firstname, setFirstName] = useState('');
  const [lastname, setLastname] = useState('');
  const [telephone, setTelephone] = useState('');
  const [email, setEmail] = useState('');
  const [bvn, setAccount] = useState('');
  const [bank, setBank] = useState('');
  const [password, setPassword] = useState('');
  const [id, setId] = useState('');
  const [dob, setDob] = useState('');
  const [address, setAddress] = useState('');

  const { doRequest, errors, loading } = useRequest({
    url: '/api/users',
    method: 'put',
    body: {
      firstname,
      lastname,
      email,
      telephone,
      bvn,
      bank,
      dob,
      address,
    },

    onSuccess: (data) => {
      console.log(data);
    },
  });
  const onSubmit = async (event) => {
    event.preventDefault();

    doRequest();
  };

  useEffect(() => {
    currentuser && currentuser.userType === 0
      ? ''
      : Router.push('/auth/signin');

    setFirstName(currentuser.firstname);
    setLastname(currentuser.lastname);
    setTelephone(currentuser.telephone);
    setEmail(currentuser.email);
    setPassword(currentuser.password);
    setAccount(currentuser.bnv);
    setBank(currentuser.bank);
    setId(currentuser.id);
    setDob(currentuser.dob);
    setAddress(currentuser.address);
  }, []);

  // password reset settings

  const security = () => {
    console.log(dob);
    const { doRequest, errors, loading } = useRequest({
      url: `/api/users/password-reset/${id}`,
      method: 'post',
      body: {
        password,
      },

      onSuccess: (data) => {
        console.log(data);
      },
    });
    const onSubmit = async (event) => {
      event.preventDefault();

      doRequest();
    };
    return (
      <Fragment>
        <div className="tab-pane" id="tabItem6">
          <div className="nk-block">
            <div className="nk-block-head">
              <div className="nk-block-head-content">
                <h5 className="nk-block-title">Security Settings</h5>
                <div className="nk-block-des">
                  <form onSubmit={onSubmit}>
                    <div className="row gy-4">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label className="form-label"htmlFor="full-name">
                            New Password
                          </label>
                          <input
                            type="password"
                            className="form-control form-control-lg"
                            id="full-name"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="col-6">
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
                              value="Update"
                            />
                          )}{' '}
                        </div>
                        {errors}{' '}
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

  const body = () => {
    return (
      <Fragment>
        <div className="container-xl wide-lg">
          <div className="nk-content-body">
            <div className="nk-block-head">
              <div className="nk-block-head-content">
                <div className="nk-block-head-sub">
                  <span>Account Setting</span>
                </div>
                <h2 className="nk-block-title fw-normal">My Profile</h2>
                <div className="nk-block-des">
                  <p>
                    You have full control to manage your own account setting.{' '}
                    <span className="text-primary">
                      <em
                        className="icon ni ni-info"
                        data-toggle="tooltip"
                        data-placement="right"
                        title="Tooltip on right"
                      ></em>
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="card card-preview">
              <div className="card-inner">
                <ul className="nav nav-tabs mt-n3">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      data-toggle="tab"
                      href="#tabItem5"
                    >
                      <em className="icon ni ni-users"></em>
                      <span>Profile Details</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#tabItem6">
                      <em className="icon ni ni-lock-alt"></em>
                      <span>Security Details </span>
                    </a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div className="tab-pane active" id="tabItem5">
                    <div className="nk-block-head"></div>
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
                          <span className="data-value">
                            {' '}
                            {currentuser.firstname} {currentuser.lastname}{' '}
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
                          <span className="data-label">Display Name</span>
                          <span className="data-value">
                            {currentuser.firstname}
                          </span>
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
                          <span className="data-value">
                            {currentuser.email}
                          </span>
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
                            {currentuser.telephone}
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
                          <span className="data-value"></span>
                        </div>
                        <div className="data-col data-col-end">
                          <span className="data-more">
                            <em className="icon ni ni-forward-ios">
                              {}
                            </em>
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
                          <span className="data-value"></span>
                        </div>
                        <div className="data-col data-col-end">
                          <span className="data-more">
                            <em className="icon ni ni-forward-ios"></em>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {security()}
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
      <Layout title="Landing Page" />
      <body className="nk-body npc-crypto bg-white has-sidebar ">
        <div className="nk-app-root">
          <div className="nk-main">
            <SideBar />

            <div className="nk-wrap ">
              <Header currentuser={currentuser} /> {/* Content Main */}
              <div className="nk-content nk-content-fluid">{body()}</div>
              <div
                className="modal fade"
                tabIndex="-1"
                role="dialog"
                id="profile-edit"
              >
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
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            data-toggle="tab"
                            href="#address"
                          >
                            Address
                          </a>
                        </li>
                      </ul>
                      <div className="tab-content">
                        <div className="tab-pane active" id="personal">
                          <form onSubmit={onSubmit}>
                            <div className="row gy-4">
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label className="form-label"htmlFor="full-name">
                                    First Name
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    id="full-name"
                                    value={firstname}
                                    onChange={(e) =>
                                      setFirstName(e.target.value)
                                    }
                                    placeholder="Enter Full name"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label
                                    className="form-label"
                                   htmlFor="display-name"
                                  >
                                    Last Name
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    id="display-name"
                                    value={lastname}
                                    onChange={(e) =>
                                      setLastname(e.target.value)
                                    }
                                    placeholder="Enter display name"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label className="form-label"htmlFor="phone-no">
                                    Phone Number
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    id="phone-no"
                                    value={telephone}
                                    onChange={(e) =>
                                      setTelephone(e.target.value)
                                    }
                                    placeholder="Phone Number"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label className="form-label"htmlFor="birth-day">
                                    Account Number
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control form-control-lg "
                                    placeholder="Account Number"
                                    value={bvn}
                                    onChange={(e) => setAccount(e.target.value)}
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label className="form-label"htmlFor="birth-day">
                                    Bank Name
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control form-control-lg "
                                    placeholder="Account Name"
                                    value={bank}
                                    onChange={(e) => setBank(e.target.value)}
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label className="form-label"htmlFor="birth-day">
                                    Date of Birth
                                  </label>
                                  <input
                                    type="Date"
                                    className="form-control form-control-lg date-picker"
                                    id="birth-day"
                                    placeholder="Enter your BirthDay"
                                    value={dob}
                                    onChange={(e) => setDob(e.target.value)}
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label className="form-label"htmlFor="address-l2">
                                    Address 
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    id="address-l2"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                  />
                                </div>
                              </div>
                              <div className="col-12">
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
                                      value="Update"
                                    />
                                  )}{' '}
                                </div>
                                {errors}{' '}
                              </div>
                            </div>
                          </form>
                        </div>
                        <div className="tab-pane" id="address">
                          <div className="row gy-4">
                           

                           
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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

Profile.getInitialProps = async (context, client, currentuser) => {};

export default Profile;
