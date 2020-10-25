import axios from 'axios';
import { useState } from 'react';

const useRequest3 = ({ url, method, body, onSuccess }) => {
  const [errors3, setErrors] = useState(null);
  const [loading3, setLoading] = useState(false);
  const [dat3, setDat] = useState(['']);

  const doRequest3 = async (props = {}) => {
    try {
      setErrors(null);
      setLoading(true);
      const response = await axios[method](url, {
        ...body,
        ...props,
      });

      if (onSuccess) {
        setLoading(false);
        onSuccess(response.data);
        setDat(response.data);
      }

      return response.data;
    } catch (err) {
      setLoading(false);
      setErrors(
        <div className="example-alert">
          {err.response.data.errors.map((err) => (
            <div
              key={err.message}
              className="alert alert-fill alert-danger alert-dismissible alert-icon"
            >
              <em className="icon ni ni-cross-circle"></em>
              {err.message}
              <button className="close" data-dismiss="alert"></button>
            </div>
          ))}{' '}
        </div>
      );
    }
  };

  return { doRequest3, errors3, loading3, dat3 };
};

export default useRequest3;
