import { Fragment, useEffect } from 'react';
import Layout from '../../../../components/layout';
import SideBar from '../../../../components/side-bar';
import Header from '../../../../components/header';
import Footer from '../../../../components/footer';
import Router, { useRouter } from 'next/router';
import Skeleton from 'react-loading-skeleton';
import Link from 'next/link';
import useRequest from '../../../../hooks/use-request';

const SuspendUser = ({ currentuser, user }) => {
  const router = useRouter();

  var userStatus = user.status;

  if (user.status === 1) {
    userStatus = userStatus + 1;
    console.log('1', userStatus);
  }

  if (user.status === 2) {
    userStatus = userStatus - 1;
    console.log('1', userStatus);
  }

  const { doRequest } = useRequest({
    url: `/api/users/${user.id}`,
    method: 'put',
    body: {
      status: userStatus,
    },
    onSuccess: (data) => {
      Router.push('/admin/user/user-list');
    },
  });

  useEffect(() => {
    currentuser && currentuser.userType === 1
      ? ''
      : Router.push('/auth/signin');
    doRequest();
  }, []);

  const body = () => {
    return (
      <Fragment>
        <h3>Supending user....</h3>
      </Fragment>
    );
  };

  return currentuser ? (
    <Fragment>
      <Layout title="Admin Dashboard" description="Admin Dashboard" />
      <body className="nk-body npc-crypto bg-white has-sidebar ">
        <div className="nk-app-root">
          <div className="nk-main">
            <SideBar />

            <div className="nk-wrap ">
              <Header currentuser={currentuser} title="Admin Dashboard" />{' '}
              {/* Content Main */}
              <div className="nk-content nk-content-fluid">{body()}</div>
              {/* Content Main */}
              {/* Footer */}
              <Footer /> {/* Footer */}{' '}
            </div>
          </div>
        </div>
      </body>
      {/* {
        currentuser && currentuser.userType === 0 ? <h1>You are signed in</h1> : <h1>You are not signed in</h1>
    }  */}{' '}
    </Fragment>
  ) : (
    <Skeleton height={40} count={5} />
  );
};

SuspendUser.getInitialProps = async (context, client, currentuser) => {
  const { suspend_user } = context.query;

  const { data } = await client.get(`/api/users/${suspend_user}`);

  return { user: data };
};

export default SuspendUser;
