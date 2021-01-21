<template>
  <q-page padding>
    <div class="row q-pt-lg justify-left">
      <q-carousel
        v-model="slide"
        transition-prev="scale"
        transition-next="scale"
        swipeable
        animated
        control-color="white"
        navigation
        padding
        arrows
        height="300px"
        class="bg-grey-6 text-white shadow-1 rounded-borders"
        style="width: 60%"
      >
        <q-carousel-slide
          name="style"
          class="column no-wrap flex-center"
        >
          <q-icon
            name="style"
            size="56px"
          />
          <div class="q-mt-md text-center">
            {{ lorem }}
          </div>
        </q-carousel-slide>
        <q-carousel-slide
          name="tv"
          class="column no-wrap flex-center"
        >
          <q-icon
            name="live_tv"
            size="56px"
          />
          <div class="q-mt-md text-center">
            {{ lorem }}
          </div>
        </q-carousel-slide>
        <q-carousel-slide
          name="layers"
          class="column no-wrap flex-center"
        >
          <q-icon
            name="layers"
            size="56px"
          />
          <div class="q-mt-md text-center">
            {{ lorem }}
          </div>
        </q-carousel-slide>
        <q-carousel-slide
          name="map"
          class="column no-wrap flex-center"
        >
          <q-icon
            name="terrain"
            size="56px"
          />
          <div class="q-mt-md text-center">
            {{ lorem }}
          </div>
        </q-carousel-slide>
      </q-carousel>

      <q-card
        class="my-card"
        style="margin-left: 70px"
      >
        <q-img
          src="~assets/images/lakukampus-channel-art_sm.jpg"
          style="height: 100%"
        />
      </q-card>

      <!-- KATEGORI PILIHAN -->
      <div class="text-h6 text-bold q-pt-xl">
        Kategori pilihan
      </div>

      <q-separator color="black" />

      <div
        v-for="n in 8"
        :key="n"
      >
        <q-card
          class="category-card q-ma-xs q-mt-md q-mx-md"
        >
          <q-img
            src="~assets/images/mountain.jpg"
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

      <div
        v-for="n in 12"
        :key="n"
      >
        <q-card
          class="danusan-card q-ma-xs q-mt-md q-mx-xs"
        >
          <q-img />
        </q-card>
      </div>

      <!-- BARANG BARU -->
      <div class="text-h6 text-bold q-pt-xl">
        Barang Baru
      </div>

      <q-separator color="black" />

      <div
        v-for="n in 3"
        :key="n"
      >
        <q-card
          class="new-stuff-card q-ma-xs q-mt-md q-mx-md"
        >
          <q-img
            src="~assets/images/mountain.jpg"
          />
        </q-card>
      </div>

      <!-- SPECIAL FOR YOUUU -->
      <div class="text-h6 text-bold q-pt-xl">
        Spesial Untuk Kamu
      </div>

      <q-separator color="black" />

      <div
        v-for="n in 12"
        :key="n"
      >
        <q-card
          class="danusan-card q-ma-xs q-mt-md q-mx-xs"
        >
          <q-img />
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      slide: 'style',
      lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.',
    };
  },
};
</script>

<style lang="sass">
  .my-card
    width: 30%

  .category-card
    width: 280px

  .danusan-card
    width: 200px
    height: 280px

  .new-stuff-card
    width: 390px
</style>
