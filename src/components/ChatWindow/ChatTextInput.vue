<template>
  <q-input
    :value="value"
    @input="$emit('input', $event)"
    label="Type a message here..."
    dense
    autogrow
    class="fit"
    @keypress.enter.prevent="sendMessage"
  >
    <template #after>
      <q-btn
        type="submit"
        icon="send"
        dense
        flat
        round
        @click="sendMessage"
      />
    </template>
  </q-input>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'ChatTextInput',

  props: {
    value: String,
  },

  methods: {
    sendMessage() {
      this.$emit('message-entered');
      // reset value
      this.$emit('input', '');
    },
  },
});
</script>
