<template>
  <div class="q-pa-md">
    <q-layout view="hHh Lpr lff">
      <q-header
        elevated
        class="bg-white"
      >
        <q-toolbar>
          <img
            src="~assets/images/Lakukampus_Logo.png"
            style="width: 190px"
            class="q-pa-sm q-pl-lg"
          >

          <q-toolbar-title class="text-grey-10">
            <q-input
              v-model="search"
              debounce="500"
              class="q-ml-lg"
              filled
              placeholder="Search"
              :dense="true"
              style="width: 550px"
            >
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>
          </q-toolbar-title>
          <q-btn
            flat
            color="black"
            icon="view_list"
            label="Kategori"
            size="md"
            style="margin-right: 200px"
          />
          <q-btn
            outline
            class="q-mr-md"
            color="warning"
            label="Masuk"
            size="md"
          />
          <q-btn
            push
            class="q-mr-md"
            color="warning"
            label="Daftar"
          />
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
  data() {
    return {
      search: '',
      dense: false,
    };
  },

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
