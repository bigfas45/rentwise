import Link from 'next/link';
import { Fragment, useEffect, useState } from 'react';
import useRequest from '../../hooks/use-request';

const TotalAmount = ({ currentuser, userId }) => {
  let userId2 = userId;

  const [state, setstate] = useState('');

  const { doRequest, errors, loading, dat } = useRequest({
    url: `/api/subscription/user/${userId2}`,
    method: 'get',

    onSuccess: (data) => {
      setstate(data);
    },
  });
  useEffect(() => {
    doRequest();
  }, []);

  state.map((s,i) => {
      console.log(s.order.amount)
  })

  return 1;
};

export default TotalAmount;
