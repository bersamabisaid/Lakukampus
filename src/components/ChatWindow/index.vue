<template>
  <chat-window-layout v-bind="$attrs">
    <template #header-bar>
      <div
        @click="setChatWindowOpen(false)"
        class="non-selectable"
      >
        Chats ({{ unreadMessages }})
      </div>

      <q-space />

      <q-btn
        dense
        flat
        icon="close"
        @click="setChatWindowOpen(false)"
        title="hide chat window"
      />
    </template>

    <template #header />

    <template #side-bar>
      <chat-list :contacts="contacts" />
    </template>

    <template #bottom>
      <chat-text-input
        v-model="chatInput"
        @message-entered="sendMessage"
      />
    </template>

    <template #default>
      <chat-messages
        ref="chats"
        :chat-messages="chatMessages"
      />

      <chat-title
        :photo="chatThumbnail"
        :title="chatTitle"
        status="online"
      />
    </template>
  </chat-window-layout>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import {
  lorem, internet, random, image,
} from 'faker';
import useChat from 'composition/useChat';
import ChatWindowLayout from 'components/ChatWindow/ChatWindowLayout.vue';
import ChatTitle from 'components/ChatWindow/ChatTitle.vue';
import ChatList from 'components/ChatWindow/ChatList.vue';
import ChatMessages, { IChatMessages } from 'components/ChatWindow/ChatMessages';
import ChatTextInput from 'components/ChatWindow/ChatTextInput.vue';
import type { Contact, Chat } from 'components/ChatWindow/model';

export default defineComponent({
  name: 'ChatWindow',

  components: {
    ChatWindowLayout, ChatTitle, ChatList, ChatMessages, ChatTextInput,
  },

  setup() {
    const { setChatWindowOpen } = useChat();

    return {
      setChatWindowOpen,
    };
  },

  data() {
    return {
      chatTitle: internet.userName(),
      chatThumbnail: image.business(50, 50),
      chatInput: '',

      contacts: Array.from(Array(10)).map(() => ({
        name: internet.userName(),
        lastMessage: lorem.words(),
        unreadMessages: random.number({ min: 0, max: 50, precision: 1 }),
      } as Contact)),

      chatMessages: Array.from(Array(10)).map(() => ({
        content: lorem.paragraph(),
        fromMe: random.boolean(),
      } as Chat)),
    };
  },

  computed: {
    unreadMessages(): number {
      return this.contacts.reduce(
        (total: number, { unreadMessages }: Contact) => total + unreadMessages,
        0,
      );
    },
  },

  methods: {
    sendMessage(message: string) {
      this.chatMessages.push({
        content: message,
        fromMe: true,
      });

      (this.$refs.chats as IChatMessages).scrollToLastMessage();
    },
  },
});
</script>
