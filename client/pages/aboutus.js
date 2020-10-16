import { Fragment, useEffect } from 'react';
import Layout from '../components/landing/layout';
import SideBar from '../components/user/side-bar';
import Header from '../components/landing/Header';
import Footer from '../components/landing/Footer';
import Router, { useRouter } from 'next/router';
import Skeleton from 'react-loading-skeleton';

const AboutUs = ({ currentuser }) => {
  const router = useRouter();

  const body = () => {
    return (
      <Fragment>
        <section
          class="page-title o-hidden pos-r md-text-center"
          data-bg-color="#d4f7ea"
        >
          <canvas id="confetti"></canvas>
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-7 col-md-12">
                <h1 class="title">
                  <span>A</span>bout Us
                </h1>
                {/* <p>One Mission: To give everyone the power to better manage & grow their own finances.</p> */}
              </div>
              <div class="col-lg-5 col-md-12 text-lg-right md-mt-3">
                <nav aria-label="breadcrumb" class="page-breadcrumb">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                      <a href="/">Home</a>
                    </li>
                    <li class="breadcrumb-item">
                      <a href="/aboutus">About Us</a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      About Us
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
          <div class="page-title-pattern">
            <img
              class="img-fluid"
              src="/assets/landing/assets//assets/landing/assets/images/bg/11.png"
              alt=""
            />
          </div>
        </section>
      </Fragment>
    );
  };

  const blogPost = () => {
    return(
      <Fragment>
        <section>
  <div class="container">
        <div class="row text-center">
      <div class="col-lg-8 col-md-12 ml-auto mr-auto">
        <div class="section-title">
          <div class="title-effect">
            <div class="bar bar-top"></div>
            <div class="bar bar-right"></div>
            <div class="bar bar-bottom"></div>
            <div class="bar bar-left"></div>
          </div>
          <h6>Blog Post</h6>
          <h2 class="title">Our Latest News</h2>
          <p>Softino Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderi</p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-4 col-md-12">
        <div class="post">
          <div class="post-image">
            <img class="img-fluid h-100 w-100" src="/assets/landing/assets/images/blog/01.jpg" alt=""/>
            <a class="post-categories" href="#">Photo</a>
          </div>
          <div class="post-desc">
              <div class="post-meta">
              <ul class="list-inline">
                <li><i class="la la-calendar mr-1"></i> 23 Jan, 2019</li>
                <li><i class="la la-user mr-1"></i> By ThemeHt</li>
              </ul>
            </div>
            <div class="post-title">
              <h4><a href="blog-single.html">Softino Performance Based Software</a></h4>
            </div>
            <p>Consequat dolor sit amet, consectetur adipiscing elit. Maecenas lobortis quam id lectus aliquet euismod. Ut sagittis…</p>
           <a class="icon-btn mt-4" href="blog-single.html"> <i class="la la-angle-right"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-12 md-mt-5">
        <div class="post">
          <div class="post-image">
            <img class="img-fluid h-100 w-100" src="/assets/landing/assets/images/blog/02.jpg" alt=""/>
            <a class="post-categories" href="#">Photo</a>
          </div>
          <div class="post-desc">
              <div class="post-meta">
              <ul class="list-inline">
                <li><i class="la la-calendar mr-1"></i> 23 Jan, 2019</li>
                <li><i class="la la-user mr-1"></i> By ThemeHt</li>
              </ul>
            </div>
            <div class="post-title">
              <h4><a href="blog-single.html">latest Software design in features</a></h4>
            </div>
            <p>Consequat dolor sit amet, consectetur adipiscing elit. Maecenas lobortis quam id lectus aliquet euismod. Ut sagittis…</p>
           <a class="icon-btn mt-4" href="blog-single.html"> <i class="la la-angle-right"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-12 md-mt-5">
        <div class="post">
          <div class="post-image">
            <img class="img-fluid h-100 w-100" src="/assets/landing/assets/images/blog/03.jpg" alt=""/>
            <a class="post-categories" href="#">Photo</a>
          </div>
          <div class="post-desc">
              <div class="post-meta">
              <ul class="list-inline">
                <li><i class="la la-calendar mr-1"></i> 23 Jan, 2019</li>
                <li><i class="la la-user mr-1"></i> By ThemeHt</li>
              </ul>
            </div>
            <div class="post-title">
              <h4><a href="blog-single.html">All Powerful Design feature In Softino</a></h4>
            </div>
            <p>Consequat dolor sit amet, consectetur adipiscing elit. Maecenas lobortis quam id lectus aliquet euismod. Ut sagittis…</p>
            <a class="icon-btn mt-4" href="blog-single.html"> <i class="la la-angle-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      </Fragment>
    )
  }

  return (
    <Fragment>
      <Layout title="RentWise | About Us" />
      <Header  currentuser={currentuser} title="RentWise | About Us"  />
      {body()}
      <div class="page-content">
        <section class="pt-0">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-6 col-md-12">
                <img
                  class="img-fluid w-100"
                  src="/assets/landing/assets/images/banner/01.png"
                  alt=""
                />
              </div>
              <div class="col-lg-6 col-md-12 md-mt-5">
                <div class="section-title mb-3">
                  <div class="title-effect title-effect-2">
                    <div class="ellipse"></div> <i class="la la-info"></i>
                  </div>
                  <h2>Who We Are</h2>
                </div>
                <p class="lead">
                RentWise is an online savings platform which will help users save for various personal purposes. We will offer various savings products including periodic investments, however our focus will be on Rent savings. The project is intended to have the following interfaces to be used by the clients and the user  <br/><br/>
                  Whatever you want to save towards, whether rent, outright
                  purchase of house or mortgage, we invite you to select any of
                  our savings products so we can help you achieve your goal.
                  
                </p>
                <a
                  class="btn btn-theme btn-circle"
                  href="#"
                  data-text="See About"
                >
                  {' '}
                  <span>S</span>
                  <span>e</span>
                  <span>e</span>
                  <span> </span>
                  <span>A</span>
                  <span>b</span>
                  <span>o</span>
                  <span>u</span>
                  <span>t</span>
                </a>
                <a
                  class="btn btn-dark btn-circle"
                  href="#"
                  data-text="Learn More"
                >
                  {' '}
                  <span>L</span>
                  <span>e</span>
                  <span>a</span>
                  <span>r</span>
                  <span>n</span>
                  <span> </span>
                  <span>M</span>
                  <span>o</span>
                  <span>r</span>
                  <span>e</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* {blogPost()} */}
      <Footer />
    </Fragment>
  );
};

AboutUs.getInitialProps = async (context, client, currentuser) => {};

export default AboutUs;
