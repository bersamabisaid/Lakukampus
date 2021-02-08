<template>
  <section>
    <div class="row">
      <h2
        v-if="title"
        class="text-h5 text-weight-medium q-my-none"
      >
        {{ title }}
      </h2>

      <q-space />

      <slot name="right-header" />
    </div>

    <q-separator
      v-if="title"
      spaced="lg"
    />

    <slot />
  </section>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'HomePageSectionLayout',

  props: {
    title: {
      default: '',
      type: String,
    },
  },
});
</script>
