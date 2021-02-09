import type { ActionTree } from 'vuex';
import type { StateInterface } from '../index';
import type { ChatStateInterface } from './state';

const actions: ActionTree<ChatStateInterface, StateInterface> = {
  someAction(/* context */) {
    // your code
  },
};

export default actions;
