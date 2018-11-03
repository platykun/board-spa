import api from '~/plugins/js/helper/api';

/* eslint-disable-next-line */
export default class HistoryResult {
  static getHistories(page) {
    const url = `/user/history/result/${page}`;
    return api.requestWithToken('get', url);
  }

  static getHistoriesById(id) {
    const url = `/user/history/result/parent/${id}`;
    return api.requestWithToken('get', url);
  }
}
