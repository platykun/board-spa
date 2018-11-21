import api from '~/plugins/js/helper/api';

/* eslint-disable-next-line */
export default class Result {
  static result(boardGameId, boardGameTitle, placeId, placeName, userList) {
    const params = {
      boardGameId, boardGameTitle, placeId, placeName, userList,
    };
    const url = '/user/result';
    return api.requestWithToken('put', url, params);
  }
}
