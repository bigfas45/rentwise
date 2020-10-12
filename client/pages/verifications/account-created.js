import buildClient from '../../api/build-client';
import {Fragment} from "react"
import Layout from '../../components/layout'


const AccountCreated = ({currentuser}) => {


    const template = () => {
        return (
          <Fragment>
            <body className="nk-body bg-white npc-general pg-auth">
              <div className="nk-app-root">
                <div className="nk-main ">
                  <div className="nk-wrap nk-wrap-nosidebar">
                    <div className="nk-content ">
                      <div className="nk-block nk-block-middle nk-auth-body">
                        <div className="brand-logo pb-5">
                          <a href="html/index.html" className="logo-link">
                            <img
                              className="logo-light logo-img logo-img-lg"
                              src="/assets/images/logoRent.PNG"
                              srcSet="/assets/images/logoRent.PNG 2x"
                              alt="logo"
                            />
                            <img
                              className="logo-dark logo-img logo-img-lg"
                              src="/assets/images/logoRent.PNG"
                              srcSet="/assets/images/logoRent.PNG 2x"
                              alt="logo-dark"
                            />
                          </a>
                        </div>
                        <div className="nk-block-head">
                          <div className="nk-block-head-content">
                            <h2 className="nk-block-title text-blue">
                              Check your inbox
                            </h2>
                            <h2 className="nk-block-title text-gray">
                              {currentuser ? currentuser.email : ''}{' '}
                            </h2>
                            <div>
                              <p className="text-center">
                                A confirmation email has been sent to the email
                                address above. Please click the verification
                                link in the email to sign in
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="nk-footer nk-auth-footer-full">
                        <div className="container wide-lg">
                          <div className="row g-3">
                            <div className="col-lg-6 order-lg-last">
                              <ul className="nav nav-sm justify-content-center justify-content-lg-end">
                                <li className="nav-item">
                                  <a className="nav-link" href="#">
                                    Terms & Condition
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a className="nav-link" href="#">
                                    Privacy Policy
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a className="nav-link" href="#">
                                    Help
                                  </a>
                                </li>
                                <li className="nav-item dropup">
                                  <a
                                    className="dropdown-toggle dropdown-indicator has-indicator nav-link"
                                    data-toggle="dropdown"
                                    data-offset="0,10"
                                  >
                                    <span>English</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="col-lg-6">
                              <div className="nk-block-content text-center text-lg-left">
                                <p className="text-soft">
                                  &copy; 2020 RentWise. All Rights Reserved.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </body>
          </Fragment>
        );
    }


    return (
        <Fragment>
            <Layout title="My RentWise"/> {
            template()
        } </Fragment>
    );

};

AccountCreated.getInitialProps = async (context) => {
    // console.log('Landing page')
    // const client = buildClient(context)
    // const {data} = await client.get('/api/users/currentuser');


    // return data;

}


export default AccountCreated
