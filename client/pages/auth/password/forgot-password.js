import {useState} from'react'
import {Fragment} from "react";
import Layout from '../../../components/layout'
import useRequest from '../../../hooks/use-request'
import {Spinner, Button} from "reactstrap";


const ForgotPassword = ({currentuser}) => {

  const [data, setData] = useState('');
  const [email, setEmail] = useState('');
  const {doRequest, errors, loading} = useRequest({
      url: '/api/users/password-reset-email',
      method: 'post',
      body: {
          email
        
      },

      onSuccess: (data) => {
         setData(true)
      }
  })


  const onSubmit = async (event) => {

      event.preventDefault();

      doRequest();

  }

    const template = () => {
        return (
            <Fragment>
 


<body className="nk-body npc-crypto bg-white pg-auth">

    <div className="nk-app-root">
        <div className="nk-split nk-split-page nk-split-md">


            <div className="nk-split-content nk-split-stretch bg-lighter d-flex toggle-break-lg toggle-slide toggle-slide-right" data-content="athPromo" data-toggle-screen="lg" data-toggle-overlay="true">
                <div className="slider-wrap w-100 w-max-550px p-3 p-sm-5 m-auto">
                    <div className="slider-init" data-slick='{"dots":true, "arrows":false}'>
                        <div className="slider-item">
                            <div className="nk-feature nk-feature-center">
                                <div className="nk-feature-img ml-5">
                                    <img className="round" src="https://image.freepik.com/free-vector/happy-man-making-money-online-laptop-metaphor_81522-4241.jpg" srcSet="https://image.freepik.com/free-vector/happy-man-making-money-online-laptop-metaphor_81522-4241.jpg 2x" alt=""/>
                                </div>
                                <div className="nk-feature-content py-4 p-sm-5">
                                    <h2 className="text-blue mr-5">Welcome back,</h2>
                                    <h3 className="text-blue mr-5">Sign in to continue</h3>

                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="slider-dots"></div>
                    <div className="slider-arrows"></div>
                </div>
            </div>


            <div className="nk-split-content nk-block-area nk-block-area-column nk-auth-container bg-white">
                <div className="absolute-top-right d-lg-none p-3 p-sm-5">
                    <a href="#" className="toggle btn-white btn btn-icon btn-light" data-target="athPromo">
                        <em className="icon ni ni-info"></em>
                    </a>
                </div>
                <div className="nk-block nk-block-middle nk-auth-body">
                    <div className="brand-logo pb-5">
                        <a href="html/index.html" className="logo-link">
                            <img className="logo-light logo-img logo-img-lg" src="/assets/images/logoRent.PNG" srcSet="/assets/images//assets/images/logoRent.PNG 2x" alt="logo"/>
                            <img className="logo-dark logo-img logo-img-lg" src="/assets/images/logoRent.PNG" srcSet="/assets/images//assets/images/logoRent.PNG 2x" alt="logo-dark"/>
                        </a>
                    </div>


                    <form onSubmit={onSubmit}>

                        <div className="form-group">
                            <div className="form-label-group">
                                <label className="form-label" htmlFor="default-01">Email</label>
                            </div>
                            <input value={email}
                                onChange={
                                    e => setEmail(e.target.value)
                                }
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter your email address or username"/>
                        </div>

                      
                        <div className="form-group">
                            {
                            loading && loading ? (
                                <Button className="btn btn-lg btn-primary btn-block" variant="success" disabled>
                                    <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true"/>
                                    Loading...
                                </Button>
                            ) : (
                                <input type="submit" className="btn btn-lg btn-primary btn-block" value="Sign In"/>
                            )
                        } </div>
                        {errors} {data ? 
                        <div className="alert alert-icon alert-primary" role="alert">
                        <em className="icon ni ni-alert-circle"></em> 
                        <strong>Password reset email sent successfully</strong>. 
                    </div>
                        : ''} </form>
                   


                </div>

            </div>


        </div>
    </div>

</body>

              </Fragment>
             
        )
    }


    return (
        <Fragment>
            <Layout title="My RentWise"/> {
        template()
        } </Fragment>
    );

};

ForgotPassword.getInitialProps = async (context, client, currentuser) => {
  

}


export default ForgotPassword
