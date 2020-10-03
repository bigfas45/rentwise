import { Fragment, useEffect } from 'react';
import Layout from '../components/landing/layout';
import SideBar from '../components/user/side-bar';
import Header from '../components/landing/Header';
import Footer from '../components/landing/Footer';
import Router, { useRouter } from 'next/router';
import Skeleton from 'react-loading-skeleton';

const Plans = ({ currentuser, plan }) => {
  const router = useRouter();

  const body = () => {
    return (
      <Fragment>
        <div>
          <section
            class="page-title o-hidden pos-r md-text-center"
            data-bg-color="#d4f7ea"
          >
            <canvas id="confetti"></canvas>
            <div class="container">
              <div class="row align-items-center">
                <div class="col-lg-7 col-md-12">
                  <h1 class="title">
                    <span>P</span>lans
                  </h1>
                  <p>
                    We offer great advice, tools and guides to help you plan
                    your future. Live your best life for free.
                  </p>
                </div>
                <div class="col-lg-5 col-md-12 text-lg-right md-mt-3">
                  <nav aria-label="breadcrumb" class="page-breadcrumb">
                    <ol class="breadcrumb">
                      <li class="breadcrumb-item">
                        <a href="/">Home</a>
                      </li>
                      <li class="breadcrumb-item">
                        <a href="/plans">Plans</a>
                      </li>
                      <li class="breadcrumb-item active" aria-current="page">
                        Plans
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
            <div class="page-title-pattern">
              <img
                class="img-fluid"
                src="/assets/landing/assets/images/bg/11.png"
                alt=""
              />
            </div>
          </section>

          <div class="page-content">
            <section class="pos-r">
              <div class="container">
                <div class="row text-center">
                  <div class="col-lg-8 col-md-12 ml-auto mr-auto">
                    <div class="section-title">
                      <div class="title-effect title-effect-2">
                        <div class="ellipse"></div> <i class="la la-cubes"></i>
                      </div>
                      <h2 class="title">Our Exciting feature And Service</h2>
                      <p>
                        You know the tedious process that comes with planning
                        for the future? We just tossed it out the window and
                        replaced it with our set of easy to use financial tools.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="container">
                  <div class="row align-items-center">
                    <div class="row mt-5">
                      {plan.map((plan, i) => {
                        return (
                          <Fragment>
                            <div key={i} class="col-lg-4 col-md-6 mt-5">
                              <div class="featured-item style-2">
                                {/* <div class="featured-icon">
                                  {' '}
                                  <i class="flaticon-analytics"></i>
                                  <span class="rotateme"></span>
                                </div> */}
                                <img
                                  className="img-fluid"
                                  src={plan.image}
                                  alt=""
                                ></img>
                                <div class="featured-title">
                                  <h5> {plan.title} </h5>
                                </div>
                                <div class="featured-desc">
                                  <p>{plan.description}</p>
                                  <a class="icon-btn mt-4" href="#">
                                    {' '}
                                    <i class="la la-angle-right"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </Fragment>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section class="bg-effect pos-r">
              <div class="container">
                <div class="row">
                  <div class="col-lg-3 col-md-6">
                    <div class="clients-logo">
                      <img
                        class="img-center"
                        src="/assets/landing/assets/images/client/07.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6 sm-mt-3">
                    <div class="clients-logo">
                      <img
                        class="img-center"
                        src="/assets/landing/assets/images/client/08.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6 md-mt-3">
                    <div class="clients-logo">
                      <img
                        class="img-center"
                        src="/assets/landing/assets/images/client/09.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6 md-mt-3">
                    <div class="clients-logo">
                      <img
                        class="img-center"
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
