import axios from 'axios';

const buildClient = ({ req }) => {
  if (typeof window === 'undefined') {
    // We are on the servers

    return axios.create({
      // baseURL:
      //   'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local',
      baseURL: 'https://www.rentwise.ng/',
      headers: req.headers,
    });
  } else {
    // We must be on the browser
    return axios.create({
      baseUrl: '/',
    });
  }
};

export default buildClient;
