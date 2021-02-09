import type { MutationFns } from 'components/types';
import { SessionStorage } from 'quasar';
import type { MutationTree } from 'vuex';
import type fb from 'firebase';
import type { AuthStateInterface } from './state';

const mutation: MutationTree<AuthStateInterface> = {
  setUser(state, val: AuthStateInterface['user']) {
    state.user = val;
  },

  setWaitingRedirectResult(state, val: boolean) {
    state.isWaitingRedirectResult = val;
    SessionStorage.set('state.isWaitingRedirectResult', val);
  },

  setFirebaseAuthStateListener(state, val: fb.Unsubscribe) {
    state.firebaseAuthStateListener = val;
  },

  unsubscribeFirebaseAuthStateListener(state) {
    // eslint-disable-next-line no-unused-expressions
    state.firebaseAuthStateListener?.();
    state.firebaseAuthStateListener = undefined;
  },

  stopWaitingAuthentication(state) {
    state.isWaitingAuthentication = false;
  },
};

export default mutation;

export type AuthMutationInterface = MutationFns<{
  setUser: AuthStateInterface['user'],

  setWaitingRedirectResult: boolean,

  setFirebaseAuthStateListener: fb.Unsubscribe,

  unsubscribeFirebaseAuthStateListener: undefined,

  stopWaitingAuthentication: undefined,
}>
