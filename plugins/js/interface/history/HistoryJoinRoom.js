import api from '~/plugins/js/helper/api';

/* eslint-disable-next-line */
export default class HistoryJoinRoom {
  static getHistories(page) {
    const url = `/user/history/join/${page}`;
    return api.requestWithToken('get', url);
  }
}
