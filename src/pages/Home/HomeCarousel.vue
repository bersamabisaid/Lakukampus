<template>
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
      img-src="https://picsum.photos/300/300"
    />
  </q-carousel>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'HomeCarousel',

  data() {
    return {
      slide: 'style'
    }
  }
});
</script>
