import { RootState } from '@/store/types';
import { Commit, GetterTree, ActionTree, MutationTree } from 'vuex';

export interface MessageState {
  storeMessage: string;
}

const state: MessageState = {
  storeMessage: 'store data',
};

const getters: GetterTree<MessageState, RootState> = {
  storeMessage: (state: MessageState) => state.storeMessage,
};


const actions: ActionTree<MessageState, RootState> = {
  setStoreMessage(context: { commit: Commit }, storeMessage: MessageState) {
    context.commit('SET_STORE_MESSAGE', storeMessage);
  },
};

const mutations: MutationTree<MessageState> = {
  SET_STORE_MESSAGE(state: MessageState, storeMessage: string) {
    state.storeMessage = storeMessage;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
