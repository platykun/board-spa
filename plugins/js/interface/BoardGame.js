import api from '~/plugins/js/helper/api';

/* eslint-disable-next-line */
export default class BoardGame {
  static findBoardGame(name) {
    return api.request(
      'get',
      `/boardgames`,
      {
        q: name,
      }
    );
  }

  static findAll() {
    return api.request(
      'get',
      '/boardGames',
      {
        page: 0,
      }
    );
  }

  // ボードゲームを登録する
  static regist(title, player, overview) {
    return api.requestWithToken(
      'put',
      '/user/boardgames',
      {
        title: title,
        player: player,
        overview: overview
      });
  }
}
