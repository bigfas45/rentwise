import { Fragment, useState, useEffect } from 'react';
import Link from 'next/link';
import useRequest from '../../hooks/use-request';

const UserSubSum = ({ userId }) => {
  const [state, setState] = useState('');

  const { doRequest, errors, loading } = useRequest({
    url: `/api/subscription/user/${userId}`,
    method: 'get',
    body: {},

    onSuccess: (data) => {
      console.log(data)
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

  return <Fragment>{state}</Fragment>;
};

export default UserSubSum;
