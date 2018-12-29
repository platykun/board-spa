import api from '~/plugins/js/helper/api';

/* eslint-disable-next-line */
export default class User {
  static findLikeId(keyword) {
    const url = `/user/find/${ keyword }`;
    return api.requestWithToken('get', url);
  }

  static getUserDetail(userId) {
    const url = `/all/user/detail/${ userId }`;
    return api.get(url, null);
  }

  static submitIcon(icon, iconColor) {
    return api.requestWithToken('put', '/user/icon', { icon: icon, iconColor: iconColor});
  }
}
