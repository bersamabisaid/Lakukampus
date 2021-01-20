<template>
  <div class="q-pa-md">
    <q-layout view="hHh Lpr lff">
      <q-header
        elevated
        class="bg-white"
      >
        <q-toolbar>
          <q-toolbar-title class="text-grey-10">
            <img
              src="~assets/images/Lakukampus_Logo.png"
              style="width: 13%"
              class="q-pt-sm q-pl-lg"
            >
          </q-toolbar-title>
        </q-toolbar>
      </q-header>

      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
  </div>
</template>

<script lang="ts">
// import { defineComponent, ref } from '@vue/composition-api';

export default {
  name: 'MainHomepage',

  // setup(props, ctx) {
  // useAuthGuard(props, ctx);
  // return { ...useAuth() };
  // },
};
</script>

<style lang="css">
.flex-break {
    flex: 1 0 100% !important;
    height: 0 !important;
}
</style>
