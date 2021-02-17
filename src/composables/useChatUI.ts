import { computed, ref } from '@vue/composition-api';
import {
  image, internet, lorem, random,
} from 'faker';
import { ChatMutationInterface } from 'src/store/Chat/mutations';
import { ChatStateInterface } from 'src/store/Chat/state';
import { useNamespacedMutations, useNamespacedState } from 'vuex-composition-helpers';
import type { Chat } from 'components/ChatWindow/model';

export default function useChatUI() {
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

  const chatTitle = ref(internet.userName());
  const chatThumbnail = ref(image.business(50, 50));
  const chatTextInput = ref('');
  const chatMessages = Array.from(Array(10)).map(() => ({
    content: lorem.paragraph(),
    fromMe: random.boolean(),
  } as Chat));

  return {
    chatTitle,
    chatThumbnail,
    chatTextInput,
    chatMessages,

    chatState: {
      isChatWindowOpen,
      ...state,
    },
    setChatWindowOpen,
    ...action,
  };
}
