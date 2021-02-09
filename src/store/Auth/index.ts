import type { Module } from 'vuex';
import type { StateInterface } from 'src/store';
import state, { AuthStateInterface } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const exampleModule: Module<AuthStateInterface, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state,
};

export default exampleModule;
