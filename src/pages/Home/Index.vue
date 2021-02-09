<template>
  <q-page
    padding
    class="fit column"
  >
    <header class="row q-gutter-x-lg q-gutter-y-md">
      <q-card class="col-12 col-md-4 order-md-last shadow-1">
        <q-img
          :src="require('assets/images/lakukampus-channel-art_sm.jpg')"
          width="100%"
          height="300px"
        />
      </q-card>

      <home-carousel class="col" />
    </header>

    <main class="column q-py-xl q-px-md q-px-md-xl q-gutter-y-xl">
      <category-list-section :categories="categories" />

      <product-list
        title="Spesial untuk kamu"
        more-action-label="Lihat rekomendasi lainnya"
        :products="products.slice(0, 6)"
      />

      <section-layout
        title="Barang baru"
        class="column"
      >
        <div class="row q-col-gutter-md">
          <div
            v-for="n in 3"
            :key="n"
            class="col-4"
          >
            <q-img
              src="https://picsum.photos/390/243"
              height="200px"
              class="rounded-borders shadow-1"
            />
          </div>
        </div>
      </section-layout>

      <product-list
        title="Danusan"
        more-action-label="Lihat barang danusan lainnya"
        :products="products"
      >
        <div
          slot="bottom"
          class="self-center q-pt-xl"
        >
          <q-btn
            label="Tampilkan lebih banyak"
            color="primary"
          />
        </div>
      </product-list>

      <section-layout class="row items-center">
        <q-card
          class="col bg-grey shadow-1"
          style="height: 350px;"
        />

        <div class="col-12 col-md-5 column justify-center items-center">
          <article class="q-my-lg">
            <h6 class="text-h4 text-bold q-ma-none">
              Yuk mulai jualan<br>
              di Lakukampus !
            </h6>
            <h6 class="text-h6 q-ma-none">
              Mudah, nyaman, dan eksklusif<br>
              khusus anak yu-en-es!
            </h6>
          </article>
          <div>
            <q-btn
              label="Gabung Sekarang!"
              push
              color="warning"
              size="md"
              class="q-mr-md"
            />
            <q-btn
              label="Pelajari"
              outline
              color="warning"
              size="md"
              class="q-mr-md"
            />
          </div>
        </div>
      </section-layout>
    </main>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import {
  commerce, image, random, company,
} from 'faker';
import type { Product } from 'components/ui/ProductCard.vue';
import SectionLayout from 'layouts/SectionLayout.vue';
import ProductList from 'components/modules/ProductList.vue';
import HomeCarousel from './HomeCarousel.vue';
import CategoryListSection, { Category } from './CategoryListSection.vue';

export default defineComponent({
  name: 'HomePage',

  components: {
    HomeCarousel, SectionLayout, CategoryListSection, ProductList,
  },

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

      categories: Array.from(Array(6)).map(() => ({
        name: commerce.department(),
        thumbnail: random.image(),
      })) as Category[],
    };
  },
});
</script>
