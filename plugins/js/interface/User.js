import api from '~/plugins/js/helper/api';

/* eslint-disable-next-line */
export default class User {
  static findLikeId(keyword) {
    return api.request('get',
      `/users`,
      {
        q: keyword,
      },
    );
  }

  static getUserDetail(userId) {
    const url = `/users/${userId}`;
    return api.get(url, null);
  }

  static submitIcon(icon, iconColor) {
    return api.requestWithToken('put', '/users/me/icon', {icon: icon, iconColor: iconColor});
  }
}
