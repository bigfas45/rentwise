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
        <link rel="stylesheet" href="/css/bootstrap.css" type="text/css" />
        <link rel="stylesheet" href="/style.css" type="text/css" />
        <link rel="stylesheet" href="/css/dark.css" type="text/css" />
        <link rel="stylesheet" href="/css/swiper.css" type="text/css" />

        <link rel="stylesheet" href="/css/custom.css" type="text/css" />
        <link rel="stylesheet" href="/css/verification.css" type="text/css" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={description} />
        <title>{title}</title>
      </Head>

     
    </Fragment>
  );
};

export default Layout;
