import axios from 'axios';

const httpAuthorizationErrorCode = 401;
const httpForbiddenErrorCode = 403;

const axiosInterceptor = () => {
  const requestSuccess = (config) => {
    const configuration = config;
    configuration.headers['Content-Type'] = 'application/json; charset=UTF-8';
    configuration.headers.Authorization = 'Bearer xxx';
    configuration.timeout = 60000;
    return configuration;
  };
  const responseSuccess = (response) => response;

  const responseError = (error) => {
    const statusCode = error.response ? error.response.status : 0;

    if (error.status === httpForbiddenErrorCode) {
      return '';
    } if (statusCode === httpAuthorizationErrorCode) {
      window.location.href = '/login';
    }
    return Promise.reject(error.message);
  };

  axios.interceptors.request.use(requestSuccess);
  axios.interceptors.response.use(responseSuccess, responseError);
};

export default axiosInterceptor;
