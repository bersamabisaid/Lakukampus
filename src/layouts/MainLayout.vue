<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Essential Links
        </q-item-label>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
      <q-page-sticky
        position="bottom-right"
        :offset="chatBarOffset"
      >
        <chat-bar />
      </q-page-sticky>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import ChatBar from 'components/ChatBar.vue';

export default defineComponent({
  name: 'MainLayout',

  components: {
    ChatBar,
  },

  data() {
    return {
      leftDrawerOpen: false,
    };
  },

  computed: {
    chatBarOffset() {
      const screenWidth = this.$q.screen.width;
      return [screenWidth / 10, 0];
    },
  },
});
</script>
