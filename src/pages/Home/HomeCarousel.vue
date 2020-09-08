<template>
    <q-carousel
        ref="carousel"
        v-model="slide"
        navigation
        transition-prev="slide-right"
        transition-next="slide-left"
        infinite
        swipeable
        animated
        padding
        height="350px"
        class="text-white shadow-1 rounded-borders col"
    >
        <q-carousel-slide
            name="style"
            :img-src="require('assets/images/lakukampus-channel-art_sm.jpg')"
        />
        <q-carousel-slide
            name="tv"
            class="column no-wrap flex-center"
            img-src="https://cdn.quasar.dev/img/quasar.jpg"
        />
        <q-carousel-slide
            name="layers"
            class="column no-wrap flex-center"
            img-src="https://cdn.quasar.dev/img/parallax1.jpg"
        />
        <q-carousel-slide
            name="map"
            class="column no-wrap flex-center"
            img-src="https://cdn.quasar.dev/img/mountains.jpg"
        />
        <template v-slot:control>
            <q-carousel-control
                class="q-gutter-xs"
                position="left"
            >
                <q-btn
                    flat
                    text-color="white"
                    icon="arrow_left"
                    size="lg"
                    class="carousel__btn-control"
                    @click="$refs.carousel.previous()"
                />
            </q-carousel-control>
            <q-carousel-control
                class="q-gutter-xs"
                position="right"
            >
                <q-btn
                    flat
                    text-color="white"
                    icon="arrow_right"
                    size="lg"
                    @click="$refs.carousel.next()"
                    class="carousel__btn-control"
                />
            </q-carousel-control>
        </template>
    </q-carousel>
</template>

<script>
export default {
    name: 'HomeCarousel',
    data: () => ({
        slide: 'style',
    }),
};
</script>

<style lang="scss">
.carousel {
    &__btn-control {
        height: 100%;
    }
}
</style>
