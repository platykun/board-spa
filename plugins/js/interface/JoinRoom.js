import api from '~/plugins/js/helper/api';

/* eslint-disable-next-line */
export default class JoinRoom {
  constructor(room) {
    this.room = room;
  }

  findRoom() {
    const url = `/room/find/${this.room}`;

    return api.requestWithToken('get', url);
  }

  static findAllRoom() {
    return api.requestWithToken('get', '/room/find_all/0');
  }

  // TODO: userId, idを取得する仕組みができてない
  static joinRoom(id) {
    const url = `/user/join/${id}`;
    return api.requestWithToken('put', url);
  }
}
