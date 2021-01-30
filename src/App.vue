<template>
  <div id="q-app">
    <router-view />

    <q-dialog
      v-model="chatState.isChatWindowOpen"
      seamless
      :position="chatState.position"
      :style="{width: $q.screen.sizes.sm}"
    >
      <chat-window />
    </q-dialog>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import ChatWindow from 'components/ChatWindow/index.vue';
import useChat from 'composition/useChat';

export default defineComponent({
  name: 'App',

  components: {
    ChatWindow,
  },

  setup() {
    const { chatState } = useChat();

    return { chatState };
  },
});
</script>
