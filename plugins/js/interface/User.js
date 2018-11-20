import api from '~/plugins/js/helper/api';

/* eslint-disable-next-line */
export default class User {
  static findLikeId(keyword) {
    const url = `/user/find/${ keyword }`;
    return api.requestWithToken('get', url);
  }
}
