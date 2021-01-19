<template>
  <q-page padding>
    <div class="row q-pt-lg justify-left">
      <div
        class="q-pa-md"
      >
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
          class="bg-primary text-white shadow-1 rounded-borders"
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
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data() {
    return {
      slide: 'style',
      lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.',
    };
  },
};
</script>
