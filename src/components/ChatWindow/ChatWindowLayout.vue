<template>
  <q-layout
    view="hHh LpR lFr"
    container
    class="chat-window"
  >
    <q-header>
      <q-bar v-if="!noHeaderBar">
        <slot name="header-bar" />
      </q-bar>

      <slot name="header" />
    </q-header>

    <q-drawer
      v-model="contactListOpen"
      :side="sideBarPosition"
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
import { defineComponent, PropType } from '@vue/composition-api';

export default defineComponent({
  name: 'ChatWindowLayout',

  props: {
    noHeaderBar: {
      type: Boolean,
      default: false,
    },
    sideBarPosition: {
      required: true,
      type: String as PropType<'right' | 'left'>,
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
  max-width: 80vw;
  min-height: 500px;
  max-height: calc(100vh - 2rem);
  border-radius: $generic-border-radius;
}
</style>
