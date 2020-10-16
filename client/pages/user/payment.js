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


  const content = () => {
    return (
         <div class="nk-content nk-content-fluid">
                    <div class="container-xl wide-lg">
                        <div class="nk-content-body">
                            <div class="nk-block-head">
                               
                                
                                <ul class="nav nav-tabs">
                                    <li class="nav-item">
                                        <a class="nav-link active" data-toggle="tab" href="#tabItem1">Cards</a>

                                    </li>

                                    <li class="nav-item">
                                        <a class="nav-link" data-toggle="tab" href="#tabItem2">Banks</a>
                                    </li>
                                    
                                  
                                </ul>

                            </div>
                            
                            <div class="nk-block nk-block-lg">
                                      
                                            <div class="tab-content">
                                                    <div class="tab-pane active" id="tabItem1">      

                                                        <div class="card card-preview">
                                                            <div class="card-inner">
                                                                <div class="row">

                                                                    <div class="col-lg-5" >

                                                                        <a  data-toggle="modal" data-target="#modalDefault"style="font-weight: 500;color: #0066f5;font-size: 1rem;text-decoration: none;">
                                                                        <div class="card_style" >
                                                                           
                                                            
                                                                            <div class="card-inner">
                                                                            <p><h6 class="card-title" style="color: #0066f5;">+</h6></p>
                                                                            <p class="card-text">Add new card</p>
                                                                            </div>                                                   
                                                                        </div>
                                                                        </a>
                                                                    </div>

                                                                </div>

                                                            </div>
                                                        </div>

                                                    </div>
                                                    
                                                    <div class="tab-pane" id="tabItem2">
                                                        
                                                        <div class="card card-preview">
                                                            <div class="card-inner">
                                                                <div class="row">

                                                                    <div class="col-lg-5" >
                                                                        <a  href = "html/add_bank_details.html" style="font-weight: 500;color: #0066f5;font-size: 1rem;text-decoration: none;">
                                                                        <div class="card_style" >
                                                                           
                                                            
                                                                            <div class="card-inner">
                                                                            <p><h6 class="card-title" style="color: #0066f5;">+</h6></p>
                                                                            <p class="card-text">Add bank account</p>
                                                                            </div>                                                   
                                                                        </div>
                                                                        </a>
                                                                        {/* <!-- Modal Trigger Code --> */}

                                                                    </div>   
                                                                                 
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>

                                            </div>
                                     
                            </div>



{/* <!-- Modal Content Code --> */}
<div class="modal fade" tabindex="-1" id="modalDefault">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <a href="#" class="close" data-dismiss="modal" aria-label="Close">
                <em class="icon ni ni-cross"></em>
            </a>
            <div class="modal-header">
                <h5 class="modal-title">Add card</h5>
            </div>
            <div class="modal-body">
                <p>To add and verify your card ₦ 100 will be charged and saved into your plan.</p>
            </div>
            <div class="modal-footer bg-light">

                <a href="#" class="close" data-dismiss="modal" aria-label="Close">
                    <h6 style="color: blue">Cancel</h6>
                </a>
                
                <button class = "btn btn-primary">Proceed</button>
            </div>
        </div>
    </div>
</div>

                           

                        </div>
                    </div>
                </div>
    )
  }

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
              <Header currentuser={currentuser} title="BANKS & CARDS" />{' '}
              {/* Content Main */}
              {content()}
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
