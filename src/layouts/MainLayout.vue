<template>
  <q-layout view="hHh LpR fff">
    <q-header
      elevated
      reveal
      class="bg-white"
    >
      <q-toolbar class="q-py-sm">
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

        <q-toolbar-title>
          <q-input
            v-model="search"
            placeholder="Search"
            filled
            dense
            required
            clearable
            @keypress.enter="$refs.searchForm.submit()"
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
              @click="$refs.searchForm.submit()"
            />
          </q-input>
        </q-toolbar-title>

        <q-btn
          v-show="!isUnderMd"
          label="Kategori"
          icon="view_list"
          size="sm"
          color="grey-10"
          flat
        />
        <q-btn
          v-show="!isUnderMd"
          label="Keranjang"
          icon="shopping_cart"
          :to="{name: 'MyCart'}"
          size="sm"
          color="grey-10"
          flat
        />
        <q-btn
          v-show="!isUnderMd"
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
          v-show="!isUnderMd"
          size="sm"
          flat
        >
          <q-avatar>
            <q-img src="https://cdn.quasar.dev/img/avatar.png" />
          </q-avatar>
        </q-btn>
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
    >
      <q-scroll-area class="fit">
        <q-list>
          <q-item
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
                  required
                />
              </q-item-section>
            </q-item>

            <q-item-label header>
              Category
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
      <router-view />
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
import { SearchQuery } from 'pages/Search/Index.vue';
import { compactObject } from 'utils/Object';
import type { Route } from 'vue-router';

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
      search: '',
      category: '',
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
      const searchQuery: SearchQuery = compactObject({
        q: this.search,
        category: this.category,
      });

      await this.$router.push({
        name: 'Search',
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        query: { ...searchQuery },
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
