<template>
  <q-toolbar class="bg-white shadow-2 absolute">
    <q-avatar
      color="primary"
      text-color="white"
    >
      <img
        v-if="photo"
        :src="photo"
        alt="user avatar"
      >
      <span v-else>{{ title.charAt(0) }}</span>
    </q-avatar>

    <q-toolbar-title class="text-black flex column justify-center">
      <h4
        class="q-ma-none text-body1 text-weight-regular"
      >
        {{ title }}
      </h4>
      <small
        v-if="status"
        class="text-caption"
      >{{ status }}</small>
    </q-toolbar-title>
  </q-toolbar>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'ChatTitle',

  props: {
    photo: {
      type: String,
      default: '',
    },
    title: {
      required: true,
      type: String,
    },
    status: {
      type: String,
      default: '',
    },
  },
});
</script>
