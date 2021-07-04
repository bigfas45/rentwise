import { Fragment, useEffect } from 'react';
import Layout from '../components/landing/layout';
import SideBar from '../components/user/side-bar';
import Header from '../components/landing/Header';
import Footer from '../components/landing/Footer';
import Router, { useRouter } from 'next/router';
import Skeleton from 'react-loading-skeleton';
import PlanCard from '../components/PlanCard';

const Plans = ({ currentuser, plan }) => {
  const router = useRouter();

  const body = () => {
    return (
      <Fragment>
        <div>
          <section id="page-title">
            <div className="container clearfix">
              <h1>Plans</h1>
              <span>Get in Touch with Us</span>
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Plans
                </li>
              </ol>
            </div>
          </section>

          <div className="page-content">
            <section className="pos-r">
              <div className="container">
                <div className="row align-items-center">
                  <div className="row mt-5">
                    {plan.map((plan, i) => {
                      return (
                        <Fragment>
                          
                              <div key={i} className="col-lg-4 col-md-4 mt-5 ">
                                <PlanCard plan={plan} />
                              </div>
                          
                          
                        </Fragment>
                      );
                    })}
                  </div>
                </div>
              </div>
              <br />
              <br />
              <br />
            </section>

            <section className="bg-effect pos-r">
              <div className="container">
                <div className="row">
                  <div className="col-lg-3 col-md-6">
                    <div className="clients-logo">
                      <img
                        className="img-center"
                        src="/assets/landing/assets/images/client/07.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 sm-mt-3">
                    <div className="clients-logo">
                      <img
                        className="img-center"
                        src="/assets/landing/assets/images/client/08.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 md-mt-3">
                    <div className="clients-logo">
                      <img
                        className="img-center"
                        src="/assets/landing/assets/images/client/09.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 md-mt-3">
                    <div className="clients-logo">
                      <img
                        className="img-center"
                        src="/assets/landing/assets/images/client/10.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </Fragment>
    );
  };

  return (
    <Fragment>
      <Layout title="RentWise | Plans" />
      <Header currentuser={currentuser} title="RentWise | Plans" />
      {body()}
      <Footer />
    </Fragment>
  );
};

Plans.getInitialProps = async (context, client, currentuser) => {
  const { data } = await client.get(`/api/plan`);

  return { plan: data };
};
export default Plans;
