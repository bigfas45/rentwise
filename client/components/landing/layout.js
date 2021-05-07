import { Fragment } from 'react';
import Head from 'next/head';

const Layout = ({ title = 'Rent Wise', description = 'Description' }) => {
  return (
    <Fragment>
      <Head>
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />
        <meta name="author" content="SemiColonWeb" />

        {/* <!-- Stylesheets
	============================================= --> */}
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&amp;display=swap"
          rel="stylesheet"
          type="text/css"
        />
        <link rel="stylesheet" href="css/bootstrap.css" type="text/css" />
        <link rel="stylesheet" href="style.css" type="text/css" />
        <link rel="stylesheet" href="css/dark.css" type="text/css" />
        <link rel="stylesheet" href="css/swiper.css" type="text/css" />

        {/* <!-- Crowdfunding Demo Specific Stylesheet --> */}
        <link
          rel="stylesheet"
          href="demos/crowdfunding/crowdfunding.css"
          type="text/css"
        />
        <link
          rel="stylesheet"
          href="demos/crowdfunding/css/fonts.css"
          type="text/css"
        />
        {/* <!-- / --> */}

        	{/* <!-- Landing Demo Specific Stylesheet --> */}
	<link rel="stylesheet" href="demos/landing/landing.css" type="text/css" />
        <link rel="stylesheet" href="demos/landing/css/fonts.css" type="text/css" />
        

        	{/* <!-- Covid Care Demo Specific Stylesheet --> */}
	<link rel="stylesheet" href="demos/covid-care/covid-care.css" type="text/css" /> 
	<link rel="stylesheet" href="demos/covid-care/css/fonts.css" type="text/css" /> 
        {/* <!-- / --> */}
        
        

        <link rel="stylesheet" href="css/font-icons.css" type="text/css" />
        <link rel="stylesheet" href="css/animate.css" type="text/css" />
        <link rel="stylesheet" href="css/magnific-popup.css" type="text/css" />

        <link rel="stylesheet" href="css/custom.css" type="text/css" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link
          rel="stylesheet"
          type="text/css"
          href="include/rs-plugin/css/settings.css"
          media="screen"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="include/rs-plugin/css/layers.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="include/rs-plugin/css/navigation.css"
        />

        <link
          rel="stylesheet"
          href="css/colors0464.css?color=209EBB"
          type="text/css"
        />

        <meta name="description" content={description} />
        <title>{title}</title>
      </Head>

      <Head>
     
        <script src="js/jquery.js"></script>
        <script src="js/plugins.min.js"></script>
        <script src="js/functions.js"></script>
      </Head>
    </Fragment>
  );
};

export default Layout;
