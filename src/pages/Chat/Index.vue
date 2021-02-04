<template>
  <q-page
    padding
    style="height: 90vh"
  >
    <chat-window-layout
      class="fit"
      side-bar-position="left"
      no-header-bar
    >
      <chat-list
        slot="side-bar"
        :contacts="contacts"
      />

      <chat-text-input
        slot="bottom"
        v-model="chatTextInput"
        @message-entered="sendMessage"
      />

      <template>
        <chat-messages
          ref="chats"
          :chat-messages="chatMessages"
        />

        <chat-title
          :title="chatTitle"
          :photo="chatThumbnail"
        />
      </template>
    </chat-window-layout>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import ChatWindowLayout from 'components/ChatWindow/ChatWindowLayout.vue';
import ChatTitle from 'components/ChatWindow/ChatTitle.vue';
import ChatList from 'components/ChatWindow/ChatList.vue';
import ChatMessages, { IChatMessages } from 'components/ChatWindow/ChatMessages';
import ChatTextInput from 'components/ChatWindow/ChatTextInput.vue';
import useChatUI from 'composition/useChatUI';
import useChat from 'composition/useChat';
import { Contact } from 'components/ChatWindow/model';

export default defineComponent({
  name: 'ChatPage',

  components: {
    ChatWindowLayout, ChatTitle, ChatList, ChatMessages, ChatTextInput,
  },

  setup() {
    const {
      chatTitle,
      chatThumbnail,
      chatTextInput,
      chatMessages,
    } = useChatUI();

    return {
      chatTitle,
      chatThumbnail,
      chatTextInput,
      chatMessages,
      ...useChat(),
    };
  },

  data() {
    return {
      contacts: [] as Contact[],
    };
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
