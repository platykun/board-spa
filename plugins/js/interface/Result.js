import api from '~/plugins/js/helper/api';

/* eslint-disable-next-line */
export default class Result {
  static result(parentId, boardGameId, boardGameTitle, placeId, placeName, score, comment) {
    const params = {
      parentId, boardGameId, boardGameTitle, placeId, placeName, score, comment,
    };
    const url = '/user/result';
    return api.requestWithToken('put', url, params);
  }
}
