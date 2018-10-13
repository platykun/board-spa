export const state = () => ({
  isLoading: false
});

export const getters = {
  isLoading(state) {
    return state.isLoading;
  }
};

export const mutations = {
  setIsLoading(state, isLoading){
    state.isLoading = isLoading
  }
};
