<template>
  <q-dialog :value="value">
    <q-carousel
      ref="myCarousel"
      swipeable
      animated
      infinite
      v-model="slide"
      arrows
      class="full-width"
      @keyup.37="arrowLeft"
      @keyup.39="arrowRight"
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

<script>
export default {
  name: 'DetailCardDialog',
  props: {
    value: {
      type: Boolean,
      required: true,
    },
  },

  data: () => ({
    slide: 1,
    lorem: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
  }),

  methods: {
    arrowLeft() {
      this.$refs.myCarousel.previous();
    },
    arrowRight() {
      this.$refs.myCarousel.next();
    },
  },
};
</script>
