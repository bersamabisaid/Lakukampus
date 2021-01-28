<template>
  <chat-window-layout>
    <template #header-bar>
      <div>Chats ({{ unreadMessages }})</div>

      <q-space />

      <q-btn
        dense
        flat
        icon="close"
      />
    </template>

    <template #side-bar>
      <chat-list :contacts="contacts" />
    </template>

    <template #bottom>
      <chat-text-input
        v-model="chatInput"
      />
    </template>

    <template #default>
      <chat-messages />
    </template>
  </chat-window-layout>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { lorem, internet, random } from 'faker';
import ChatWindowLayout from './ChatWindowLayout.vue';
import ChatList from './ChatList.vue';
import ChatMessages from './ChatMessages.vue';
import ChatTextInput from './ChatTextInput.vue';
import type { Contact } from './model';

export default defineComponent({
  name: 'ChatWindow',

  components: {
    ChatWindowLayout, ChatList, ChatMessages, ChatTextInput,
  },

  data() {
    return {
      chatInput: '',

      contacts: Array.from(Array(10)).map(() => ({
        name: internet.userName(),
        lastMessage: lorem.words(),
        unreadMessages: random.number({ min: 0, max: 50, precision: 1 }),
      } as Contact)),
    };
  },

  computed: {
    unreadMessages() {
      return this.contacts.reduce(
        (total: number, { unreadMessages }: Contact) => total + unreadMessages,
        0,
      ) as number;
    },
  },
});
</script>
