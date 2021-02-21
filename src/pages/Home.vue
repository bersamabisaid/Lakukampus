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

      <home-carousel
        class="col"
        :slides="slides"
      />
    </header>

    <main class="column q-py-xl q-px-md q-px-md-xl q-gutter-y-xl">
      <category-list-section :categories="categories" />

      <product-list
        title="Spesial untuk kamu"
        more-action-label="Lihat rekomendasi lainnya"
        :products="products.slice(0, 6)"
        :more-action-to="{name: 'Recommended'}"
      />

      <product-list
        title="Paling laris"
        more-action-label="Lihat barang laris lainnya"
        :products="products.slice(0,6)"
      />

      <product-list
        title="Sedang promo"
        more-action-label="Lihat barang promo lainnya"
        :products="products.slice(0,6)"
        :more-action-to="{name: 'Recommended', query: {group: 'promo'}}"
      />

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
            label="Tampilkan lebih banyak barang danusan"
            color="primary"
          />
        </div>
      </product-list>

      <product-list
        title="Baru ditambahkan"
        more-action-label="Lihat barang baru lainnya"
        :products="products"
      >
        <div
          slot="bottom"
          class="self-center q-pt-xl"
        >
          <q-btn
            label="Tampilkan lebih banyak barang baru"
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
  commerce, random, company, image,
} from 'faker';
import SectionLayout from 'layouts/SectionLayout.vue';
import ProductList from 'components/modules/ProductList.vue';
import HomeCarousel from 'components/ui/Home/HomeCarousel.vue';
import CategoryListSection, { Category } from 'components/ui/Home/CategoryListSection.vue';
import type { Product } from 'components/ProductCard.vue';

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
        photo: image.technics(200),
        bestChoice: random.boolean(),
        facultyName: random.word(),
        shopName: company.companyName(),
        rating: 9 / 10,
        discount: random.arrayElement([[], [1000], [1000, 50]]),
      })) as Product[],

      categories: Array.from(Array(6), () => ({
        name: commerce.department(),
        thumbnail: image.abstract(200),
      })) as Category[],

      slides: Array.from(Array(4), () => ({
        img: 'https://picsum.photos/500',
      })),
    };
  },
});
</script>
