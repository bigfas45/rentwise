import { Fragment, useEffect } from 'react';
import Layout from '../../../components/layout';
import SideBar from '../../../components/user/side-bar';
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import Router, { useRouter } from 'next/router';
import Skeleton from 'react-loading-skeleton';
import Link from 'next/link';
import UserCard from '../../../components/user/user-order-card';

const Plan = ({ currentuser, orders }) => {
  const router = useRouter();

  useEffect(() => {
    currentuser && currentuser.userType === 0
      ? ''
      : Router.push('/auth/signin');
  }, []);

  return currentuser ? (
    <Fragment>
      <style jsx>{`
        
        }
      `}</style>
      <Layout title="Landing Page" />
      <body className="nk-body npc-crypto bg-white has-sidebar ">
        <div className="nk-app-root">
          <div className="nk-main">
            <SideBar />

            <div className="nk-wrap ">
              <Header currentuser={currentuser} title="Choose Package" />{' '}
              {/* Content Main */}
              <div className="nk-content nk-content-fluid">
                <div className="container-xl wide-lg">
                  <div className="nk-content-body">
                    <div className="nk-block-head">
                      <ul className="nav nav-tabs">
                        <li className="nav-item">
                          <a className="nav-link active">
                            <span>Savings</span>
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className="nk-block nk-block-lg">
                      <div className="card card-preview">
                        <div className="card-inner">
                          <div className="row">
                            <div
                              className="col-lg-5"
                              style={{
                                paddingLeft: '1.5rem',
                                paddingRight: '1.5rem',
                                paddingTop: '2rem',
                                paddingBottom: '2rem',
                              }}
                            >
                              <Link href="/user/select-plan">
                                <a
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
                                      <p className="card-text">
                                        Create new savings plan
                                      </p>
                                    </div>
                                  </div>
                                </a>
                              </Link>
                            </div>

                            <UserCard order={orders} />
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
    </Fragment>
  ) : (
    <Skeleton height={40} count={5} />
  );
};

Plan.getInitialProps = async (context, client, currentuser) => {
  const { data } = await client.get(`/api/orders`);

  return { orders: data };
};

export default Plan;
