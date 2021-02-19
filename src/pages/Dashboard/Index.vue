<template>
  <q-page class="q-pa-lg">
    <div class="row q-col-gutter-lg">
      <div class="col-12">
        <q-card
          class="my-card"
          flat
          bordered
        >
          <q-item>
            <q-item-section avatar>
              <q-icon
                name="report"
                size="md"
              />
            </q-item-section>

            <q-item-section>
              <q-item-label>Penting</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator />

          <q-card-section horizontal>
            <div class="row items-center">
              <q-card-section
                class="col-4 col-md-3 q-pa-sm"
                v-for="n in 6"
                :key="n"
              >
                <div>
                  <q-card class="my-card custom-card">
                    <q-card-section
                      v-ripple
                      class="column items-center"
                    >
                      <div class="text-primary text-weight-medium">
                        0
                      </div>
                      <div class="text-center text-caption">
                        Pengiriman perlu diproses
                      </div>
                    </q-card-section>
                  </q-card>
                </div>
              </q-card-section>
            </div>
          </q-card-section>
        </q-card>
      </div>

      <!-- DAFTAR BARANG n MSH BLUM TAU-->
      <div class="col-12">
        <q-card
          class="my-card"
          flat
          bordered
        >
          <q-item>
            <q-item-section avatar>
              <q-icon name="receipt_long" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Ringkasan Toko</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator />

          <q-card-section
            horizontal
            class="col-4 col-md-6"
          >
            <q-card-section
              horizontal
              v-for="n in 2"
              :key="n"
            >
              <div>
                <q-card
                  vertical
                  class="my-card custom-card"
                  flat
                  v-for="n in 2"
                  :key="n"
                >
                  <q-card-section>
                    <q-icon
                      name="thumb_up_off_alt"
                      size="md"
                    /><br>
                    feedback positif
                  </q-card-section>
                </q-card>
              </div>
            </q-card-section>

            <q-separator vertical />

            <q-card-section class="col-4 col-md-6">
              Pelanggan
            </q-card-section>
          </q-card-section>
        </q-card>
      </div>

      <!-- PERFORMA TOKO -->
      <div class="col-12">
        <q-card
          class="my-card"
          flat
          bordered
        >
          <q-item>
            <q-item-section avatar>
              <q-icon name="receipt_long" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Performa Toko</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator />

          <q-card-section
            horizontal
            class="col-4 col-md-6"
          >
            <q-card-section
              horizontal
              v-for="n in 2"
              :key="n"
            >
              <div>
                <q-card
                  vertical
                  class="my-card custom-card"
                  flat
                  v-for="n in 2"
                  :key="n"
                >
                  <q-card-section>
                    <q-icon
                      name="thumb_up_off_alt"
                      size="md"
                    /><br>
                    feedback positif
                  </q-card-section>
                </q-card>
              </div>
            </q-card-section>

            <q-separator vertical />

            <q-card-section class="col-4 col-md-6">
              Pelanggan
            </q-card-section>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'DashboardPage',

  data() {
    return {
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    };
  },
});
</script>

<style lang="scss">
  .custom-card {
    background-color: white;
    transition-duration: 0.1s;
  }

  .custom-card:hover {
    background-color: gainsboro;
  }
</style>
