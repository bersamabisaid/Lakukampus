<template>
  <q-layout view="hHh LpR fff">
    <q-header
      elevated
      reveal
      class="bg-white"
    >
      <q-toolbar class="q-py-sm row q-gutter-md-x-md">
        <q-btn
          flat
          :to="{name: 'Home'}"
        >
          <q-img
            v-if="isUnderMd"
            :src="require('assets/images/lakukampus-no-text.png')"
            width="50px"
          />
          <q-img
            v-else
            :src="require('assets/images/Lakukampus_logo.png')"
            width="180px"
          />
        </q-btn>

        <q-toolbar-title class="col-grow">
          <q-input
            v-model="search"
            placeholder="Search"
            filled
            dense
            required
            clearable
            @keypress.enter="submitSearchForm"
          >
            <q-btn
              slot="prepend"
              icon="tune"
              unelevated
              round
              @click="isFilterDrawerOpen = !isFilterDrawerOpen"
            />

            <q-btn
              v-if="!search"
              slot="append"
              icon="search"
              round
              unelevated
              @click="submitSearchForm"
            />
          </q-input>
        </q-toolbar-title>

        <template v-if="!isUnderMd">
          <q-btn
            label="Kategori"
            icon="view_list"
            size="sm"
            color="grey-10"
            flat
          />

          <q-btn
            label="Keranjang"
            icon="shopping_cart"
            :to="{name: 'MyCart'}"
            size="sm"
            color="grey-10"
            flat
          />

          <template v-if="isLoggedIn">
            <q-btn
              label="Chat"
              icon="chat_bubble"
              size="sm"
              color="grey-10"
              flat
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
              size="sm"
              flat
            >
              <q-avatar>
                <q-img src="https://cdn.quasar.dev/img/avatar.png" />
              </q-avatar>
            </q-btn>
          </template>

          <template v-else>
            <q-btn
              label="Masuk"
              color="amber-7"
              size="sm"
              outline
              @click="openLoginDialog"
            />
            <q-btn
              label="Daftar"
              color="amber-7"
              size="sm"
              push
              @click="openLoginDialog"
            />
          </template>
        </template>

        <q-btn
          v-show="isUnderMd"
          icon="menu"
          color="grey-10"
          round
          flat
          @click="isMainDrawerOpen = !isMainDrawerOpen"
        />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="isMainDrawerOpen"
      side="right"
      overlay
      bordered
      content-class="column"
    >
      <div
        v-if="isLoggedIn"
        class="full-width q-py-md q-px-xl bg-light-blue text-white column items-end"
      >
        <q-avatar
          size="4rem"
          class="q-mb-sm"
        >
          <img src="https://cdn.quasar.dev/img/boy-avatar.png">
        </q-avatar>

        <span class="text-weight-bold">
          Lakukampus Developer
        </span>

        <span>developer@lakukampus.id</span>
      </div>

      <q-scroll-area class="col full-height">
        <q-list>
          <q-item-label header>
            Menu Utama
          </q-item-label>

          <q-item
            v-if="isLoggedIn"
            clickable
            v-ripple
            class="text-grey-10"
            @click="setChatWindowOpen(state => !state)"
          >
            <q-item-section avatar>
              <q-icon name="chat" />
            </q-item-section>
            <q-item-section>Chat</q-item-section>
          </q-item>

          <q-item
            clickable
            v-ripple
            class="text-grey-10"
            :to="{name: 'MyCart'}"
          >
            <q-item-section avatar>
              <q-icon name="shopping_cart" />
            </q-item-section>
            <q-item-section>Keranjang Saya</q-item-section>
          </q-item>

          <q-item-label header>
            Akun dan Preferensi
          </q-item-label>

          <q-item
            clickable
            v-ripple
            class="text-grey-10"
          >
            <q-item-section avatar>
              <q-icon name="settings" />
            </q-item-section>
            <q-item-section>Pengaturan</q-item-section>
          </q-item>

          <q-item
            v-if="!isLoggedIn"
            clickable
            v-ripple
            class="bg-amber text-grey-1"
          >
            <q-item-section avatar>
              <q-icon name="login" />
            </q-item-section>
            <q-item-section>Daftar/Masuk</q-item-section>
          </q-item>

          <q-item
            v-else
            clickable
            v-ripple
            class="text-grey-10"
          >
            <q-item-section avatar>
              <q-icon name="logout" />
            </q-item-section>
            <q-item-section>Keluar</q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-drawer
      v-model="isFilterDrawerOpen"
      side="left"
      bordered
      :show-if-above="filterDrawerShowIfAbove"
    >
      <q-form
        ref="searchForm"
        @submit="onSearch"
        class="full-height column"
      >
        <q-bar class="bg-blue">
          <h6 class="q-mx-md q-my-sm text-body1 text-weight-medium text-white">
            Search and Filter
          </h6>
        </q-bar>

        <q-scroll-area class="col full-width q-py-sm">
          <q-list>
            <q-item dense>
              <q-item-section>
                <q-input
                  v-model="search"
                  label="Cari disini..."
                  clearable
                  dense
                  outlined
                />
              </q-item-section>
            </q-item>

            <q-item-label header>
              Kategori
            </q-item-label>

            <q-item dense>
              <q-item-section>
                <q-option-group
                  v-model="category"
                  :options="categoryOptions"
                  dense
                  inline
                />
              </q-item-section>
            </q-item>

            <q-item-label header>
              Fakultas
            </q-item-label>

            <q-item dense>
              <q-item-section>
                <q-option-group
                  v-model="faculty"
                  :options="facultyOptions"
                  dense
                  inline
                />
              </q-item-section>
            </q-item>

            <q-item-label header>
              Urutkan berdasarkan
            </q-item-label>

            <q-item dense>
              <q-item-section>
                <q-select
                  v-model="sortBy"
                  :options="sortByOptions"
                  outlined
                  dense
                  clearable
                />
              </q-item-section>
            </q-item>

            <q-item-label header>
              Range Harga
            </q-item-label>

            <q-item dense>
              <q-item-section>
                <q-input
                  label="Min"
                  v-model="priceMin"
                  type="number"
                  dense
                  outlined
                />
              </q-item-section>

              <q-item-section>
                <q-input
                  label="Max"
                  v-model="priceMax"
                  type="number"
                  dense
                  outlined
                />
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>

        <q-separator />

        <q-toolbar class="row justify-end">
          <q-btn
            label="Go"
            type="submit"
            color="primary"
          />
        </q-toolbar>
      </q-form>
    </q-drawer>

    <q-page-container>
      <transition enter-active-class="animated slideInUp">
        <router-view />
      </transition>
    </q-page-container>

    <q-footer
      elevated
      class="bg-grey-1"
    >
      <q-toolbar
        class="q-pt-md q-pb-xl text-grey-10 row items-baseline"
        style="flex-wrap: wrap;"
      >
        <div class="col-12 col-sm q-px-lg q-py-md">
          <h6 class="text-h6 text-weight-bold q-mt-sm q-mb-md">
            Lakukampus
          </h6>
          <ul class="normalize-list q-gutter-y-md">
            <li>
              <a
                href="#"
                class="normalize-anchor"
              >Tentang Kami</a>
            </li>
            <li>
              <a
                href="#"
                class="normalize-anchor"
              >Karir</a>
            </li>
          </ul>
        </div>

        <div class="col-12 col-sm q-px-lg q-py-md">
          <ul class="normalize-list q-gutter-y-md">
            <h6 class="text-h6 text-weight-bold q-mt-sm q-mb-md">
              Pusat Bantuan
            </h6>
            <li>
              <a
                href="#"
                class="normalize-anchor"
              >Syarat dan Ketentuan</a>
            </li>
            <li>
              <a
                href="#"
                class="normalize-anchor"
              >Kebijakan Privasi</a>
            </li>
            <li>
              <a
                href="#"
                class="normalize-anchor"
              >Jaminan Keamanan</a>
            </li>
          </ul>
        </div>

        <div class="col-12 col-sm q-px-lg q-py-md">
          <h6 class="text-h6 text-weight-bold q-mt-sm q-mb-md">
            Kanal
          </h6>
          <ul class="normalize-list q-gutter-y-md">
            <li>
              <a
                href="#"
                class="normalize-anchor"
              >BersamaBisa</a>
            </li>
            <li>
              <a
                href="#"
                class="normalize-anchor"
              >Instagram</a>
            </li>
            <li>
              <a
                href="#"
                class="normalize-anchor"
              >Facebook</a>
            </li>
            <li>
              <a
                href="#"
                class="normalize-anchor"
              >Youtube</a>
            </li>
          </ul>
        </div>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import useChatUI from 'composition/useChatUI';
