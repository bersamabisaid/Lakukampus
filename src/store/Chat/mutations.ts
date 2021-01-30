import { MutationTree } from 'vuex';
import { MutationFns } from 'components/types';
import { ChatStateInterface } from './state';

type chatWindowOpenSetter = (currentState: boolean) => boolean;

const mutation: MutationTree<ChatStateInterface> = {
  setChatWindowOpen(state, val: boolean | chatWindowOpenSetter) {
    state.isChatWindowOpen = typeof val === 'function'
      ? val(state.isChatWindowOpen)
      : val;
  },

  setChatWindowPosition(state, val: ChatStateInterface['position']) {
    state.position = val;
  },
};

export default mutation;

export type ChatMutationInterface = MutationFns<{
  setChatWindowOpen: boolean | chatWindowOpenSetter,

  setChatWindowPosition: ChatStateInterface['position'],
}>;
