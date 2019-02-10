/* eslint-disable no-alert */
import axios from 'axios';

export default {

  request(method, url, params) {
    let promise = null;
    const fullUrl = process.env.API_URL + url;

    console.log(fullUrl);

    if (method === 'get') {
      promise = axios.get(fullUrl, { params });
    } else if (method === 'post') {
      promise = axios.post(fullUrl, params);
    }
    // promise.catch((error) => {
    //   let statusCode = error.response.status;
    //   if(statusCode === 401) {
    //     alert('認可エラー');
    //   }
    //   alert('エラーが発生しました');
    // });

    return promise;
  },

  requestWithToken(method, url, params) {
    const token = localStorage.token;
    const fullUrl = process.env.API_URL + url;

    let promise = axios({
      method,
      url: fullUrl,
      headers: { authorization: token },
      data: params,
    });

    return promise;
  },

  get(url, params) {
    return this.request('get', url, params);
  },

  getWithToken(url, params, token) {
    this.requestWithToken('post', url, params, token);
  },

  post(url, params) {
    console.log(url);
    return this.request('post', url, params);
  },

  // TODO: 将来的に外出しする.
  login(loginId, pass) {
    const apiUrl = process.env.API_URL;

    return axios.post(`${apiUrl}/user/login`, {
      loginId,
      pass,
    });
  },
};
