import api from '~/plugins/js/helper/api';

/* eslint-disable-next-line */
export default class Event {
  // イベント一覧を取得する
  static findAll() {
    return api.request(
      'get',
      '/events',
      {
        page: 0,
      }
    );
  }

  // イベント詳細情報を取得する
  static detail(eventId) {
    let url = '/events/' + eventId;
    return api.request(
      'get',
      url
    );
  }

  // イベントを登録する
  static regist(placeId, placeName, date_time_from, date_time_to, comment) {
    return api.requestWithToken(
      'put',
      '/users/events',
      {
        id: 0,
        placeId: placeId,
        placeName: placeName,
        date_time_from: date_time_from,
        date_time_to: date_time_to,
        comment: comment,
      });
  }

  // イベントに参加する
  static join(eventId) {
    let url = '/users/events/' + eventId + '/join';
    return api.requestWithToken(
      'PUT',
      url, null);
  }

  // 参加中のイベント情報を取得する.
  static findJoiningEvent() {
    let url = '/users/events/joining';
    return api.requestWithToken(
      'GET',
      url, null);
  }
}
