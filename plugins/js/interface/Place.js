import api from '~/plugins/js/helper/api';

/* eslint-disable-next-line */
export default class Place {
  static findPlace(name) {
    const url = `/place/find/${name}`;

    return api.requestWithToken('get', url);
  }

  static findAllPlace() {
    return api.requestWithToken('get', '/place/find_all/0');
  }

  static checkIn(name) {
    const url = `/user/checkin/${name}`;
    return api.requestWithToken('put', url);
  }
}
