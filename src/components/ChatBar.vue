<template>
  <div class="chat-bar">
    <q-btn
      label="Chats"
      size="1rem"
      icon="chat"
      :icon-right="isChatOpen ? 'expand_more' : 'expand_less'"
      text-color="grey-10"
      @click="isChatOpen = !isChatOpen"
    />
    <q-badge
      floating
      label="10"
      color="red"
    />
    <chat-window
      v-show="isChatOpen"
      style="bottom: 2rem; right: -1rem;"
      class="absolute shadow-24"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import ChatWindow from 'components/ChatWindow/index.vue';

export default defineComponent({
  name: 'ChatBar',

  components: {
    ChatWindow,
  },

  data() {
    return {
      isChatOpen: false,
    };
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
