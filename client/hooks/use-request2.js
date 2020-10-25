import axios from 'axios';
import { useState } from 'react';

const useRequest2 = ({ url, method, body, onSuccess }) => {
  const [errors2, setErrors] = useState(null);
  const [loading2, setLoading] = useState(false);
  const [dat2, setDat] = useState(['']);

  const doRequest2 = async (props = {}) => {
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

  return { doRequest2, errors2, loading2, dat2 };
};

export default useRequest2;
