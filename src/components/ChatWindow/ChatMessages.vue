<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api';
import { QChatMessage } from 'quasar';
import type { Chat } from './model';

interface ImprovedChatMessage extends Chat {
  contents: Chat['content'][];
}

export default defineComponent({
  name: 'ChatMessages',

  props: {
    chatMessages: {
      required: true,
      type: Array as PropType<Chat[]>,
    },
  },

  computed: {
    mergedChatMessages(): ImprovedChatMessage[] {
      return this.chatMessages.reduce((prev: ImprovedChatMessage[], chat: Chat) => {
        const lastIndex = prev.length - 1;

        if (prev.length > 0) {
          const isPrevMsgHaveSameSource = prev[lastIndex].fromMe === chat.fromMe;

          if (isPrevMsgHaveSameSource) {
            prev[lastIndex].contents.push(chat.content);
            return prev;
          }
        }

        prev.push({ ...chat, contents: [chat.content] });
        return prev;
      }, []);
    },
  },

  render(h) {
    const fromMeEl = ({ contents }: ImprovedChatMessage) => h(QChatMessage, {
      props: {
        size: 11,
        bgColor: 'grey-4',
        stamp: '17 seconds ago',
        text: contents,
      } as unknown as QChatMessage,
    });

    const fromOtherEl = ({ contents }: ImprovedChatMessage) => h(QChatMessage, {
      props: {
        sent: true,
        bgColor: 'primary',
        textColor: 'white',
        size: 11,
        stamp: '12 seconds ago',
        text: contents,
      } as unknown as QChatMessage,
    });
    const chatMessages: ImprovedChatMessage[] = this.mergedChatMessages;

    return h(
      'div',
      { staticClass: 'q-pa-md' },
      chatMessages.map((chat: ImprovedChatMessage) => (
        chat.fromMe
          ? fromMeEl(chat)
          : fromOtherEl(chat)
      )),
    );
  },
});
</script>
