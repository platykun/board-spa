import api from '~/plugins/js/helper/api';

/* eslint-disable-next-line */
export default class UserResult {
  static newResult(resultId, userId, score, comment) {
    const params = {
      userId, score, comment
    };
    const url = '/user/result/' + resultId + '/users';
    return api.requestWithToken('put', url, params);
  }

  static updateResult(userResultId, resultId, userId, score, comment) {
    const params = {
      userId, score, comment
    };
    const url = '/user/result/' + resultId + '/users/' + userResultId;
    return api.requestWithToken('put', url, params);
  }

  static deleteResult(userResultId) {
    const url = '/user/result/' + resultId + '/users/' + userResultId;
    return api.requestWithToken('delete', url, null);
  }
}
