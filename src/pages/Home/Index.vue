<template>
  <q-page
    padding
    class="fit column"
  >
    <header class="row q-gutter-x-lg">
      <home-carousel class="col" />

      <q-card class="col-4">
        <q-img
          :src="require('assets/images/lakukampus-channel-art_sm.jpg')"
          width="100%"
          height="100%"
        />
      </q-card>
    </header>

    <main class="column q-pa-xl q-gutter-y-xl">
      <section class="column">
        <h2 class="text-h4 q-my-none">
          Kategori Pilihan
        </h2>

        <q-separator spaced="lg" />

        <div class="row q-col-gutter-md">
          <div
            v-for="n in 12"
            :key="n"
            class="col-2"
          >
            <q-img
              src="https://picsum.photos/seed/picsum/280/175"
              height="100px"
              class="rounded-borders shadow-2"
            />

            <h5 class="text-h6 text-center q-ma-none">
              Title
            </h5>
          </div>
        </div>
      </section>

      <section class="column">
        <h2 class="text-h4 q-my-none">
          Khusus Danusan
        </h2>

        <q-separator spaced="lg" />

        <div class="row q-col-gutter-md">
          <div
            v-for="product in products"
            :key="product.name"
            class="col-2"
          >
            <product-card v-bind="product" />
          </div>
        </div>
      </section>

      <section class="column">
        <h2 class="text-h4 q-my-none">
          Barang Baru
        </h2>

        <q-separator spaced="lg" />

        <div class="row q-col-gutter-md">
          <div
            v-for="n in 3"
            :key="n"
            class="col-4"
          >
            <q-card>
              <q-img
                src="https://picsum.photos/390/243"
                height="200px"
              />
            </q-card>
          </div>
        </div>
      </section>

      <section class="column">
        <h2 class="text-h4 q-my-none">
          Spesial Untuk Kamu
        </h2>

        <q-separator spaced="lg" />

        <div class="row q-col-gutter-md">
          <div
            class="col-2"
            v-for="product in products"
            :key="`${product.name}-(2)`"
          >
            <product-card v-bind="product" />
          </div>
        </div>
      </section>

      <section class="row items-center">
        <q-card
          class="col bg-grey"
          style="height: 350px;"
        />

        <div class="col-5 column justify-center items-center">
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
      </section>
    </main>
  </q-page>
</template>

<script lang="ts">
import {
  commerce, image, random,
} from 'faker';
import productCard from 'components/ui/productCard.vue';
import HomeCarousel from './HomeCarousel.vue';

export default {
  name: 'HomePage',

  components: {
    productCard, HomeCarousel,
  },

  data() {
    return {
      products: Array.from(Array(12)).map(() => ({
        name: commerce.productName(),
        price: random.number({ min: 1000, max: 100000, precision: 1000 }),
        photo: image.food(),
        bestChoice: random.boolean(),
      })),
    };
  },
};
</script>
