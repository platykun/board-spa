import api from '~/plugins/js/helper/api';

export const state = () => ({
  checkingIn: false,
  joinedRoom: false,
  placeName: '',
  roomName: '',
  boardTitle: '',
  player: '',
  remark: '',
  joinPlayerName: [],
});

export const getters = {
  placeName(state) {
    return state.placeName;
  },
  roomName(state) {
    return state.roomName;
  },
  boardTitle(state) {
    return state.boardTitle;
  },
  player(state) {
    return state.player;
  },
  remark(state) {
    return state.remark;
  },
  joinPlayerName(state) {
    return state.joinPlayerName;
  },
  needToCheckIn(state) {
    // placeNameが存在する場合true,それ以外はfalse
    return !state.placeName;
  },
  needToJoinRoom(state) {
    // チェックイン中かつルーム参加していない場合true
    if(state.placeName) {
      if(!state.roomName){
        return true;
      }
    }
    return false;
  },
  needToAddResult(state) {
    return !!(state.placeName && state.roomName);
  },
};

export const mutations = {
  setDetail(state, detail) {
    state.placeName = detail.placeName;
    state.roomName = detail.roomName;
    state.boardTitle = detail.boardTitle;
    state.player = detail.player;
    state.remark = detail.remark;
    state.joinPlayerName = detail.joinPlayerName;
  }
};

export const actions = {
  addUserDetail({ commit }) {
    const url = '/user/status';
    api.requestWithToken('get', url).then(
      (response) => {
        commit('setDetail', response.data.result);
      }
    );
  }
};
