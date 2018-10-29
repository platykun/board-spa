import api from '~/plugins/js/helper/api';

export const state = () => ({
  checkIn: '',
  myHistory: [],
  nearHistory: [],
  allHistory: [],
});

export const getters = {
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
  setDetail(state, detail) {
    state.checkIn = detail.checkIn;
    state.myHistory = detail.myHistory;
    state.nearHistory = detail.nearHistory;
    state.allHistory = detail.allHistory;
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
