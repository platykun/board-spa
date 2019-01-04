import api from '~/plugins/js/helper/api';

export const state = () => ({
  checkIn: '',
  checkInId: -1,
  myHistory: [],
  nearHistory: [],
  allHistory: [],
});

export const getters = {
  checkInId(state) {
    return state.checkInId;
  },
  checkIn(state) {
    return state.checkIn;
  },
  myHistory(state) {
    return state.myHistory;
  },
  nearHistory(state) {
    return state.nearHistory;
  },
  allHistory(state) {
    return state.allHistory;
  },
};

export const mutations = {
  setCheckIn(state, checkIn, checkInId) {
    state.checkIn = checkIn;
    state.checkInId = checkInId;
  },
  setDetail(state, detail) {
    state.checkIn = detail.checkIn;
    state.myHistory = detail.myHistory;
    state.nearHistory = detail.nearHistory;
    state.allHistory = detail.allHistory;
  }
};

export const actions = {
  addUserDetail({ commit }) {
    const url = '/users/me/status';
    api.requestWithToken('get', url).then(
      (response) => {
        commit('setDetail', response.data.result);
      }
    );
  },
  updateCheckIn({ commit }, checkin, checkInId) {
    commit('setCheckIn', checkin, checkInId);
  },
};
