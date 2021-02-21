<template>
  <q-card>
    <q-list>
      <q-card>
        <img
          src="https://cdn.quasar.dev/img/mountains.jpg"
          class="full-width"
          style="height: 300px"
        >

        <q-card-section class="q-mx-xl">
          <div class="col-12">
            <div class="text-h6">
              TS Bookstore
              <q-icon
                name="stars"
                color="primary"
              />
            </div>
            <span>
              <q-icon name="location_on" />
              Jakarta Selatan
            </span>

            <div class="row q-my-md">
              <div class="col-2">
                <span class="text-subtitle2 q-mb-sm text-grey-8">
                  Produk Terjual
                  <q-icon
                    name="error"
                    size="sm"
                  />
                </span>
                <span class="text-h4 text-weight-medium q-mr-md">
                  1.7K
                </span>
              </div>

              <div class="col-4 self-end">
                <span class="text-subtitle2 text-weight-regular text-grey-8">
                  Nilai Kualitas Produk
                </span>
                <div class="row">
                  <span class="text-h4 q-mr-sm">
                    5
                  </span>
                  <q-rating
                    v-model="ratingModel"
                    size="md"
                    :max="5"
                    color="warning"
                  />
                  <span class="q-mt-md q-ml-sm text-weight-bold text-grey-9">(1500 Ulasan)</span>
                </div>
              </div>

              <div class="col-6 self-end">
                <div class="float-right q-gutter-sm">
                  <q-btn
                    color="primary"
                    label="Ikuti"
                  />
                  <q-btn
                    color="grey-3"
                    text-color="dark"
                    label="Kirim Chat"
                  />
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-6 q-mt-md">
                <q-tabs
                  v-model="tab"
                  dense
                  class="q-mr-xl"
                  active-color="primary"
                  narrow-indicator
                >
                  <q-tab
                    name="deskripsi"
                    label="Deskripsi"
                  />
                  <q-tab
                    name="catatan pelapak"
                    label="Catatan Pelapak"
                  />
                  <q-tab
                    name="statistik pelapak"
                    label="Statistik Pelapak"
                  />
                </q-tabs>

                <q-separator />

                <q-tab-panels
                  v-model="tab"
                  animated
                >
                  <q-tab-panel name="deskripsi">
                    <div class="text-h6">
                      Deskripsi
                    </div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </q-tab-panel>

                  <q-tab-panel name="catatan pelapak">
                    <div class="text-h6">
                      Catatan Pelapak
                    </div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </q-tab-panel>

                  <q-tab-panel name="statistik pelapak">
                    <div class="text-h6">
                      Statistik Pelapak
                    </div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </q-tab-panel>
                </q-tab-panels>
              </div>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </q-list>
  </q-card>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'ShopCard',

  data: () => ({
    ratingModel: 5,
    tab: 'deskripsi',
  }),

});
</script>
