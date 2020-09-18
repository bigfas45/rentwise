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
// import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const PlanList = ({ currentuser, plans }) => {
  const router = useRouter();

  useEffect(() => {
    currentuser && currentuser.userType === 1
      ? ''
      : Router.push('/auth/signin');
  }, []);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [returnPercentage, setReturnPercentage] = useState('');
  const [minDuration, setMinDuration] = useState('');

  const { doRequest, errors, loading } = useRequest({
    url: '/api/plan',
    method: 'post',
    body: {
      title,
      description,
      returnPercentage,
      minDuration,
      userId: currentuser.id,
    },

    onSuccess: (data) => {
      Router.push('/admin/plan/create-plan');
    },
  });

  const onSubmit = async (event) => {
    event.preventDefault();

    doRequest();
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const viewPlanModal = () => {
    return (
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{'Add Card'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            To add and verify your card ₦ 100 will be charged and saved into
            your plan
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>

          <PaystackButton {...componentProps} />
        </DialogActions>
      </Dialog>
    );
  };

  const createPlan = () => {
    return (
      <div className="modal fade" tabindex="-1" role="dialog" id="add-plan">
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <a href="#" className="close" data-dismiss="modal">
              <em className="icon ni ni-cross-sm"></em>
            </a>
            <div className="modal-body modal-body-lg">
              <h5 className="title">Add Plan</h5>
              <form onSubmit={onSubmit}>
                <div className="tab-content">
                  <div className="tab-pane active" id="personal">
                    <div className="row gy-4">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label className="form-label" for="full-name">
                            Title
                          </label>
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            id="full-name"
                            placeholder="Enter Plan Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                          />
                        </div>
                      </div>
                      {/* <div className="col-md-12">
                      <div className="form-group">
                        <label className="form-label" for="phone-no">
                          Select Package
                        </label>
                        <select className="form-control form-control-lg">
                          <option>Flexible</option>
                          <option>Super</option>
                        </select>
                      </div>
                    </div> */}
                      <div className="col-md-12">
                        <div className="form-group">
                          <label className="form-label" for="phone-no">
                            Description
                          </label>
                          <textarea
                            className="form-control form-control-lg"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                          ></textarea>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="form-label" for="full-name">
                            Return Percentage
                          </label>
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            id="full-name"
                            placeholder="Enter Plan Title"
                            value={returnPercentage}
                            onChange={(e) =>
                              setReturnPercentage(e.target.value)
                            }
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="form-label" for="full-name">
                            Min Duration
                          </label>
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            id="full-name"
                            placeholder="Enter Plan Title"
                            value={minDuration}
                            onChange={(e) => setMinDuration(e.target.value)}
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
                            value="Submit"
                          />
                        )}{' '}
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const body = () => {
    return (
      <Fragment>
        <div className="container-xl wide-lg">
          <div className="nk-content-body">
            <div className="nk-block-head nk-block-head-sm">
              <div className="nk-block-between">
                <div className="nk-block-head-content">
                  <h3 className="nk-block-title page-title">Plans Lists</h3>
                  <div className="nk-block-des text-soft">
                    <p>You have total {plans.length} plans.</p>
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
                              <span className="sub-text">Description</span>
                            </th>
                            <th className="nk-tb-col tb-col-md">
                              <span className="sub-text">
                                Return Percentage
                              </span>
                            </th>

                            <th className="nk-tb-col tb-col-lg">
                              <span className="sub-text">Duration</span>
                            </th>
                            <th className="nk-tb-col tb-col-md">
                              <span className="sub-text">Status</span>
                            </th>
                            <th className="nk-tb-col nk-tb-col-tools text-right"></th>
                          </tr>
                        </thead>
                        <tbody>
                          {plans.map((plan, i) => {
                            return (
                              <Fragment>
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
                                          {plan.title}
                                          <span className="dot dot-success d-md-none ml-1"></span>
                                        </span>
                                      </div>
                                    </div>
                                  </td>
                                  <td
                                    className="nk-tb-col tb-col-mb"
                                    data-order="35040.34"
                                  >
                                    <span className="tb-amount">
                                      {plan.description}
                                    </span>
                                  </td>
                                  <td className="nk-tb-col tb-col-md">
                                    {plan.returnPercentage}%
                                  </td>

                                  <td className="nk-tb-col tb-col-lg">
                                    {plan.minDuration} Month
                                  </td>
                                  <td className="nk-tb-col tb-col-md">
                                    <span className="tb-status text-success">
                                      Active
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
                                                <a onClick={handleClickOpen}>
                                                  <em className="icon ni ni-eye"></em>
                                                  <span>View Details</span>
                                                </a>
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
                                                <Link
                                                  href="/admin/plan/[order_plans]"
                                                  as={`/admin/plan/${plan.id}`}
                                                >
                                                  <a>
                                                    <em className="icon ni ni-eye"></em>
                                                    <span>Subscriptions</span>
                                                  </a>
                                                </Link>
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
                              </Fragment>
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

        {createPlan()}
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
              <Header currentuser={currentuser} title="Plans" />{' '}
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

PlanList.getInitialProps = async (context, client, currentuser) => {
  const { data } = await client.get(`/api/plan`);

  return { plans: data };
};

export default PlanList;
