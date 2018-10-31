import api from '~/plugins/js/helper/api';

/* eslint-disable-next-line */
export default class BoardGame {
  static findBoardGame(name) {
    const url = `/boardgame/find/${name}`;

    return api.requestWithToken('get', url);
  }

  static findAllPlace() {
    return api.requestWithToken('get', '/boardGame/find_all/0');
  }
}
