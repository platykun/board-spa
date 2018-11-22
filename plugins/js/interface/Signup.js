import api from '~/plugins/js/helper/api';

/* eslint-disable-next-line */
export default class Signup {
  static isAvailableUser(loginId) {
    const url = '/all/user_available/' + loginId;
    return api.get(url, null);
  }

  static signup(loginId, name, password) {
    return api.post('/user/signup', { id: loginId, name: name, authority: 0, password: password });
  }
}
