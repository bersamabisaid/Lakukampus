<template>
  <q-layout view="lHh Lpr lff">
    <q-header
      elevated
      class="bg-white"
    >
      <q-toolbar class="text-dark">
        <q-btn
          flat
          @click="drawer = !drawer"
          round
          dense
          icon="menu"
        />
        <q-toolbar-title>
          <q-img
            :src="require('assets/images/Lakukampus_logo.png')"
            width="180px"
          />
          Seller
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="drawer"
      show-if-above
      bordered
      :width="200"
    >
      <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px;">
        <q-list padding>
          <q-item
            clickable
            v-ripple
            @click="drawer = !drawer"
          >
            <q-item-section avatar>
              <q-icon name="keyboard_arrow_left" />
            </q-item-section>

            <q-item-section>
              Sembunyikan
            </q-item-section>
          </q-item>

          <q-item
            clickable
            v-ripple
          >
            <q-item-section avatar>
              <q-icon name="house" />
            </q-item-section>

            <q-item-section>
              Dashboard
            </q-item-section>
          </q-item>

          <q-item
            active
            clickable
            v-ripple
          >
            <q-item-section avatar>
              <q-icon name="star" />
            </q-item-section>

            <q-item-section>
              Daftar Barang
            </q-item-section>
          </q-item>

          <q-item
            clickable
            v-ripple
          >
            <q-item-section avatar>
              <q-icon name="paid" />
            </q-item-section>

            <q-item-section>
              Transaksi
            </q-item-section>
          </q-item>

          <q-item
            clickable
            v-ripple
          >
            <q-item-section avatar>
              <q-icon name="supervisor_account" />
            </q-item-section>

            <q-item-section>
              Karyawan
            </q-item-section>
          </q-item>

          <q-item
            clickable
            v-ripple
          >
            <q-item-section avatar>
              <q-icon name="settings" />
            </q-item-section>

            <q-item-section>
              Pengaturan
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>

      <q-img
        class="absolute-top"
        src="https://cdn.quasar.dev/img/material.png"
        style="height: 150px"
      >
        <div class="absolute-bottom bg-transparent">
          <q-avatar
            size="56px"
            class="q-mb-sm"
          >
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
          <div class="text-weight-bold">
            Nama Toko
          </div>
          <div>@rstoenescu</div>
        </div>
      </q-img>
    </q-drawer>

    <q-drawer
      side="right"
      v-model="drawerRight"
      show-if-above
      bordered
      :width="300"
      :breakpoint="500"
      content-class="bg-grey-3"
    >
      <q-scroll-area class="fit">
        <div class="q-pa-sm">
          <q-card
            flat
            bordered
            class="my-card bg-grey-1"
          >
            <q-card-section>
              <div class="row items-center no-wrap">
                <div class="col">
                  <div class="text-h6">
                    <q-icon
                      name="campaign"
                      size="md"
                    />
                    Informasi
                  </div>
                </div>

                <div class="col-auto">
                  <q-btn-dropdown label="Info">
                    <q-list>
                      <q-item
                        clickable
                        v-close-popup
                        @click="onItemClick"
                      >
                        <q-item-section>
                          <q-item-label>Photos</q-item-label>
                        </q-item-section>
                      </q-item>

                      <q-item
                        clickable
                        v-close-popup
                        @click="onItemClick"
                      >
                        <q-item-section>
                          <q-item-label>Videos</q-item-label>
                        </q-item-section>
                      </q-item>

                      <q-item
                        clickable
                        v-close-popup
                        @click="onItemClick"
                      >
                        <q-item-section>
                          <q-item-label>Articles</q-item-label>
                        </q-item-section>
                      </q-item>
                    </q-list>
                  </q-btn-dropdown>
                </div>
              </div>
            </q-card-section>

            <q-card-section>
              {{ lorem }}
            </q-card-section>

            <q-separator />

            <q-card-actions>
              <q-btn flat>
                Action 1
              </q-btn>
              <q-btn flat>
                Action 2
              </q-btn>
            </q-card-actions>
          </q-card>
        </div>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <transition enter-active-class="animated slideInUp">
        <router-view />
      </transition>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import useAuthGuard from 'composables/useAuthGuard';

export default defineComponent({
  name: 'DashboardLayout',

  setup() {
    useAuthGuard();
  },

  data() {
    return {
      drawer: false,
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
    };
  },

  methods: {
    onItemClick() {
      console.log('Anda ngeklik saya :)');
    },
  },
});

</script>
