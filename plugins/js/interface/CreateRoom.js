import api from '~/plugins/js/helper/api';

/* eslint-disable-next-line */
export default class CreateRoom {
  constructor(roomName, player, boardTitle, placeName, remark) {
    this.roomName = roomName;
    this.player = player;
    this.boardTitle = boardTitle;
    this.placeName = placeName;
    this.remark = remark;
  }

  createRoom() {
    const params = {
      roomName: this.roomName,
      player: this.player,
      boardTitle: this.boardTitle,
      placeName: this.placeName,
      remark: this.remark,
    };
    const url = '/user/create_room';

    return api.requestWithToken('put', url, params);
  }
}
