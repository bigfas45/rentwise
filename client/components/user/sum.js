import { Fragment, useState, useEffect } from 'react';
import Link from 'next/link';
import useRequest from '../../hooks/use-request';

const Sum = ({ orderId }) => {
  const [state, setState] = useState('');

  const { doRequest, errors, loading } = useRequest({
    url: `/api/subscription/${orderId}`,
    method: 'get',
    body: {},

    onSuccess: (data) => {
      var payments = 0;
      data.map((pay, i) => {
        var payment = pay.order.amount;
        payments += payment;
      });

      setState(payments);
    },
  });

  useEffect(() => {
    doRequest();
  }, []);

  return (
    <Fragment>
      {' '}
      <b style={{ fontSize: '25px' }}>{state}</b>
    </Fragment>
  );
};

export default Sum;
