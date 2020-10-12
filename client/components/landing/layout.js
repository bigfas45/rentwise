import { Fragment } from 'react';
import Head from 'next/head';

const Layout = ({ title = 'Rent Wise', description = 'Description' }) => {
  return (
    <Fragment>

      <Head>
      <meta charset="utf-8" />
    <link rel="icon" href="/assets/landing/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content={description}
    />
      <title>{title}</title>
    <link rel="apple-touch-icon" href="/assets/landing/logo192.png" />
   
    <link rel="manifest" href="/assets/landing/manifest.json" />




  
<link href="/assets/landing/assets/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
<link href="https://fonts.googleapis.com/css?family=Cabin:400,400i,500,500i,600,600i,700,700i" rel="stylesheet"/>
<link href="/assets/landing/assets/css/animate.css" rel="stylesheet" type="text/css" />
<link href="/assets/landing/assets/css/fontawesome-all.css" rel="stylesheet" type="text/css" />
<link href="/assets/landing/assets/css/line-awesome.min.css" rel="stylesheet" type="text/css" />
<link href="/assets/landing/assets/css/magnific-popup/magnific-popup.css" rel="stylesheet" type="text/css" />
<link href="/assets/landing/assets/css/owl-carousel/owl.carousel.css" rel="stylesheet" type="text/css" />
<link href="/assets/landing/assets/css/base.css" rel="stylesheet" type="text/css" />
<link href="/assets/landing/assets/css/shortcodes.css" rel="stylesheet" type="text/css" />
<link href="/assets/landing/assets/css/style2.css" rel="stylesheet" type="text/css" />
<link href="/assets/landing/assets/css/responsive2.css" rel="stylesheet" type="text/css" />
<link href="#" data-style="styles" rel="stylesheet"/>
<link href="/assets/landing/assets/css/color-customize/color-customizer.css" rel="stylesheet" type="text/css" />











    
      </Head>

      <Head>
      
        
      <script src="/assets/landing/assets/js/theme.js"></script> 
<script src="/assets/landing/assets/js/menu/jquery.smartmenus.js"></script>
<script src="/assets/landing/assets/js/owl-carousel/owl.carousel.min.js"></script> 
<script src="/assets/landing/assets/js/magnific-popup/jquery.magnific-popup.min.js"></script>
<script src="/assets/landing/assets/js/counter/counter.js"></script> 
<script src="/assets/landing/assets/js/countdown/jquery.countdown.min.js"></script> 
<script src="/assets/landing/assets/js/canvas.js"></script>
<script src="/assets/landing/assets/js/confetti.js"></script>
<script src="/assets/landing/assets/js/snap.svg.js"></script>
<script src="/assets/landing/assets/js/step.js"></script>
<script src="/assets/landing/assets/js/contact-form/contact-form.js"></script>
<script src="/assets/landing/assets/js/wow.min.js"></script>
<script src="/assets/landing/assets/js/color-customize/color-customizer.js"></script> 
<script src="/assets/landing/assets/js/theme-script.js"></script>

       
      </Head>
    </Fragment>
  );
};

export default Layout;
