<template>
  <div>
    <q-chat-message
      bg-color="primary"
      text-color="white"
      stamp="17 seconds ago"
      :text="['dasdasda']"
    />

    <q-chat-message
      sent
      :text="['dasdasda']"
      stamp="1 seconds ago"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'ChatMessages',
});
</script>
