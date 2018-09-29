import api from '~/plugins/js/helper/api';

/* eslint-disable-next-line */
export default class Login {
  constructor(loginId, pass) {
    this.loginId = loginId;
    this.pass = pass;
  }

  login() {
    return api.post('/user/login', { loginId: this.loginId, pass: this.pass });
  }
}
