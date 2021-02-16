<template>
  <q-page
    padding
    class="row justify-center"
    style="min-height: 100vh"
  >
    <q-list
      bordered
      class="col-12 col-sm-2 text-weight-medium rounded-borders"
    >
      <q-item
        v-for="group in settingGroups"
        :key="group.label"
        :to="group.to"
        replace
        exact
        active-class="bg-blue-1 text-primary"
      >
        <q-item-section>{{ group.label }}</q-item-section>
      </q-item>
    </q-list>

    <q-card
      flat
      class="q-mx-lg q-my-xl q-my-sm-xs fit max-w-screen-xs"
    >
      <q-card-section>
        <keep-alive>
          <router-view />
        </keep-alive>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'SettingsLayout',

  data() {
    return {
      settingGroups: Object.freeze([
        {
          label: 'Umum',
          to: '/settings',
        },
        {
          label: 'Profil pengguna',
          to: { name: 'SettingsUserProfile' },
        },
      ]),
    };
  },

  computed: {
    isUnderMd() {
      return this.$q.screen.width < this.$q.screen.sizes.md;
    },
  },
});
</script>
