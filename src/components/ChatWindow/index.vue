<template>
  <chat-window-layout
    v-bind="$attrs"
    side-bar-position="right"
  >
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

    <template #side-bar>
      <chat-list :contacts="contacts" />
    </template>

    <template #bottom>
      <chat-text-input
        v-model="chatTextInput"
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
import useChatUI from 'composition/useChatUI';
import ChatWindowLayout from 'components/ChatWindow/ChatWindowLayout.vue';
import ChatTitle from 'components/ChatWindow/ChatTitle.vue';
import ChatList from 'components/ChatWindow/ChatList.vue';
import ChatMessages, { IChatMessages } from 'components/ChatWindow/ChatMessages';
import ChatTextInput from 'components/ChatWindow/ChatTextInput.vue';
import useChat from 'composition/useChat';
import type { Contact } from 'components/ChatWindow/model';

export default defineComponent({
  name: 'ChatWindow',

  components: {
    ChatWindowLayout, ChatTitle, ChatList, ChatMessages, ChatTextInput,
  },

  setup() {
    const {
      chatTitle,
      chatThumbnail,
      chatTextInput,
      chatMessages,
      setChatWindowOpen,
    } = useChatUI();

    return {
      chatTitle,
      chatThumbnail,
      chatTextInput,
      chatMessages,
      setChatWindowOpen,
      ...useChat(),
    };
  },

  data() {
    return {
      contacts: [] as Contact[],
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

  mounted() {
    this.contacts.push(...this.getContactList());
  },
});
</script>
