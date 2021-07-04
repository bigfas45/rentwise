import { Fragment } from 'react';
import Head from 'next/head';

const LayoutProduct = () => {
  return (
    <Fragment>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:400,500,700"
          rel="stylesheet"
        />

        <link rel="stylesheet" href="prodctcss.css" type="text/css" />
      </Head>
    </Fragment>
  );
};

export default LayoutProduct;
