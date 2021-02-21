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
              <important-card
                v-for="link in importantCardCustom"
                :key="link.id"
                v-bind="link"
              />
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

          <q-card-section horizontal>
            <div class="row">
              <summary-card
                v-for="icon in summaryCardCustom"
                :key="icon.id"
                v-bind="icon"
              />
            </div>

            <q-separator vertical />

            <q-card-section class="col-4 col-md-6">
              Pelanggan
            </q-card-section>
          </q-card-section>
        </q-card>
      </div>

      <!-- PERFORMA TOKO -->
      <!-- <div class="col-12">
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
                  v-for="i in 2"
                  :key="i"
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
      </div> -->
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import ImportantCard from 'components/ui/ImportantCard.vue';
import SummaryCard from 'components/ui/SummaryCard.vue';
import { uid } from 'quasar';

export default defineComponent({
  name: 'DashboardPage',

  data() {
    return {
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
      importantCardCustom: [
        {
          id: uid(),
          number: 1,
          caption: 'Sudah bayar',
          link: '',
        },
        {
          id: uid(),
          number: 2,
          caption: 'Pesanan baru',
          link: '',
        },
        {
          id: uid(),
          number: 3,
          caption: 'Siap dikirim',
          link: '',
        },
        {
          id: uid(),
          number: 4,
          caption: 'Pesanan dikomplain',
          link: '',
        },
        {
          id: uid(),
          number: 5,
          caption: 'Produk habis',
          link: '',
        },
        {
          id: uid(),
          number: 6,
          caption: 'Produk dilarang',
          link: '',
        },
      ],
      summaryCardCustom: [
        {
          id: uid(),
          icon: 'thumb_up_off_alt',
          caption: 'Feedback Positif',
        },
        {
          id: uid(),
          icon: 'thumb_down_off_alt',
          caption: 'Feedback Negative',
        },
        {
          id: uid(),
          icon: 'assignment_ind',
          caption: 'Pelanggan',
        },
      ],
    };
  },
  components: {
    ImportantCard,
    SummaryCard,
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
