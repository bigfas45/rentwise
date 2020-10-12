import { Fragment, useEffect } from 'react';
import Layout from '../../components/layout';
import SideBar from '../../components/user/side-bar';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Router, { useRouter } from 'next/router';
import Skeleton from 'react-loading-skeleton';
import Card from '../../components/user/card';

const Plan = ({ currentuser, plan }) => {
  const router = useRouter();

  useEffect(() => {
    currentuser && currentuser.userType === 0
      ? ''
      : Router.push('/auth/signin');
  }, []);

  return currentuser ? (
    <Fragment>
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
                    <div className="nk-block nk-block-lg">
                      <div className="nk-block nk-block-lg">
                        <div className="card card-preview">
                          <div className="card-inner">
                            <div className="row">
                              <Card plan={plan} />
                            </div>
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
  const { data } = await client.get('/api/plan');
  return { plan: data };
};

export default Plan;
