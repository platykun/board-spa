import api from '~/plugins/js/helper/api';

/* eslint-disable-next-line */
export default class Result {
  static result(rank, score, comment) {
    const params = {
      rank, score, comment,
    };
    const url = '/user/result';
    return api.requestWithToken('put', url, params);
  }
}
