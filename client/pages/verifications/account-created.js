import buildClient from '../../api/build-client';
import {Fragment} from "react"
import Layout from '../../components/landing/accountCreatedLayout'


const AccountCreated = ({currentuser}) => {


    const template = () => {
        return (
          <Fragment>
            <section
              id="slider"
              class="slider-element min-vh-100 py-5 include-header"
              style={{
                background:
                  "linear-gradient(to top, rgba(38,38,38,0.922), rgba(38,38,38,0.922)), url('/demos/real-estate/images/hero/3.jpg') no-repeat center center/ cover",
              }}
            >
              <div class="slider-inner">
                <div class="row justify-content-center align-items-center h-100">
                  <div class="col-lg-4 col-sm-7 col-10 mt-sm-5">
                    <div
                      class="form-widget"
                      data-loader="button"
                      data-alert-type="inline"
                    >
                      <div class="tab-content" id="nav-tabContent">
                        <div
                          class="tab-pane show active"
                          id="get-started-form-select-dates"
                          role="tabpanel"
                          aria-labelledby="get-started-form-select-dates"
                        >
                          <div class="row align-items-center">
                            <div class="col-12">
                              <div class="center mb-5 dark">
                                <div class="brand-wrapper">
                                  <img
                                    src="/rentwised.png"
                                    alt="logo"
                                    class="logo"
                                    width="50%"
                                    height="50%"
                                  />
                                </div>
                                <h1 class="font-weight-semibold display-4 mb-4">
                                  Check your inbox
                                </h1>
                                <h1 class="font-weight-semibold display-4 mb-4">
                                  {currentuser ? currentuser.email : ''}{' '}
                                </h1>
                                <p class="font-weight-normal text-white-50">
                                  A confirmation email has been sent to the
                                  email address above. Please click the
                                  verification link in the email to sign in
                                </p>
                              

                                <a
                                  class="button button-rounded button-large tab-action-btn-next mt-5 btn-block py-3"
                                  href="/auth/signin"
                                  style={{ backgroundColor: '#0066f5' }}
                                >
                                  Signin here
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
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
