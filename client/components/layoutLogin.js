import { Fragment } from 'react';
import Head from 'next/head';

const LayoutLogin = ({ title = 'Rent Wise', description = 'Description' }) => {
  return (
    <Fragment>
      <Head>
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />
        <meta name="author" content="SemiColonWeb" />

        {/* <!-- Stylesheets
	============================================= --> */}
        <link
          href="https://fonts.googleapis.com/css?family=Karla:400,700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.materialdesignicons.com/4.8.95/css/materialdesignicons.min.css"
        />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        />
        <link rel="stylesheet" href="/css/login.css"></link>

        <meta name="description" content={description} />
        <title>{title}</title>
      </Head>

      <Head>
        <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
      </Head>
    </Fragment>
  );
};

export default LayoutLogin;
