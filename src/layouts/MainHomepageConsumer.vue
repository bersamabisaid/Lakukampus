<template>
  <q-layout view="hHh Lpr lff">
    <q-header
      elevated
      class="bg-white"
    >
      <q-toolbar>
        <q-btn
          flat
          :to="{name: 'Home'}"
        >
          <img
            :src="require('assets/images/Lakukampus_Logo.png')"
            style="width: 190px"
            class="q-pa-sm q-pl-lg"
          >
        </q-btn>

        <q-toolbar-title class="text-grey-10">
          <q-input
            v-model="search"
            debounce="500"
            class="q-ml-lg q-my-sm full-width"
            filled
            placeholder="Search"
            :dense="true"
          >
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </q-toolbar-title>
        <div>
          <q-btn
            label="Kategori"
            flat
            color="black"
            icon="view_list"
            size="sm"
          />
          <q-btn
            label="Keranjang"
            flat
            color="black"
            icon="shopping_cart"
            size="sm"
          />
          <q-btn
            label="Chat"
            flat
            color="black"
            icon="chat_bubble"
            size="sm"
            @click="setChatWindowOpen(state => !state)"
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
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import useChat from 'composition/useChat';

export default defineComponent({
  name: 'MainHomepage',

  setup() {
    const { setChatWindowOpen } = useChat();

    return {
      setChatWindowOpen,
    };
  },

  data() {
    return {
      search: '',
      dense: false,
    };
  },
});
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
