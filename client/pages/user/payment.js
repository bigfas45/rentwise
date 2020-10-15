import { Fragment, useEffect } from 'react';
import Layout from '../../components/layout';
import SideBar from '../../components/user/side-bar';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Router, { useRouter } from 'next/router';
import Skeleton from 'react-loading-skeleton';
import Link from 'next/link';

const Payment = ({ currentuser, orders }) => {
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
                    <div class="card card-preview">
                      <div class="card-inner">
                        <ul class="nav nav-tabs mt-n3">
                          <li class="nav-item">
                            <a
                              class="nav-link active"
                              data-toggle="tab"
                              href="#tabItem1"
                            >
                              Personal
                            </a>
                          </li>
                          <li class="nav-item">
                            <a
                              class="nav-link"
                              data-toggle="tab"
                              href="#tabItem2"
                            >
                              Security
                            </a>
                          </li>
                          <li class="nav-item">
                            <a
                              class="nav-link"
                              data-toggle="tab"
                              href="#tabItem3"
                            >
                              Notifications
                            </a>
                          </li>
                          <li class="nav-item">
                            <a
                              class="nav-link"
                              data-toggle="tab"
                              href="#tabItem4"
                            >
                              Connect
                            </a>
                          </li>
                        </ul>
                        <div class="tab-content">
                          <div class="tab-pane active" id="tabItem1">
                            <p>
                              Cillum ad ut irure tempor velit nostrud occaecat
                              ullamco aliqua anim Lorem sint. Veniam sint duis
                              incididunt do esse magna mollit excepteur laborum
                              qui. Id id reprehenderit sit est eu aliqua
                              occaecat quis et velit excepteur laborum mollit
                              dolore eiusmod. Ipsum dolor in occaecat commodo et
                              voluptate minim reprehenderit mollit pariatur.
                              Deserunt non laborum enim et cillum eu deserunt
                              excepteur ea incid.
                            </p>
                          </div>
                          <div class="tab-pane" id="tabItem2">
                            <p>
                              Culpa dolor voluptate do laboris laboris irure
                              reprehenderit id incididunt duis pariatur mollit
                              aute magna pariatur consectetur. Eu veniam duis
                              non ut dolor deserunt commodo et minim in quis
                              laboris ipsum velit id veniam. Quis ut consectetur
                              adipisicing officia excepteur non sit. Ut et elit
                              aliquip labore Lorem enim eu. Ullamco mollit
                              occaecat dolore ipsum id officia mollit qui esse
                              anim eiusmod do sint minim consectetur qui.
                            </p>
                          </div>
                          <div class="tab-pane" id="tabItem3">
                            <p>
                              Fugiat id quis dolor culpa eiusmod anim velit
                              excepteur proident dolor aute qui magna. Ad
                              proident laboris ullamco esse anim Lorem Lorem
                              veniam quis Lorem irure occaecat velit nostrud
                              magna nulla. Velit et et proident Lorem do ea
                              tempor officia dolor. Reprehenderit Lorem aliquip
                              labore est magna commodo est ea veniam
                              consectetur.
                            </p>
                          </div>
                          <div class="tab-pane" id="tabItem4">
                            <p>
                              Eu dolore ea ullamco dolore Lorem id cupidatat
                              excepteur reprehenderit consectetur elit id dolor
                              proident in cupidatat officia. Voluptate excepteur
                              commodo labore nisi cillum duis aliqua do. Aliqua
                              amet qui mollit consectetur nulla mollit velit
                              aliqua veniam nisi id do Lorem deserunt amet.
                              Culpa ullamco sit adipisicing labore officia magna
                              elit nisi in aute tempor commodo eiusmod.
                            </p>
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

Payment.getInitialProps = async (context, client, currentuser) => {
  return {};
};

export default Payment;
