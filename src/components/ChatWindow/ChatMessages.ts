import { defineComponent, PropType } from '@vue/composition-api';
import { QChatMessage, QScrollArea } from 'quasar';
import type { Chat } from './model';

interface ImprovedChatMessage extends Chat {
  contents: Chat['content'][];
}

export interface IChatMessages extends Vue {
  chatMessages: Chat[];

  mergedChatMessages: ImprovedChatMessage[];

  scrollToLastMessage: () => void;
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

  methods: {
    scrollToLastMessage() {
      (this.$refs.scrollArea as QScrollArea).setScrollPercentage(1.1, 400);
    },
  },

  mounted() {
    this.scrollToLastMessage();
  },

  render(h) {
    const fromMeEl = ({ contents }: ImprovedChatMessage) => h(QChatMessage, {
      props: {
        sent: true,
        bgColor: 'primary',
        textColor: 'white',
        size: '11',
        stamp: '17 seconds ago',
        text: contents,
      } as unknown as QChatMessage,
    });

    const fromOtherEl = ({ contents }: ImprovedChatMessage) => h(QChatMessage, {
      props: {
        bgColor: 'grey-4',
        size: '11',
        stamp: '12 seconds ago',
        text: contents,
      } as unknown as QChatMessage,
    });

    const chatMessages: ImprovedChatMessage[] = this.mergedChatMessages;

    return h(
      QScrollArea,
      {
        ref: 'scrollArea',
        staticClass: 'full-width q-px-md',
        staticStyle: {
          alignSelf: 'stretch',
          marginTop: '50px',
        },
      },
      chatMessages.map((chat: ImprovedChatMessage) => (
        chat.fromMe
          ? fromMeEl(chat)
          : fromOtherEl(chat)
      )),
    );
  },

});
