import api from '~/plugins/js/helper/api';

/* eslint-disable-next-line */
export default class HistoryResult {
  static getHistoriesById(id) {
    const url = `/user/histories/${id}`;
    return api.requestWithToken('get', url);
  }
}
