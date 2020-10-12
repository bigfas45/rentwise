import {Fragment, useEffect} from "react"
import Layout from '../../components/layout'
import useRequest from '../../hooks/use-request'
import Link from 'next/link'


const AccountCreatedVerification = ({currentuser}) => {


    const {doRequest, errors, loading} = useRequest({
        url: `/api/users/email-verification/${
            currentuser.id
        }`,
        method: 'post',
        onSuccess: (user) => {}
    });

    useEffect(() => {
        doRequest()
    }, []);


    const ActivationSuccessful = () => {
        return (
            <div className="nk-block-head-content">
                <h2 className="nk-block-title text-blue">Activation Successful</h2>
                <h4 className="nk-block-title text-gray">Congratulations
                </h4>
                <h4 className="nk-block-title text-gray">
                    {
                    currentuser ? <Fragment> {
                        currentuser.email
                    }. Your Account is now active. Please login

                        <br/><br/><div className="nk-block-head-content">
                            <Link href="/auth/signin">
                                <a className="btn btn-primary">Log In</a>
                            </Link>
                        </div>
                    </Fragment> : ''
                } </h4>
            </div>
        )
    }


    const ActivationFailed = () => {
        return (
            <div className="nk-block-head-content">
                <h2 className="nk-block-title text-blue">Activation Successful</h2>
              
                <h4 className="nk-block-title text-gray">
                    {
                    errors ? <Fragment> {
                      
                    } {errors}.

                        <br/><br/><div className="nk-block-head-content">
                            <Link href="/auth/signin">
                                <a class="btn btn-primary">Log In</a>
                            </Link>
                        </div>
                    </Fragment> : ''
                } </h4>
            </div>
        )
    }


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
                          <p className="text-center">
                            {errors
                              ? ActivationFailed()
                              : ActivationSuccessful()}{' '}
                          </p>
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

AccountCreatedVerification.getInitialProps = async (context, client, currentuser) => {
    // console.log('Landing page')
    // const client = buildClient(context)
    // const {data} = await client.get('/api/users/currentuser');


}


export default AccountCreatedVerification;
