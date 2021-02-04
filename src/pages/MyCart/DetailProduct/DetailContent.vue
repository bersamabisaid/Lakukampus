<template>
  <div>
    <q-list>
      <q-card>
        <q-card-section class="q-ml-md">
          <h5 class="text-weight-medium q-my-none">
            Informasi Barang
          </h5>
          <h6 class="text-subtitle1 text-weight-bold q-mb-sm">
            Spesifikasi Produk
          </h6>
          <p>
            Kategori: Komputer & Aksesoris<br>
            Berat: 300 gram<br>
            Dikirim dari: FEB<br>
          </p>
          <h6 class="text-subtitle1 text-weight-bold q-mb-sm">
            Deskripsi Produk
          </h6>
          <p>{{ lorem }}</p>
        </q-card-section>
      </q-card>

      <q-card class="q-mt-xl">
        <q-card-section class="q-ml-md">
          <h5 class="text-weight-medium q-my-none">
            Penilaian Produk
          </h5>
          <div class="row q-mt-md">
            <q-circular-progress
              show-value
              class="text-light-blue q-ma-md"
              :value="value"
              size="60px"
              color="light-blue"
            />
            <div class="col-3 q-mt-sm">
              <q-rating
                size="md"
                v-model="stars"
                :max="5"
                color="primary"
              />
              <h6
                class="q-mt-sm text-primary"
              >
                4.8 dari 5
              </h6>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </q-list></q-card>
  </div>
</template>

<script>
import { lorem } from 'faker';

export default {
  name: 'DetailContent',

  data: () => ({
    lorem: lorem.paragraph(),
    stars: 4,
    value: 81,
  }),

};
</script>
