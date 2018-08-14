export interface Message {
  storeMessage: string
}

const state: Message = {
  storeMessage: 'store data'
}

const getters = {
  storeMessage: (state: any) => state.storeMessage
}

const actions = {
  setStoreMessage({ commit }, storeMessage: string) {
    commit('SET_STORE_MESSAGE', storeMessage)
  }
}

const mutations = {
  SET_STORE_MESSAGE(state: any, storeMessage: string) {
    state.storeMessage = storeMessage
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}