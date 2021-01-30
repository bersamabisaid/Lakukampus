<template>
  <q-layout
    view="hHh LpR lFr"
    container
    class="chat-window"
  >
    <q-header elevated>
      <q-bar v-if="!noHeader">
        <slot name="header-bar" />
      </q-bar>
    </q-header>

    <q-drawer
      v-model="contactListOpen"
      side="right"
      :breakpoint="200"
      :width="220"
      bordered
    >
      <q-scroll-area class="fit">
        <slot name="side-bar" />
      </q-scroll-area>
    </q-drawer>

    <q-footer elevated>
      <q-toolbar class="bg-white">
        <slot name="bottom" />
      </q-toolbar>
    </q-footer>

    <q-page-container>
      <q-page class="flex bg-white">
        <slot />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'ChatWindowLayout',

  props: {
    noHeader: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      contactListOpen: true,
    };
  },
});
</script>

<style lang="scss">
.chat-window {
  min-width: $breakpoint-xs;
  max-width: calc(100vw - 2rem);
  min-height: 500px;
  max-height: calc(100vh - 2rem);
  box-shadow: $shadow-24 !important;
  border-radius: $generic-border-radius;
}
</style>
