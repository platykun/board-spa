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

  static checkIn(id) {
    const url = `/user/checkin/${id}`;
    return api.requestWithToken('put', url);
  }
}
