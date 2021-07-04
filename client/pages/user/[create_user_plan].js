import React, { Fragment, useEffect, useState } from 'react';
import Layout from '../../components/layout';
import SideBar from '../../components/user/side-bar';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Router, { useRouter } from 'next/router';
import useRequest from '../../hooks/use-request';
import Skeleton from 'react-loading-skeleton';
import useRequest3 from '../../hooks/use-request3';

const SelectPlan = ({ currentuser, plan }) => {
  const router = useRouter();
  const [name, SetName] = useState('');
  const [description, SetDescription] = useState('');
  const [amount, SetAmount] = useState('');
  // const [planId, SetPlanId] = useState('');
  const [automatic, SetAutomatic] = useState('');
  const [manual, SetManual] = useState('');
  const [debitType, SetDebitType] = useState( automatic ? automatic : manual);
  const [startDate, SetStartDate] = useState('');
  const [expiresAt, SetExpiresAt] = useState('');
  // const [interval, SetInterval] = useState('');
  const [interval, SetDebitType2] = useState('');
  const [state, setState] = useState('');

  const { doRequest3, errors3, loading3 } = useRequest3({
    url: `/api/orders/card/${currentuser.id}`,
    method: 'get',
    body: {},
    onSuccess: (data) => {
      console.log(data);
      setState(data.customer.customer_code);
    },
  });

  const { doRequest, errors, loading } = useRequest({
    url: '/api/orders',
    method: 'post',
    body: {
      name,
      description: name,
      amount,
      planId: plan.id,
      debitType,
      startDate,
      expiresAt,
      interval,
    },

    onSuccess: (data) => {
      if (state) {
        Router.push(
          '/user/subscription/[subscription_user_plan]',
          `/user/subscription/${data.id}`
        );
      } else {
        Router.push('/user/card/[card]', `/user/card/${data.id}`);
      }
    },
  });

  useEffect(() => {
    currentuser && currentuser.userType === 0
      ? ''
      : Router.push('/auth/signin');
    doRequest3();
  }, []);


    const onSubmit = async (event) => {
      event.preventDefault();
      doRequest();
      console.log(name, amount, debitType, startDate, expiresAt, interval);
    };

  const form = () => {
    return (
      <>
        <section id="content">
          <div className="content-wrap">
            <div className="container clearfix">
              <div className="form-widget">
                <div className="form-result">
                  {errors3}
                  {errors}
                </div><br/>

                <div className="row shadow bg-light border">
                  <div className="col-lg-12 p-5">
                    <form
                      className="row mb-0"
                      id="fitness-form"
                      onSubmit={onSubmit}
                    >
                      <div className="form-process">
                        <div className="css3-spinner">
                          <div className="css3-spinner-scaler"></div>
                        </div>
                      </div>
                      <div className="col-12 form-group">
                        <div className="row">
                          <div className="col-sm-2 col-form-label">
                            <label for="fitness-form-name">
                              {' '}
                              What are you saving for?:
                            </label>
                          </div>
                          <div className="col-sm-10">
                            <input
                              type="text"
                              id="fitness-form-name"
                              className="form-control required"
                              value={name}
                              onChange={(e) => SetName(e.target.value)}
                              placeholder=" What are you saving for?"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-12 form-group">
                        <div className="row">
                          <div className="col-sm-2 col-form-label">
                            <label for="fitness-form-email">
                              {' '}
                              How much would you like to save monthly?:
                            </label>
                          </div>
                          <div className="col-sm-10">
                            <input
                              type="number"
                              name="fitness-form-email"
                              id="fitness-form-email"
                              className="form-control required"
                              value={amount}
                              onChange={(e) => SetAmount(e.target.value)}
                              placeholder=" How much would you like to save monthly?"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-12 form-group">
                        <div className="row">
                          <div className="col-sm-2 col-form-label">
                            <label for="fitness-form-phone">
                              Do you want to automate your savings?::
                            </label>
                          </div>
                          <div className="col-sm-10">
                            <select
                              class="form-select form-control form-control-lg"
                              value={debitType}
                              onChange={(e) => SetDebitType(e.target.value)}
                            >
                              <option value=""></option>
                              <option value="automatic">Automatic</option>
                              <option value="manual">Manual</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 form-group">
                        <div className="row">
                          <div className="col-sm-2 col-form-label">
                            <label for="fitness-form-sex">
                              How frequently would you like to save?:
                            </label>
                          </div>
                          <div className="col-sm-10">
                            <select
                              class="form-select form-control form-control-lg"
                              value={interval}
                              onChange={(e) => SetDebitType2(e.target.value)}
                            >
                              <option value=""></option>
                              <option value="daily">Once a day</option>
                              <option value="weekly">Once a week</option>
                              <option value="monthly">Once a month</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 form-group">
                        <div className="row">
                          <div className="col-sm-2 col-form-label">
                            <label for="fitness-form-age">
                              When would you like to start saving?:
                            </label>
                          </div>
                          <div className="col-sm-10">
                            <input
                              type="date"
                              min="10"
                              max="50"
                              name="fitness-form-age"
                              id="fitness-form-age"
                              className="form-control required"
                              value={startDate}
                              onChange={(e) => SetStartDate(e.target.value)}
                              placeholder="Enter your Age"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-12 form-group">
                        <div className="row">
                          <div className="col-sm-2 col-form-label">
                            <label for="fitness-form-weight">
                              When would you like to stop saving?::
                            </label>
                          </div>
                          <div className="col-sm-10">
                            <div className="input-group">
                              <input
                                type="date"
                                max="140"
                                name="fitness-form-weight"
                                id="fitness-form-weight"
                                className="form-control required"
                                value={expiresAt}
                                onChange={(e) => SetExpiresAt(e.target.value)}
                                placeholder="Enter your Weight"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-12 d-flex justify-content-end align-items-center">
                        <button
                          type="submit"
                          name="fitness-form-submit"
                          className="btn btn-success ml-2"
                        >
                          Submit Quote
                        </button>
                      </div>

                      <input
                        type="hidden"
                        name="prefix"
                        value="fitness-form-"
                      />
                      <input
                        type="hidden"
                        name="subject"
                        value="New Fitness Received"
                      />
                      <input
                        type="hidden"
                        id="fitness-form-calories"
                        name="fitness-form-calories"
                        value=""
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
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
              <Header currentuser={currentuser} title={plan.title} />{' '}
              {/* Content Main */}
              <div className="nk-content nk-content-fluid">
                <div className="container-xl wide-lg">
                  <div className="nk-content-body">
                    <a className="back-to" href="account/user_plans.php">
                      <em className="icon ni ni-arrow-left"></em>
                      <span>Back</span>
                    </a>
                  </div>
                  {form()}
                </div>
              </div>
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

SelectPlan.getInitialProps = async (context, client, currentuser) => {
  const { create_user_plan } = context.query;

  const { data } = await client.get(`/api/plan/${create_user_plan}`);

  return { plan: data };
};

export default SelectPlan;
