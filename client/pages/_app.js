import buildClient from '../api/build-client';
import { Fragment } from 'react';

import 'nprogress/nprogress.css';
import dynamic from 'next/dynamic';

const TopProgressBar = dynamic(
  () => {
    return import('../components/TopProgressBar');
  },
  { ssr: false }
);

const AppComponent = ({ Component, pageProps, currentuser }) => {
  return (
    <Fragment>
      <TopProgressBar />

      <Component currentuser={currentuser} {...pageProps} />
    </Fragment>
  );
};


AppComponent.getInitialProps = async (appContext) => {
  const client = buildClient(appContext.ctx);
  const { data } = await client.get('/api/users/currentuser');

  let pageProps = {};

  if (appContext.Component.getInitialProps) {
    pageProps = await appContext.Component.getInitialProps(
      appContext.ctx,
      client,
      data.currentuser
    );
  }

  return {
    pageProps,
    ...data,
  };
};

export default AppComponent;
