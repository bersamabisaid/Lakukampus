<template>
  <q-page padding>
    <div class="row q-pa-md q-ml-md self-center">
      <home-carousel />

      <q-card
        class="my-card"
        style="margin-left: 70px"
      >
        <q-img
          :src="require('assets/images/lakukampus-channel-art_sm.jpg')"
          style="height: 100%"
        />
      </q-card>

      <!-- KATEGORI PILIHAN -->
      <div class="text-h6 text-bold q-pt-xl">
        Kategori pilihan
      </div>

      <q-separator
        class="separator-cus"
        color="black"
      />

      <div
        v-for="n in 8"
        :key="n"
      >
        <q-card class="category-card q-ma-xs q-mt-md q-mx-md">
          <q-img
            src="https://picsum.photos/seed/picsum/280/175"
          />
        </q-card>

        <div
          class="text-h6"
          style="margin-left: 130px"
        >
          Title
        </div>
      </div>

      <!-- KHUSUS DANUSAN -->
      <div class="text-h6 text-bold q-pt-xl">
        Khusus Danusan
      </div>

      <q-separator color="black" />

      <product-card
        v-for="product in products"
        :key="product.name"
        v-bind="product"
      />

      <!-- BARANG BARU -->
      <div class="text-h6 text-bold q-pt-xl">
        Barang Baru
      </div>

      <q-separator color="black" />

      <q-card
        v-for="n in 3"
        :key="n"
        class="new-stuff-card q-ma-xs q-mt-md q-mx-md"
      >
        <q-img src="https://picsum.photos/390/243" />
      </q-card>

      <!-- SPECIAL FOR YOUUU -->
      <div class="text-h6 text-bold q-pt-xl">
        Spesial Untuk Kamu
      </div>

      <q-separator
        class="separator-cus"
        color="black"
      />

      <q-card
        v-for="n in 12"
        :key="n"
        class="danusan-card q-ma-xs q-mt-md q-mx-xs"
      >
        <q-img />
      </q-card>

      <!-- JUST CARD -->
      <div class="q-pt-xl">
        <q-card class="just-card bg-grey-6">
          <q-card-section />
        </q-card>
      </div>
      <div
        class="q-ma-md"
        style="margin-top: 55px; margin-left: 80px"
      >
        <h4 class="text-bold">
          Yuk mulai jualan<br>
          di Lakukampus !
          <div class="text-h6">
            Mudah, nyaman, dan eksklusif<br>
            khusus anak yu-en-es!
          </div>
        </h4>
        <q-btn
          push
          class="q-mr-md"
          color="warning"
          label="Gabung Sekarang!"
          size="md"
        />
        <q-btn
          outline
          class="q-mr-md"
          color="warning"
          label="Pelajari"
          size="md"
        />
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import {
  commerce, image, random,
} from 'faker';
import productCard from 'components/ui/productCard.vue';
import HomeCarousel from './HomeCarousel.vue';

export default {
  name: 'Home',

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

<style lang="scss">
  .my-card {
    width: 30%;
  }
  .category-card {
    width: 280px;
  }
  .danusan-card {
    width: 200px;
    height: 280px;
  }

  .new-stuff-card {
    width: 390px;
  }

  .just-card {
    width: 700px;
    height: 300px;
  }

  .separator-cus {
    margin-right: 38px;
  }

  .done {
    text-decoration: line-through;
    color: #bbb;
  }
</style>
