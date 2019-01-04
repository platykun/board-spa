import api from '~/plugins/js/helper/api';

/* eslint-disable-next-line */
export default class HistoryCheckin {
  static getHistories(page) {
    return api.requestWithToken('get',
      `/user/check-ins/me`,
      {
        page: page
      }
    );
  }
}
