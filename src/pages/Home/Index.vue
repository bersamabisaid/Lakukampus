<template>
    <q-page padding>
        <div class="row">
            <div class="col-1" />
            <home-carousel />
            <div class="col-1" />
        </div>
        <div class="row q-py-xl q-col-gutter-md">
            <div class="col-1" />
            <div class="col flex justify-center">
                <div class="products__container">
                    <q-intersection
                        v-for="index in 600"
                        :key="index"
                        transition="scale"
                        once
                    >
                        <product-item
                            :title="`Barang dijual ${index}`"
                            img-src="https://picsum.photos/200"
                            :price="Math.floor(Math.random() * 100)"
                            :ratings="(Math.random() * 5).toString().substring(0,3)"
                        />
                    </q-intersection>
                </div>
            </div>
            <div class="col-1" />
        </div>
    </q-page>
</template>

<script>
import HomeCarousel from './HomeCarousel';
import ProductItem from './ProductItem';

export default {
    name: 'HomeIndex',
    data: () => ({
        exploring: 'home',
        search: null,
    }),
    components: {
        HomeCarousel,
        ProductItem,
    },
};
</script>

<style lang="scss">
.products {
    &__container {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
        column-gap: map-get($space-lg , x);
        row-gap: map-get($space-lg , y);
    }
}
</style>
