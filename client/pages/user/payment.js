import { Fragment, useEffect, useState } from 'react';
import Layout from '../../components/layout';
import SideBar from '../../components/user/side-bar';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Router, { useRouter } from 'next/router';
import Skeleton from 'react-loading-skeleton';
import Link from 'next/link';
import { PaystackButton } from 'react-paystack';
import useRequest from '../../hooks/use-request';
// import PaymentCard from 'react-payment-card-component';

const Payment = ({ currentuser, card }) => {
  const router = useRouter();


  const [refre, setRefre] = useState('');

  useEffect(() => {
    currentuser && currentuser.userType === 0
      ? ''
      : Router.push('/auth/signin');
    setRefre(new Date().getTime());
  }, []);

  const config = {
    reference: refre,
    email: currentuser.email,
    amount: 100 * 100,
    publicKey: 'pk_test_a3c6eed2d7700ebb41bf5417adeee9ae037f0fdc',
  };

  const { doRequest, errors, loading } = useRequest({
    url: `/api/orders/addcard`,
    method: 'post',
    body: {
      reference: refre,
    },

    onSuccess: (data) => {
      Router.push('/user/payment');
    },
  });

  const componentProps = {
    ...config,
    text: 'Proceed',
    onSuccess: (data) => {
      doRequest();
      Router.push('/user/payment');
    },
    onClose: () => {
      null;
    },
  };

  const content = () => {
    return (
      <div className="nk-content nk-content-fluid">
        <div className="container-xl wide-lg">
          <div className="nk-content-body">
            <div className="nk-block-head">
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    data-toggle="tab"
                    href="#tabItem1"
                  >
                    Cards
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" data-toggle="tab" href="#tabItem2">
                    Banks
                  </a>
                </li>
              </ul>
            </div>

            <div className="nk-block nk-block-lg">
              <div className="tab-content">
                <div className="tab-pane active" id="tabItem1">
                  <div className="card card-preview">
                    <div className="card-inner">
                      <div className="row">
                        <div className="col-lg-5">
                          <a
                            data-toggle="modal"
                            data-target="#modalDefault"
                            style={{
                              fontWeight: '500',
                              color: '#0066f5',
                              fontSize: '1rem',
                              textDecoration: 'none',
                            }}
                          >
                            <div className="card_style">
                              <div className="card-inner">
                                <p>
                                  <h6
                                    className="card-title"
                                    style={{ color: '#0066f5' }}
                                  >
                                    +
                                  </h6>
                                </p>
                                <p className="card-text">Add new .</p>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      {card ? (
                        <div class="card card-bordered card-preview">
                          <table class="table table-tranx is-compact">
                            <thead>
                              <tr class="tb-tnx-head">
                                <th class="tb-tnx-id">
                                  <span class="">Credit Card</span>
                                </th>
                                <th class="tb-tnx-info">
                                  <span>
                                    <span>Name on card</span>
                                  </span>
                                </th>
                                <th class="tb-tnx-amount">
                                  <span class="tb-tnx-total">Expires on</span>
                                  <span class="tb-tnx-status d-none d-md-inline-block"></span>
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr class="tb-tnx-item">
                                <td class="tb-tnx-id">
                                  <a href="#">
                                    <img
                                      className="img-fluid"
                                      width="50"
                                      height="50"
                                      src="https://pngimg.com/uploads/visa/visa_PNG11.png"
                                    ></img>
                                    <span>
                                      {' '}
                                      {card.authorization.brand} ending in{' '}
                                      {card.authorization.last4}{' '}
                                    </span>
                                  </a>
                                  <span> </span>
                                </td>
                                <td>{card.customer.email}</td>
                                <td>
                                  {card.authorization.exp_month}/
                                  {card.authorization.exp_year}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      ) : (
                        ''
                      )}
                    </div>
                  </div>
                </div>

                <div className="tab-pane" id="tabItem2">
                  <div className="card card-preview">
                    <div className="card-inner">
                      <div className="row">
                        <div className="col-lg-5">
                          <a
                            href="/user/add-bank"
                            style={{
                              fontWeight: '500',
                              color: '#0066f5',
                              fontSize: '1rem',
                              textDecoration: 'none',
                            }}
                          >
                            <div className="card_style">
                              <div className="card-inner">
                                <p>
                                  <h6
                                    className="card-title"
                                    style={{ color: '#0066f5' }}
                                  >
                                    +
                                  </h6>
                                </p>
                                <p className="card-text">Add bank account</p>
                              </div>
                            </div>
                          </a>
                          {/* <!-- Modal Trigger Code --> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Modal Content Code --> */}
            <div className="modal fade" tabindex="-1" id="modalDefault">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <a
                    href="#"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <em className="icon ni ni-cross"></em>
                  </a>
                  <div className="modal-header">
                    <h5 className="modal-title">Add card</h5>
                  </div>
                  <div className="modal-body">
                    <p>
                      To add and verify your card ₦ 100 will be charged and
                      saved into your plan.
                    </p>
                  </div>
                  <div className="modal-footer bg-light">
                    <a
                      href="#"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <h6 style={{ color: 'blue' }}>Cancel</h6>
                    </a>

                    {/* <button className="btn btn-primary">Proceed</button> */}
                    <PaystackButton {...componentProps} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return currentuser ? (
    <Fragment>
      <style jsx>{`
        
        }
      `}</style>
      <Layout title="Add card" />
      <body className="nk-body npc-crypto bg-white has-sidebar ">
        <div className="nk-app-root">
          <div className="nk-main">
            <SideBar />

            <div className="nk-wrap ">
              <Header currentuser={currentuser} title="BANKS & CARDS" />{' '}
              {/* Content Main */}
              {content()}
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

Payment.getInitialProps = async (context, client, currentuser) => {
  // const data  = await client.get(`/api/orders/card`);
  // return { card: data };
};

export default Payment;
