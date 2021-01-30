<template>
  <div class="chat-bar">
    <q-btn
      label="Chats"
      size="1rem"
      icon="chat"
      :icon-right="chatState.isChatWindowOpen ? 'expand_more' : 'expand_less'"
      text-color="grey-10"
      @click="toggleChatWindow"
    />
    <q-badge
      floating
      label="10"
      color="red"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import useChat from 'composition/useChat';

export default defineComponent({
  name: 'ChatBar',

  setup() {
    return useChat();
  },

  methods: {
    toggleChatWindow() {
      this.setChatWindowOpen((st) => !st);
    },
  },
});
</script>

<style lang="scss">
.chat-bar {
  position: relative;
  background-color: #fff;
  border-top: .25rem solid $primary;
  box-shadow: $shadow-6;
}
</style>
