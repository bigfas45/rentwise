import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component{
    render(){
        return(
            <div>
            <div class="load-wrapp">
		  <div class="wrap">
			  <ul class="dots-box">
			    <li class="dot"><span></span></li>
			    <li class="dot"><span></span></li>
			    <li class="dot"><span></span></li>
			    <li class="dot"><span></span></li>
			    <li class="dot"><span></span></li>
			  </ul>
		  </div>
      </div> 



      <nav class="navbar navbar-expand-lg">
		  <div class="container">
			<Link to="/" class="navbar-brand">
				  <img src="assets/images/logo.png" alt="logo"/>
				  </Link>
			  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-navbar" aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
				  <span class="fa fa-bars"></span>
			  </button>
			  <div class="collapse navbar-collapse" id="main-navbar">
				  <ul class="navbar-nav ml-auto">  
				      <li class="nav-item">
					  <Link to="/" class="nav-link" >Home</Link>
				  	  </li>

						<li class="nav-item">
					  <Link to="/about" class="nav-link">About</Link>
				  	  </li>


						<li class="nav-item">
					  <Link to="/services" class="nav-link" >Services</Link>
				  	  </li>

						<li class="nav-item">
					  <Link to="/contact" class="nav-link" >Contact</Link>
				  	  </li>

						<li class="nav-item">
					  <Link to="/register" class="nav-link" >Register</Link>
				  	  </li>


					  
					 
						 
					  <li class="nav-item log-in">
					  <Link to="/login" class="nav-link flex-center bg-green radius-5px transition-2">
					  	Log In</Link>
					  </li>
				  </ul>
			  </div>
		  </div>
	  </nav>





            </div>
        )
    }
}


export default Header 
