import Vue from 'vue';
import Vuex, { Commit, Dispatch } from 'vuex';

import message from '@/store/modules/message';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    message,
  },
});

export interface ActionContextBasic {
  commit: Commit;
  dispatch: Dispatch;
}
