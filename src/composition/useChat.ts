import { computed } from '@vue/composition-api';
import { ChatMutationInterface } from 'src/store/Chat/mutations';
import { ChatStateInterface } from 'src/store/Chat/state';
import { useNamespacedMutations, useNamespacedState } from 'vuex-composition-helpers';

export default function useChat() {
  const { isChatWindowOpen: stateIsWindowChatOpen, ...state } = useNamespacedState<ChatStateInterface>('chatModule', [
    'isChatWindowOpen', 'position',
  ]);

  const { setChatWindowOpen, ...action } = useNamespacedMutations('chatModule', [
    'setChatWindowOpen', 'setChatWindowPosition',
  ]) as ChatMutationInterface;

  const isChatWindowOpen = computed<boolean>({
    get: () => stateIsWindowChatOpen.value,
    set: (v) => setChatWindowOpen(v),
  });

  return {
    chatState: {
      isChatWindowOpen,
      ...state,
    },
    setChatWindowOpen,
    ...action,
  };
}
