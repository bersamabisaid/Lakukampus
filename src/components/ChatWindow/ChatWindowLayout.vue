<template>
  <q-layout
    view="lHh lpr lFr"
    container
    class="chat-window"
  >
    <q-header elevated>
      <q-bar>
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
      <q-page
        padding
        class="bg-white"
      >
        <slot />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'ChatWindowLayout',

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
  max-width: 100vw;
  min-height: 500px;
  max-height: 100vh;
  box-shadow: $shadow-2;
  border-radius: $generic-border-radius;
}
</style>
