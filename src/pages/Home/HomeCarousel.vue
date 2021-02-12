<template>
  <q-carousel
    v-model="slide"
    :autoplay="5000"
    infinite
    padding
    arrows
    height="300px"
    control-color="white"
    control-text-color="grey-9"
    navigation
    swipeable
    animated
    transition-prev="slide-right"
    transition-next="slide-left"
    class="bg-grey-6 shadow-1 rounded-borders"
  >
    <q-carousel-slide
      name="default"
      class="column no-wrap flex-center"
      :img-src="require('assets/images/example-banner.png')"
    />
    <q-carousel-slide
      v-for="(slide, i) in slides"
      :key="`${_uid}_${i}`"
      :name="`${_uid}_${i}`"
      class="column no-wrap flex-center"
      :img-src="slide.img"
    />
  </q-carousel>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api';

interface SlideData {
  img: string;
}

export default defineComponent({
  name: 'HomeCarousel',

  props: {
    slides: {
      type: Array as PropType<SlideData[]>,
      required: true,
    },
  },

  data() {
    return {
      slide: 'default',
    };
  },
});
</script>
