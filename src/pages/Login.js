import React, {Component} from 'react';

class Login extends React.Component{
    render(){
        return(
            <div>
                	 
	
                     <section class="welcome-page sec-padding pb-150px p-relative o-hidden bg-gray h-auto">
		  <div class="container">
			  <div class="row welcome-text sec-padding flex-center">
				  <div class="col-md-6 mb-50px">
					  <img alt="img" src="assets/images/kl.png" class="ml-auto mr-auto"/>
				  </div>
				  <div class="col-md-6">
					  <h1>Log in Now</h1>
					  <p class="mb-50px">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
					  <form id="log-in" class="mt-30px mb-20px">
						  <div class="form-group p-relative">
							  <input type="email" placeholder="Your Email" required class="d-block mb-20px"/>
							  <i class="fa fa-envelope fs-20 color-blue p-absolute"></i> 
						  </div>
						  <div class="form-group p-relative">
							  <input type="password" placeholder="Your Password" required class="d-block mb-20px"/>
							  <i class="fa fa-lock fs-20 color-blue p-absolute"></i> 
						  </div>
						  <button role="button" class="main-btn btn-3 before-gray">Log In</button>
					  </form>
					  <a href="register-page.html" class="float-left mb-10px">Not a member? Sign up</a>
					  <a href="lost-password-page.html" class="float-right">Forget my password</a>
				  </div>
			  </div>
		  </div>
		  <div class="pattern p-absolute">
		  </div>
	  </section>
	 
	  
	 
            </div>
        )
    }
}


export default Login 