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

    <div class="row text-dark bg-grey-3 q-mt-xl">
      <div class="col-3">
        <ul class="text-h6 text-weight-bold q-mt-lg">
          Lakukampus
        </ul>
        <ul>Tentang Kami</ul>
        <ul>Karir</ul>
      </div>
      <div class="col-3">
        <ul class="text-h6 text-weight-bold q-mt-lg">
          Pusat Bantuan
        </ul>
        <ul>Syarat dan Ketentuan</ul>
        <ul>Jaminan keamanan</ul>
      </div>
      <div class="col-3">
        <ul class="text-h6 text-weight-bold q-mt-lg">
          Kanal
        </ul>
        <ul>BersamaBisa</ul>
        <ul>Instagram</ul>
        <ul>Facebook</ul>
        <ul>Youtube</ul>
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

  .just-card
    width: 700px
    height: 300px
</style>
