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

      <product-list-section
        title="Spesial Untuk Kamu"
        :products="products"
      />

      <section-layout
        title="Barang Baru"
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

      <product-list-section
        title="Danusan"
        :products="products"
      />

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
import {
  commerce, image, random,
} from 'faker';
import HomeCarousel from './HomeCarousel.vue';
import SectionLayout from './SectionLayout.vue';
import CategoryListSection, { Category } from './CategoryListSection.vue';
import ProductListSection, { Product } from './ProductListSection.vue';

export default {
  name: 'HomePage',

  components: {
    HomeCarousel, SectionLayout, CategoryListSection, ProductListSection,
  },

  data() {
    return {
      products: Array.from(Array(12)).map(() => ({
        name: commerce.productName(),
        price: random.number({ min: 1000, max: 100000, precision: 1000 }),
        photo: image.food(),
        bestChoice: random.boolean(),
      })) as Product[],

      categories: Array.from(Array(10)).map(() => ({
        name: commerce.department(),
        thumbnail: random.image(),
      })) as Category[],
    };
  },
};
</script>
