import { Module } from 'vuex';
import { StateInterface } from 'src/store';
import state, { ChatStateInterface } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const ChatModule: Module<ChatStateInterface, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state,
};

export default ChatModule;
