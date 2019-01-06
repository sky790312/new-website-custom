import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';

import message from '@/store/modules/message';

Vue.use(Vuex);

interface RootState {
  version: string;
}

const store: StoreOptions<RootState> = {
  state: {
    version: 'v1.0.0',
  },
  modules: {
    message,
  },
};

export default new Vuex.Store<RootState>(store);
