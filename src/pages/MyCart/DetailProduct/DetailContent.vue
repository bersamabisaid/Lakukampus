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
          <div
            class="row q-mt-md"
            style="height: 150px"
          >
            <q-circular-progress
              show-value
              :min="1"
              :max="5"
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
                4.5 dari 5
              </h6>
            </div>
            <div class="col-6 q-gutter-md">
              <q-btn
                v-for="n in 4"
                :key="n"
                outline
                style="color: goldenrod;"
                label="Goldenrod"
              />
              <q-btn
                v-for="n in 5"
                :key="n"
                icon="star"
                label="4"
                text-color="primary"
              />
            </div>
          </div>

          <div class="column q-mt-md">
            <div
              class="q-mt-lg"
              v-for="i in 3"
              :key="i"
            >
              <q-item>
                <q-item-section side>
                  <q-avatar
                    rounded
                    size="48px"
                  >
                    <img src="https://picsum.photos/200/300">
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <q-item-label>Mary</q-item-label>
                  <q-item-label caption>
                    <q-rating
                      size="sm"
                      v-model="stars"
                      :max="5"
                      color="primary"
                    />
                  </q-item-label>
                </q-item-section>
              </q-item>
              <div class="q-ml-md q-mb-md">
                Ihh barannya bagus bangett dehhh...:)
              </div>

              <q-separator inset />
            </div>
          </div>
        </q-card-section>
      </q-card>
    </q-list>
  </div>
</template>

<script>
import { lorem } from 'faker';

export default {
  name: 'DetailContent',

  data: () => ({
    lorem: lorem.paragraph(),
    stars: 4,
    value: 4.5,
  }),

};
</script>
