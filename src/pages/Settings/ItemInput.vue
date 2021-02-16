<template>
  <q-item>
    <q-item-section>
      <q-item-label class="text-weight-medium">
        {{ label }}
      </q-item-label>
      <q-item-label>
        <q-input
          :value="value"
          @change="$emit('change', $event)"
          :placeholder="label"
          outlined
          dense
          v-bind="$attrs"
        />
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'ItemInput',

  props: {
    label: String,
    value: [String, Number],
  },
});
</script>
