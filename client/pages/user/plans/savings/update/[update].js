import React, { Fragment, useEffect, useState } from 'react';
import Layout from '../../../../../components/layout';
import SideBar from '../../../../../components/user/side-bar';
import Header from '../../../../../components/header';
import Footer from '../../../../../components/footer';
import Skeleton from 'react-loading-skeleton';
import useRequest from '../../../../../hooks/use-request';
import { Spinner, Button } from 'reactstrap';
import Router from 'next/router';
import moment from 'moment';
import {
  FormGroup,
  FormControlLabel,
  RadioGroup,
  Radio,
} from '@material-ui/core';

const Update = ({ currentuser, orders }) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [interval, setInterval] = useState('');
  const [debitType, SetDebitType] = useState('');

  const { doRequest, errors, loading } = useRequest({
    url: `/api/orders/${orders.id}`,
    method: 'put',
    body: {
      name,
      amount,
      interval,
      debitType,
    },

    onSuccess: (data) => {
      Router.push(`/user/plans/savings/${orders.id}`);
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
    setName(orders.name);
    setAmount(orders.amount);
    setInterval(orders.interval);
    SetDebitType(orders.debitType);
  }, []);

  const body = () => (
    <div className="nk-content nk-content-fluid">
      <div className="container-xl wide-lg">
        <div className="nk-content-body">
          <div className="components-preview wide-md mx-auto">
            <div className="nk-block nk-block-lg">
              <div className="card card-bordered">
                <div className="card-inner">
                  <form onSubmit={onSubmit} className="gy-3">
                    <div className="row g-3 align-center">
                      <div className="col-lg-5">
                        <div className="form-group">
                          <label className="form-label" for="site-name">
                            Plan Name
                          </label>
                          <span className="form-note">
                            Customize your plan by giving it a new name
                          </span>
                        </div>
                      </div>
                      <div className="col-lg-7">
                        <div className="form-group">
                          <div className="form-control-wrap">
                            <input
                              type="text"
                              className="form-control"
                              id="site-name"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row g-3 align-center">
                      <div className="col-lg-5">
                        <div className="form-group">
                          <label className="form-label">Saving Frequency</label>
                          <span className="form-note">
                            Change how often you would like to save
                          </span>
                        </div>
                      </div>
                      <div className="col-lg-7">
                        <ul className="custom-control-group g-3 align-center flex-wrap">
                          <FormGroup>
                            <RadioGroup
                              value={interval || ''}
                              onChange={(e) => {
                                setInterval(e.target.value);
                              }}
                            >
                              <FormControlLabel
                                value="daily"
                                control={<Radio />}
                                label="Once a day"
                              />
                              <FormControlLabel
                                value="weekly"
                                control={<Radio />}
                                label="Once a week"
                              />
                              <FormControlLabel
                                value="monthly"
                                control={<Radio />}
                                label="Once a month"
                              />
                            </RadioGroup>
                          </FormGroup>
                        </ul>
                      </div>
                    </div>
                    {/* automation status */}
                    <div className="row g-3 align-center">
                      <div className="col-lg-5">
                        <div className="form-group">
                          <label className="form-label">
                            Automation Status
                          </label>
                          <span className="form-note">
                            Disable or enable automation of your savings
                          </span>
                        </div>
                      </div>
                      <div className="col-lg-7">
                        <ul className="custom-control-group g-3 align-center flex-wrap">
                          <FormGroup>
                            <RadioGroup
                              value={debitType || ''}
                              onChange={(e) => {
                                SetDebitType(e.target.value);
                              }}
                            >
                              <FormControlLabel
                                value="automatic"
                                control={<Radio />}
                                label="yes, I want to be debited automatically"
                              />
                              <FormControlLabel
                                value="manual"
                                control={<Radio />}
                                label="No, I want to save when I want to"
                              />
                            </RadioGroup>
                          </FormGroup>
                        </ul>
                      </div>
                    </div>
                    <div className="row g-3 align-center">
                      <div className="col-lg-5">
                        <div className="form-group">
                          <label className="form-label">Periodic Amount</label>
                          <span className="form-note">
                            Modify the amount you want to pay {interval}
                          </span>
                        </div>
                      </div>
                      <div className="col-lg-7">
                        <div className="form-group">
                          <div className="form-control-wrap">
                            <input
                              type="text"
                              className="form-control"
                              name="site-url"
                              value={amount}
                              onChange={(e) => setAmount(e.target.value)}
                            />
                          </div>
                        </div>
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
                          value="Save Preferences"
                        />
                      )}{' '}
                    </div>
                    {errors}{' '}
                  </form>

                  <div className="row g-3 align-center">
                    <div className="col-lg-5">
                      <div className="form-group">
                        <label className="form-label" for="site-off">
                          Maintanance Mode
                        </label>
                        <span className="form-note">
                          Tidy up your account by deleting plans with a zero
                          balance
                        </span>
                      </div>
                    </div>
                    <div className="row g-3">
                      <div className="col-lg-7 offset-lg-5">
                        <div className="form-group mt-2">
                          <button
                            type="submit"
                            className="btn btn-lg btn-danger"
                          >
                            Delete
                          </button>
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
      <Layout title="Landing Page" />
      <body className="nk-body npc-crypto bg-white has-sidebar ">
        <div className="nk-app-root">
          <div className="nk-main">
            <SideBar />

            <div className="nk-wrap ">
              <Header currentuser={currentuser} title={orders.name} />{' '}
              {/* Content Main */}
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

Update.getInitialProps = async (context, client, currentuser) => {
  const { update } = context.query;

  const { data } = await client.get(`/api/orders/${update}`);

  return { orders: data };
};

export default Update;
