<template>
  <q-dialog
    :value="value"
    @keyup.37="arrowLeft"
    @keyup.39="arrowRight"
  >
    <q-carousel
      ref="theCarousel"
      swipeable
      animated
      infinite
      v-model="slide"
      arrows
      class="full-width"
    >
      <q-carousel-slide
        :name="1"
        img-src="https://cdn.quasar.dev/img/mountains.jpg"
      />
      <q-carousel-slide
        :name="2"
        img-src="https://cdn.quasar.dev/img/parallax1.jpg"
      />
      <q-carousel-slide
        :name="3"
        img-src="https://cdn.quasar.dev/img/parallax2.jpg"
      />
      <q-carousel-slide
        :name="4"
        img-src="https://cdn.quasar.dev/img/quasar.jpg"
      />
      <q-carousel-slide
        :name="5"
        img-src="https://cdn.quasar.dev/img/quasar.jpg"
      />
      <q-carousel-slide
        :name="6"
        img-src="https://cdn.quasar.dev/img/parallax2.jpg"
      />
    </q-carousel>
  </q-dialog>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { QCarousel } from 'quasar';

export default defineComponent({
  name: 'DetailCardDialog',

  props: {
    value: {
      type: Boolean,
      required: true,
    },
  },

  data() {
    return {
      slide: 1,
      lorem: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    };
  },

  methods: {
    arrowLeft() {
      (this.$refs.theCarousel as QCarousel).previous();
    },
    arrowRight() {
      (this.$refs.theCarousel as QCarousel).next();
    },
  },
});
</script>
