import { Fragment } from 'react';
import Head from 'next/head';
import { useEffect } from 'react';

const Layout = ({ title = 'Rent Wise', description = 'Description' }) => {
  return (
    <Fragment>

      <Head>
        <base href="/" />

        <meta charSet="utf-8" />
        <meta name="author" content="Softnio" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="description"
          content="A powerful and conceptual apps base dashboard template that especially build for developers and programmers."
        />
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          type="text/css"
          rel="stylesheet"
          href="/assets/css/dashlite.css?ver=1.8.0"
        ></link>
        <link
          type="text/css"
          rel="stylesheet"
          href="/assets/css/theme.css?ver=1.8.0"
        ></link>

      </Head>

      <Head>
        {/* <script src="/assets/js/dashboard.js"></script> */}
        {/* <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script> */}
       <script src="/assets/js/bundle.js?ver=1.8.0"></script>
        <script src="/assets/js/scripts.js?ver=1.8.0"></script>
        {/* <script src="/assets/js/charts/chart-crypto.js?ver=1.8.0"></script> */}
       
      </Head>
    </Fragment>
  );
};

export default Layout;
