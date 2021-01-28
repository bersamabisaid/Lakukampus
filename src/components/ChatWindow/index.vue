<template>
  <chat-window-layout v-show="value">
    <template #header-bar>
      <div
        @click="closeChatWindow"
        class="non-selectable"
      >
        Chats ({{ unreadMessages }})
      </div>

      <q-space />

      <q-btn
        dense
        flat
        icon="close"
        @click="closeChatWindow"
        title="hide chat window"
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
      <chat-messages :chat-messages="chatMessages" />
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
import type { Contact, Chat } from './model';

export default defineComponent({
  name: 'ChatWindow',

  components: {
    ChatWindowLayout, ChatList, ChatMessages, ChatTextInput,
  },

  props: {
    value: {
      type: Boolean,
      default: true,
    },
  },

  data() {
    return {
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
    closeChatWindow() {
      this.$emit('input', !this.value);
    },
  },
});
</script>
