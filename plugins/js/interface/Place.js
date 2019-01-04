import api from '~/plugins/js/helper/api';

/* eslint-disable-next-line */
export default class Place {
  // IDを条件に場所を検索する
  static findById(id) {
    const url = `/places/${id}`;
    return api.request('get', url, null);
  }

  // 場所を検索する
  static findPlace(name) {
    return api.request(
      'get',
      `/places`,
      {
        q: name,
      },
    );
  }

  // 全ての場所を取得する
  static findAllPlace() {
    return api.request('get',
      '/places',
      {
        page: 0,
      },
    );
  }

  // チェックインする
  static checkIn(placeId) {
    const url = `/user/place/${placeId}/check-in`;
    return api.requestWithToken('put', url);
  }

  // 場所を登録する
  static regist(name, url) {
    return api.requestWithToken('put', '/user/places', {name: name, url: url});
  }
}
