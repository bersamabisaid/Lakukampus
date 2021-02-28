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
      <div
        class="col-12 col-md-2"
        style="min-width: 266px"
      >
        <shop-detail />
      </div>

      <div class="col" />

      <div class="col-12 col-md-9">
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
            <div class="float-right">
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
                    v-for="n in 3"
                    :key="n"
                  >
                    <q-item-section>
                      <q-item-label>{{ filter }}</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-btn-dropdown>
            </div>
          </div>
        </div>
        <product-list
          :products="products.slice(0,10)"
          item-class="col-12 col-md-3"
          class="q-mt-lg"
        />
      </div>
    </main>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import {
  commerce, image, random, company, address,
} from 'faker';
import ProductList from 'components/modules/ProductList.vue';
import ShopCard from 'components/ui/Shop/ShopCard.vue';
import ShopDetail from 'components/ui/Shop/ShopDetail.vue';
import type { Product } from 'components/ProductCard.vue';

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
      filter: address.city(),
    };
  },

  components: {
    ShopCard,
    ShopDetail,
    ProductList,
  },

});
</script>
