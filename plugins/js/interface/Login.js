import api from '~/plugins/js/helper/api';

/* eslint-disable-next-line */
export default class Login {
  static login(loginId, pass) {
    return api.post('/user/login', { loginId: loginId, pass: pass });
  }
}
