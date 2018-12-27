import api from '~/plugins/js/helper/api';

/* eslint-disable-next-line */
export default class Place {
  // IDを条件に場所を検索する
  static findById(id) {
    const url = `/place/find/id/${id}`;
    return api.requestWithToken('get', url);
  }

  // 場所を検索する
  static findPlace(name) {
    const url = `/place/find/${name}`;

    return api.requestWithToken('get', url);
  }

  // 全ての場所を取得する
  static findAllPlace() {
    return api.requestWithToken('get', '/place/find_all/0');
  }

  // チェックインする
  static checkIn(id) {
    const url = `/user/checkin/${id}`;
    return api.requestWithToken('put', url);
  }

  // 場所を登録する
  static regist(name, url) {
    return api.requestWithToken('put', '/place', { name: name, url: url});
  }
}
