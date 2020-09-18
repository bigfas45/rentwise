import { Fragment, useEffect } from 'react';
import Layout from '../../components/layout';
import SideBar from '../../components/side-bar';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Router, { useRouter } from 'next/router';
import Skeleton from 'react-loading-skeleton';
const AdminDashbaordLandingPage = ({ currentuser }) => {
  const router = useRouter();

  useEffect(() => {
    currentuser && currentuser.userType === 1
      ? ''
      : Router.push('/auth/signin');
  }, []);

  const body = () => {
    return (
      <Fragment>
        <div class="container-xl wide-lg">
          <div class="nk-content-body">
            <div class="nk-block">
              <div class="row g-gs">
                <div class="col-lg-12">
                  <div class="">
                    <div class="">
                      <div class="nk-order-ovwg">
                        <div class="row g-4 align-end">
                          <div class="col-xxl-4">
                            <div class="row g-4">
                              <div class="col-sm-4 col-xxl-12">
                                <div class="nk-order-ovwg-data buy">
                                  <div class="amount">
                                    12,954.63{' '}
                                    <small class="currenct currency-usd">
                                      USD
                                    </small>
                                  </div>
                                  <div class="info">
                                    Last month{' '}
                                    <strong>
                                      39,485{' '}
                                      <span class="currenct currency-usd">
                                        USD
                                      </span>
                                    </strong>
                                  </div>
                                  <div class="title">
                                    <em class="icon ni ni-arrow-down-left"></em>{' '}
                                    Buy Orders
                                  </div>
                                </div>
                              </div>
                              <div class="col-sm-4 col-xxl-12">
                                <div class="nk-order-ovwg-data sell">
                                  <div class="amount">
                                    12,954.63{' '}
                                    <small class="currenct currency-usd">
                                      USD
                                    </small>
                                  </div>
                                  <div class="info">
                                    Last month{' '}
                                    <strong>
                                      39,485{' '}
                                      <span class="currenct currency-usd">
                                        USD
                                      </span>
                                    </strong>
                                  </div>
                                  <div class="title">
                                    <em class="icon ni ni-arrow-up-left"></em>{' '}
                                    Sell Orders
                                  </div>
                                </div>
                              </div>
                              <div class="col-sm-4 col-xxl-12">
                                <div class="nk-order-ovwg-data sell">
                                  <div class="amount">
                                    12,954.63{' '}
                                    <small class="currenct currency-usd">
                                      USD
                                    </small>
                                  </div>
                                  <div class="info">
                                    Last month{' '}
                                    <strong>
                                      39,485{' '}
                                      <span class="currenct currency-usd">
                                        USD
                                      </span>
                                    </strong>
                                  </div>
                                  <div class="title">
                                    <em class="icon ni ni-arrow-up-left"></em>{' '}
                                    Sell Orders
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

                <div class="col-xl-7 col-xxl-8">
                  <div class="card card-bordered card-full">
                    <div class="card-inner">
                      <div class="card-title-group">
                        <div class="card-title">
                          <h6 class="title">
                            <span class="mr-2">Orders Activities</span>{' '}
                            <a href="#" class="link d-none d-sm-inline">
                              See History
                            </a>
                          </h6>
                        </div>
                        <div class="card-tools">
                          <ul class="card-tools-nav">
                            <li>
                              <a href="#">
                                <span>Buy</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span>Sell</span>
                              </a>
                            </li>
                            <li class="active">
                              <a href="#">
                                <span>All</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="card-inner p-0 border-top">
                      <div class="nk-tb-list nk-tb-orders">
                        <div class="nk-tb-item nk-tb-head">
                          <div class="nk-tb-col nk-tb-orders-type">
                            <span>Type</span>
                          </div>
                          <div class="nk-tb-col">
                            <span>Desc</span>
                          </div>
                          <div class="nk-tb-col tb-col-sm">
                            <span>Date</span>
                          </div>
                          <div class="nk-tb-col tb-col-xxl">
                            <span>Time</span>
                          </div>
                          <div class="nk-tb-col tb-col-xxl">
                            <span>Ref</span>
                          </div>
                          <div class="nk-tb-col tb-col-sm text-right">
                            <span>USD Amount</span>
                          </div>
                          <div class="nk-tb-col text-right">
                            <span>Amount</span>
                          </div>
                        </div>
                        <div class="nk-tb-item">
                          <div class="nk-tb-col nk-tb-orders-type">
                            <ul class="icon-overlap">
                              <li>
                                <em class="bg-btc-dim icon-circle icon ni ni-sign-btc"></em>
                              </li>
                              <li>
                                <em class="bg-success-dim icon-circle icon ni ni-arrow-down-left"></em>
                              </li>
                            </ul>
                          </div>
                          <div class="nk-tb-col">
                            <span class="tb-lead">Buy Bitcoin</span>
                          </div>
                          <div class="nk-tb-col tb-col-sm">
                            <span class="tb-sub">02/10/2020</span>
                          </div>
                          <div class="nk-tb-col tb-col-xxl">
                            <span class="tb-sub">11:37 PM</span>
                          </div>
                          <div class="nk-tb-col tb-col-xxl">
                            <span class="tb-sub text-primary">RE2309232</span>
                          </div>
                          <div class="nk-tb-col tb-col-sm text-right">
                            <span class="tb-sub tb-amount">
                              4,565.75 <span>USD</span>
                            </span>
                          </div>
                          <div class="nk-tb-col text-right">
                            <span class="tb-sub tb-amount ">
                              + 0.2040 <span>BTC</span>
                            </span>
                          </div>
                        </div>
                        <div class="nk-tb-item">
                          <div class="nk-tb-col nk-tb-orders-type">
                            <ul class="icon-overlap">
                              <li>
                                <em class="bg-eth-dim icon-circle icon ni ni-sign-eth"></em>
                              </li>
                              <li>
                                <em class="bg-success-dim icon-circle icon ni ni-arrow-down-left"></em>
                              </li>
                            </ul>
                          </div>
                          <div class="nk-tb-col">
                            <span class="tb-lead">Buy Ethereum</span>
                          </div>
                          <div class="nk-tb-col tb-col-sm">
                            <span class="tb-sub">02/10/2020</span>
                          </div>
                          <div class="nk-tb-col tb-col-xxl">
                            <span class="tb-sub">10:37 PM</span>
                          </div>
                          <div class="nk-tb-col tb-col-xxl">
                            <span class="tb-sub text-primary">RE2309232</span>
                          </div>
                          <div class="nk-tb-col tb-col-sm text-right">
                            <span class="tb-sub tb-amount">
                              2,039.39 <span>USD</span>
                            </span>
                          </div>
                          <div class="nk-tb-col text-right">
                            <span class="tb-sub tb-amount ">
                              + 0.12600 <span>BTC</span>
                            </span>
                          </div>
                        </div>
                        <div class="nk-tb-item">
                          <div class="nk-tb-col nk-tb-orders-type">
                            <ul class="icon-overlap">
                              <li>
                                <em class="bg-btc-dim icon-circle icon ni ni-sign-btc"></em>
                              </li>
                              <li>
                                <em class="bg-purple-dim icon-circle icon ni ni-arrow-up-right"></em>
                              </li>
                            </ul>
                          </div>
                          <div class="nk-tb-col">
                            <span class="tb-lead">Sell Bitcoin</span>
                          </div>
                          <div class="nk-tb-col tb-col-sm">
                            <span class="tb-sub">02/10/2020</span>
                          </div>
                          <div class="nk-tb-col tb-col-xxl">
                            <span class="tb-sub">10:45 PM</span>
                          </div>
                          <div class="nk-tb-col tb-col-xxl">
                            <span class="tb-sub text-primary">RE2309232</span>
                          </div>
                          <div class="nk-tb-col tb-col-sm text-right">
                            <span class="tb-sub tb-amount">
                              9,285.71 <span>USD</span>
                            </span>
                          </div>
                          <div class="nk-tb-col text-right">
                            <span class="tb-sub tb-amount ">
                              + 0.94750 <span>BTC</span>
                            </span>
                          </div>
                        </div>
                        <div class="nk-tb-item">
                          <div class="nk-tb-col nk-tb-orders-type">
                            <ul class="icon-overlap">
                              <li>
                                <em class="bg-eth-dim icon-circle icon ni ni-sign-eth"></em>
                              </li>
                              <li>
                                <em class="bg-purple-dim icon-circle icon ni ni-arrow-up-right"></em>
                              </li>
                            </ul>
                          </div>
                          <div class="nk-tb-col">
                            <span class="tb-lead">Sell Etherum</span>
                          </div>
                          <div class="nk-tb-col tb-col-sm">
                            <span class="tb-sub">02/11/2020</span>
                          </div>
                          <div class="nk-tb-col tb-col-xxl">
                            <span class="tb-sub">10:25 PM</span>
                          </div>
                          <div class="nk-tb-col tb-col-xxl">
                            <span class="tb-sub text-primary">RE2309232</span>
                          </div>
                          <div class="nk-tb-col tb-col-sm text-right">
                            <span class="tb-sub tb-amount">
                              12,596.75 <span>USD</span>
                            </span>
                          </div>
                          <div class="nk-tb-col text-right">
                            <span class="tb-sub tb-amount ">
                              + 1.02050 <span>BTC</span>
                            </span>
                          </div>
                        </div>
                        <div class="nk-tb-item">
                          <div class="nk-tb-col nk-tb-orders-type">
                            <ul class="icon-overlap">
                              <li>
                                <em class="bg-btc-dim icon-circle icon ni ni-sign-btc"></em>
                              </li>
                              <li>
                                <em class="bg-success-dim icon-circle icon ni ni-arrow-down-left"></em>
                              </li>
                            </ul>
                          </div>
                          <div class="nk-tb-col">
                            <span class="tb-lead">Buy Bitcoin</span>
                          </div>
                          <div class="nk-tb-col tb-col-sm">
                            <span class="tb-sub">02/10/2020</span>
                          </div>
                          <div class="nk-tb-col tb-col-xxl">
                            <span class="tb-sub">10:12 PM</span>
                          </div>
                          <div class="nk-tb-col tb-col-xxl">
                            <span class="tb-sub text-primary">RE2309232</span>
                          </div>
                          <div class="nk-tb-col tb-col-sm text-right">
                            <span class="tb-sub tb-amount">
                              400.00 <span>USD</span>
                            </span>
                          </div>
                          <div class="nk-tb-col text-right">
                            <span class="tb-sub tb-amount ">
                              + 0.00056 <span>BTC</span>
                            </span>
                          </div>
                        </div>
                        <div class="nk-tb-item">
                          <div class="nk-tb-col nk-tb-orders-type">
                            <ul class="icon-overlap">
                              <li>
                                <em class="bg-eth-dim icon-circle icon ni ni-sign-eth"></em>
                              </li>
                              <li>
                                <em class="bg-purple-dim icon-circle icon ni ni-arrow-up-right"></em>
                              </li>
                            </ul>
                          </div>
                          <div class="nk-tb-col">
                            <span class="tb-lead">Sell Etherum</span>
                          </div>
                          <div class="nk-tb-col tb-col-sm">
                            <span class="tb-sub">02/09/2020</span>
                          </div>
                          <div class="nk-tb-col tb-col-xxl">
                            <span class="tb-sub">05:15 PM</span>
                          </div>
                          <div class="nk-tb-col tb-col-xxl">
                            <span class="tb-sub text-primary">RE2309232</span>
                          </div>
                          <div class="nk-tb-col tb-col-sm text-right">
                            <span class="tb-sub tb-amount">
                              6,246.50 <span>USD</span>
                            </span>
                          </div>
                          <div class="nk-tb-col text-right">
                            <span class="tb-sub tb-amount ">
                              + 0.02575 <span>BTC</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card-inner-sm border-top text-center d-sm-none">
                      <a href="#" class="btn btn-link btn-block">
                        See History
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-xl-5 col-xxl-4">
                  <div class="row g-gs">
                    <div class="col-md-6 col-lg-12">
                      <div class="card card-bordered card-full">
                        <div class="card-inner">
                          <div class="card-title-group align-start mb-2">
                            <div class="card-title">
                              <h6 class="title">Top Coin in Orders</h6>
                              <p>In last 15 days buy and sells overview.</p>
                            </div>
                            <div class="card-tools mt-n1 mr-n1">
                              <div class="drodown">
                                <a
                                  href="#"
                                  class="dropdown-toggle btn btn-icon btn-trigger"
                                  data-toggle="dropdown"
                                >
                                  <em class="icon ni ni-more-h"></em>
                                </a>
                                <div class="dropdown-menu dropdown-menu-sm dropdown-menu-right">
                                  <ul class="link-list-opt no-bdr">
                                    <li>
                                      <a href="#" class="active">
                                        <span>15 Days</span>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <span>30 Days</span>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <span>3 Months</span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="nk-coin-ovwg">
                            <div class="nk-coin-ovwg-ck">
                              <canvas
                                class="coin-overview-chart"
                                id="coinOverview"
                              ></canvas>
                            </div>
                            <ul class="nk-coin-ovwg-legends">
                              <li>
                                <span
                                  class="dot dot-lg sq"
                                  data-bg="#f98c45"
                                ></span>
                                <span>Bitcoin</span>
                              </li>
                              <li>
                                <span
                                  class="dot dot-lg sq"
                                  data-bg="#9cabff"
                                ></span>
                                <span>Ethereum</span>
                              </li>
                              <li>
                                <span
                                  class="dot dot-lg sq"
                                  data-bg="#8feac5"
                                ></span>
                                <span>NioCoin</span>
                              </li>
                              <li>
                                <span
                                  class="dot dot-lg sq"
                                  data-bg="#6b79c8"
                                ></span>
                                <span>Litecoin</span>
                              </li>
                              <li>
                                <span
                                  class="dot dot-lg sq"
                                  data-bg="#79f1dc"
                                ></span>
                                <span>Bitcoin Cash</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6 col-lg-12">
                      <div class="card card-bordered card-full">
                        <div class="card-inner">
                          <div class="card-title-group align-start mb-3">
                            <div class="card-title">
                              <h6 class="title">User Activities</h6>
                              <p>
                                In last 30 days{' '}
                                <em
                                  class="icon ni ni-info"
                                  data-toggle="tooltip"
                                  data-placement="right"
                                  title="Referral Informations"
                                ></em>
                              </p>
                            </div>
                            <div class="card-tools mt-n1 mr-n1">
                              <div class="drodown">
                                <a
                                  href="#"
                                  class="dropdown-toggle btn btn-icon btn-trigger"
                                  data-toggle="dropdown"
                                >
                                  <em class="icon ni ni-more-h"></em>
                                </a>
                                <div class="dropdown-menu dropdown-menu-sm dropdown-menu-right">
                                  <ul class="link-list-opt no-bdr">
                                    <li>
                                      <a href="#">
                                        <span>15 Days</span>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" class="active">
                                        <span>30 Days</span>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <span>3 Months</span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="user-activity-group g-4">
                            <div class="user-activity">
                              <em class="icon ni ni-users"></em>
                              <div class="info">
                                <span class="amount">345</span>
                                <span class="title">Direct Join</span>
                              </div>
                            </div>
                            <div class="user-activity">
                              <em class="icon ni ni-users"></em>
                              <div class="info">
                                <span class="amount">49</span>
                                <span class="title">Referral Join</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="user-activity-ck">
                          <canvas
                            class="usera-activity-chart"
                            id="userActivity"
                          ></canvas>
                        </div>
                      </div>
                    </div>
                  </div>
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
      <Layout title="Admin Dashboard" description="Admin Dashboard" />
      <body className="nk-body npc-crypto bg-white has-sidebar ">
        <div className="nk-app-root">
          <div className="nk-main">
            <SideBar />

            <div className="nk-wrap ">
              <Header currentuser={currentuser} title="Admin Dashboard" />{' '}
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

AdminDashbaordLandingPage.getInitialProps = async (
  context,
  client,
  currentuser
) => {};

export default AdminDashbaordLandingPage;
