<template>
  <div>
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
              class="q-ml-lg q-my-sm"
              filled
              placeholder="Search"
              :dense="true"
              style="width: 625px"
            >
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>
          </q-toolbar-title>
          <div>
            <q-btn
              flat
              color="black"
              icon="view_list"
              label="Kategori"
              size="sm"
            />
            <q-btn
              flat
              color="black"
              icon="shopping_cart"
              label="Keranjang"
              size="sm"
            />
            <q-btn
              flat
              color="black"
              icon="chat_bubble"
              label="Chat"
              size="sm"
            >
              <q-badge
                color="orange"
                floating
              >
                4
              </q-badge>
            </q-btn>
            <q-btn
              flat
              color="black"
              size="sm"
              class="q-ml-md on-right"
            >
              <q-avatar>
                <img src="https://cdn.quasar.dev/img/avatar.png">
              </q-avatar>
              <div class="q-ml-sm text-capitalize">
                Halo <em class="text-weight-bold">Shabi</em>
              </div>
            </q-btn>
          </div>
        </q-toolbar>
      </q-header>

      <q-page-container>
        <router-view />
      </q-page-container>

      <q-footer
        elevated
        class="footer-cus bg-grey-1"
      >
        <q-toolbar class="q-mt-md justify-start">
          <div class="col-cus text-dark">
            <ul class="ul-cus">
              <div class="text-h6 text-weight-bold q-my-md">
                Lakukampus
              </div>
              <div class="q-gutter-md q-mt-md">
                <li>Tentang Kami</li>
                <li>Karir</li>
              </div>
            </ul>
          </div>

          <div class="col-cus text-dark">
            <ul class="q-mt-md ul-cus">
              <div class="text-h6 text-weight-bold q-my-md">
                Pusat Bantuan
              </div>
              <div class="q-gutter-md q-mt-md">
                <li>Syarat dan Ketentuan</li>
                <li>Kebijakan Privasi</li>
                <li>Jaminan Keamanan</li>
              </div>
            </ul>
          </div>

          <div class="col-cus text-dark">
            <ul class="q-mt-md ul-cus">
              <div class="text-h6 text-weight-bold q-my-md">
                Kanal
              </div>
              <div class="q-gutter-md q-mt-md">
                <li>BersamaBisa</li>
                <li>Instagram</li>
                <li>Facebook</li>
                <li>Youtube</li>
              </div>
            </ul>
          </div>
        </q-toolbar>
      </q-footer>
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

<style lang="scss">
  .footer-cus {
    height: 250px;
    width: 100%;
  }

  .ul-cus {
    list-style-type: none;
  }

  .col-cus {
    height: 230px;
    width: 220px ;
  }

  em {
     font-style: normal;
     text-decoration: none;
  }
</style>
