import api from '~/plugins/js/helper/api';

/* eslint-disable-next-line */
export default class HistoryCheckin {
  static getHistories(page) {
    const url = `/user/history/checkin/${page}`;
    return api.requestWithToken('get', url);
  }
}
