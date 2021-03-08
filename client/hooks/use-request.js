import axios from 'axios';
import { useState } from 'react';

const useRequest = ({ url, method, body, onSuccess }) => {
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(false);
  const [dat, setDat] = useState(['']);

  const doRequest = async (props = {}) => {
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

  return { doRequest, errors, loading, dat };
};

export default useRequest;