import LoginDialog from 'components/ui/LoginDialog.vue';
import { compactObject } from 'utils/Object';
import type { SearchQuery } from 'pages/Search/Index.vue';
import type { Route } from 'vue-router';
import type { QForm } from 'quasar';

export default defineComponent({
  name: 'MainLayout',

  setup() {
    const { setChatWindowOpen } = useChatUI();

    return {
      setChatWindowOpen,
    };
  },

  data() {
    return {
      isLoggedIn: false,

      search: null as (null | string),
      category: null as (null | string),
      faculty: null as (null | string),
      sortBy: null as (null | string),
      priceMin: null as (null | number),
      priceMax: null as (null | number),
      isMainDrawerOpen: false,
      isFilterDrawerOpen: false,

      categoryOptions: [
        {
          label: 'Mainan',
          value: 'mainan',
        },
        {
          label: 'ATK',
          value: 'atk',
        },
      ],

      facultyOptions: [
        {
          label: 'FMIPA',
          value: 'fmipa',
        },
        {
          label: 'FKIP',
          value: 'fkip',
        },
        {
          label: 'FEB',
          value: 'feb',
        },
        {
          label: 'FT',
          value: 'ft',
        },
        {
          label: 'FK',
          value: 'fk',
        },
        {
          label: 'FH',
          value: 'fh',
        },
        {
          label: 'FH',
          value: 'fh',
        },
        {
          label: 'FISIP',
          value: 'fisip',
        },
      ],

      sortByOptions: [
        'Terbaru', 'Rating Tertinggi', 'Banyak penjualan',
      ],
    };
  },

  computed: {
    isUnderMd(): boolean {
      return this.$q.screen.width < this.$q.screen.sizes.md;
    },
    filterDrawerShowIfAbove() {
      return this.$route.name === 'Search';
    },
  },

  methods: {
    async onSearch() {
      const searchQuery = compactObject({
        q: this.search,
        category: this.category,
        faculty: this.faculty,
        sortBy: this.sortBy,
        priceMin: this.priceMin,
        priceMax: this.priceMax,
      } as SearchQuery) as Record<string, string>;

      await this.$router.push({
        name: 'Search',
        query: { ...searchQuery },
      });
    },

    submitSearchForm() {
      (this.$refs.searchForm as QForm).submit();
    },

    openLoginDialog() {
      this.$q.dialog({
        component: LoginDialog,
        parent: this,
      });
    },
  },

  watch: {
    $route(val: Route) {
      this.isFilterDrawerOpen = val.name === 'Search';
    },
  },
});
</script>
