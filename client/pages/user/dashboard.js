import { Fragment, useEffect, useState } from 'react';
import Layout from '../../components/layout';
import SideBar from '../../components/user/side-bar';
import Header from '../../components/header';
import Footer from '../../components/footer';
import MyPlan from '../../components/user/my-plan';
import UserSub from '../../components/user/user-sub-sum';

import Router, { useRouter } from 'next/router';
import Skeleton from 'react-loading-skeleton';
import Carousel from 'react-elastic-carousel';
import Link from 'next/link';
import useRequest from '../../hooks/use-request';

const UserDashbaordLandingPage = ({ currentuser, plan }) => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  const [orders, setOrders] = useState([]);

  const router = useRouter();

  const { doRequest } = useRequest({
    url: '/api/orders',
    method: 'get',
    body: {},

    onSuccess: (orders) => setOrders(orders),
  });

  useEffect(() => {
    doRequest();
    currentuser && currentuser.userType === 0
      ? ''
      : Router.push('/auth/signin');
  }, []);

  

  const body = () => {
    return (
      <Fragment>
        <div className="nk-content nk-content-fluid">
          <div className="container-xl wide-lg">
            <div className="nk-content-body">
              <div className="nk-block-head">
                <div className="nk-block-head-sub">
                  <span>Total Balance</span>
                </div>

                <div className="nk-block-between-md g-4">
                  <div className="nk-block-head-content">
                    <h3 className="nk-block-title fw-normal">
                      ₦{' '}
                      <strong>
                        {' '}
                        <UserSub userId={currentuser.id} />
                      </strong>
                      .00
                    </h3>
                    <div className="nk-block-des"></div>
                  </div>
                </div>
              </div>

              <h2 className="nk-block-title title" style={{ color: '#c4c4c8' }}>
                Save & Invest
              </h2>

              <div className="nk-block nk-block-lg">
                <div className="container text-center my-3">
                  <div className="row mx-auto my-auto">
                    {/* Here */}
                    <Carousel breakPoints={breakPoints}>
                      {plan.map((plan, i) => {
                        return (
                          <Fragment key={i}>
                            <Link
                              href="/user/[create_user_plan]"
                              as={`/user/${plan.id}`}
                            >
                              <div
                                className="col-lg-12"
                                style={{
                                  paddingLeft: '14px',
                                  paddingRight: '14px',
                                  paddingTop: '1rem',
                                  paddingBottom: '1rem',
                                }}
                              >
                                <a
                                  href="#"
                                  style={{
                                    fontWeight: '500',
                                    color: '#0066f5',
                                    fontSize: '1rem',
                                    textDecoration: 'none',
                                  }}
                                >
                                  <div className="card_style">
                                    <div className="card-inner">
                                      <p
                                        style={{
                                          textAlign: 'left',
                                          marginTop: '20px',
                                        }}
                                      >
                                        <img
                                          src={plan.image}
                                          alt="image2"
                                          height="40"
                                          width="40"
                                        />
                                      </p>

                                      <h2
                                        className="card-text"
                                        style={{
                                          textSlign: 'left',
                                          fontSize: '20px',
                                          color: '#0062f5',
                                        }}
                                      >
                                        {plan.title}
                                      </h2>
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </Link>
                          </Fragment>
                        );
                      })}
                    </Carousel>
                  </div>
                </div>
              </div>

              <div className="nk-block nk-block-lg"></div>
              {/* Plans  */}

              <MyPlan />

              <div className="nk-block nk-block-lg"></div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  };

  return currentuser ? (
    <Fragment>
      <Layout title="Landing Page" title="Account Overview" />
      <body className="nk-body npc-crypto bg-white has-sidebar ">
        <div className="nk-app-root">
          <div className="nk-main">
            <SideBar />

            <div className="nk-wrap ">
              <Header currentuser={currentuser} title="Account Overview" />{' '}
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

UserDashbaordLandingPage.getInitialProps = async (
  context,
  client,
  currentuser
) => {
  const { data } = await client.get('/api/plan');


  return { plan: data };
};

export default UserDashbaordLandingPage;
