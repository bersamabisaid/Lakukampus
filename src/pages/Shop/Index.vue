<template>
  <q-page
    padding
    style="padding-bottom: 20vh fit column"
  >
    <header class="row q-mt-xl q-mx-xl">
      <div class="col">
        <shop-card class="full-width" />
      </div>
    </header>

    <main class="row q-mt-xl q-mx-xl">
      <div class="column items-start">
        <div
          class="col-12"
          style="width: 266px"
        >
          <shop-detail />
        </div>
        <div
          class="row q-ml-md"
          style="width: 940px;"
        >
          <div class="col-12 q-mb-xl">
            <div class="row">
              <q-input
                class="col"
                outlined
                v-model="text"
                label="Cari Produk Toko ini"
                dense
              >
                <template v-slot:append>
                  <q-btn
                    icon="search"
                    flat
                    round
                  />
                </template>
              </q-input>

              <div class="col-6" />

              <div class="col">
                <span class="q-mr-sm">Filter</span>
                <q-btn-dropdown
                  color="primary"
                  label="Terbaru"
                  dense
                >
                  <q-list>
                    <q-item
                      clickable
                      v-close-popup
                      @click="onItemClick"
                    >
                      <q-item-section>
                        <q-item-label>Termurah</q-item-label>
                      </q-item-section>
                    </q-item>

                    <q-item
                      clickable
                      v-close-popup
                      @click="onItemClick"
                    >
                      <q-item-section>
                        <q-item-label>Termahal</q-item-label>
                      </q-item-section>
                    </q-item>

                    <q-item
                      clickable
                      v-close-popup
                      @click="onItemClick"
                    >
                      <q-item-section>
                        <q-item-label>Ulasan Terbanyak</q-item-label>
                      </q-item-section>
                    </q-item>
                  </q-list>
                </q-btn-dropdown>
              </div>
            </div>
          </div>
          <div class="col-12">
            <product-list
              :products="products"
            />
          </div>
        </div>
      </div>
    </main>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import type { Product } from 'components/ui/ProductCard.vue';
import ProductList from 'components/modules/ProductList.vue';
import {
  commerce, image, random, company,
} from 'faker';
import ShopCard from './ShopCard.vue';
import ShopDetail from './ShopDetail.vue';

export default defineComponent({
  name: 'ShopPage',

  data() {
    return {
      products: Array.from(Array(12), () => ({
        name: commerce.productName(),
        price: random.number({ min: 1000, max: 100000, precision: 1000 }),
        photo: image.food(),
        bestChoice: random.boolean(),
        facultyName: random.word(),
        shopName: company.companyName(),
        rating: 9 / 10,
        discount: random.arrayElement([[], [1000], [1000, 50]]),
      })) as Product[],
      text: '',
    };
  },

  components: {
    ShopCard,
    ShopDetail,
    ProductList,
  },

});
</script>
