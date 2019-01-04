import api from '~/plugins/js/helper/api';

/* eslint-disable-next-line */
export default class Detail {

  static getDetail() {
    const url = '/users/me/status';
    return api.requestWithToken('get', url);
  }
}
