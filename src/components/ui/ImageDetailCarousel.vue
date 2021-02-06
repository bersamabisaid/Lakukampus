<template>
  <div class="cursor-pointer q-gutter-sm">
    <q-carousel
      swipeable
      animated
      v-model="slide"
      infinite
      thumbnails
      @click="dialogClick"
      arrows
      class="scroll oveflow-hidden"
    >
      <q-carousel-slide
        name="1"
        img-src="https://cdn.quasar.dev/img/mountains.jpg"
      />
      <q-carousel-slide
        name="2"
        img-src="https://cdn.quasar.dev/img/parallax1.jpg"
      />
      <q-carousel-slide
        name="3"
        img-src="https://cdn.quasar.dev/img/parallax2.jpg"
      />
      <q-carousel-slide
        name="4"
        img-src="https://cdn.quasar.dev/img/quasar.jpg"
      />
      <q-carousel-slide
        name="5"
        img-src="https://cdn.quasar.dev/img/quasar.jpg"
      />
      <q-carousel-slide
        name="6"
        img-src="https://cdn.quasar.dev/img/parallax2.jpg"
      />
    </q-carousel>
    <detail-card-dialog v-model="dialog" />
  </div>
</template>

<script>
import DetailCardDialog from 'components/ui/DetailCardDialog.vue';

export default {
  name: 'ImageDetailCarousel',

  data: () => ({
    slide: '1',
    fullscreen: false,
    dialog: false,
  }),

  methods: {
    dialogClick() {
      this.dialog = !this.dialog;
    },
  },

  components: {
    DetailCardDialog,
  },
};
</script>
