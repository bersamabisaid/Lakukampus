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
                <q-infinite-scroll
                    ref="productsList"
                    class="products__container"
                    @load="loadProducts"
                    :offset="200"
                >
                    <product-item
                        v-for="(product, index) in products"
                        :key="index"
                        :title="product.name"
                        :img-src="product.thumbnail"
                        :price="product.price"
                        :ratings="product.ratings"
                        @product:add-to-cart="$emit('product:add-to-cart', index)"
                    />
                    <template v-slot:loading>
                        <div class="products__container">
                            <q-card
                                v-for="i in productPerFetch"
                                :key="i"
                                class="product-card"
                            >
                                <q-skeleton
                                    height="150px"
                                    square
                                />
                                <q-card-section>
                                    <q-skeleton type="text" />
                                    <q-skeleton type="text" />
                                </q-card-section>
                                <q-card-actions>
                                    <q-skeleton
                                        type="QBtn"
                                        width="100%"
                                    />
                                </q-card-actions>
                            </q-card>
                        </div>
                    </template>
                </q-infinite-scroll>
            </div>
            <div class="col-1" />
        </div>
    </q-page>
</template>

<script>
import ProductItem from 'components/ProductItem';
import HomeCarousel from './HomeCarousel';

export default {
    name: 'HomeIndex',
    data: () => ({
        exploring: 'home',
        search: null,
        products: [],
        maxFetching: 100,
        productPerFetch: 10,
    }),
    methods: {
        async loadProducts(index, done) {
            await this.fetchProducts(this.productPerFetch);
            done(this.products.length >= this.maxFetching);
        },
        async fetchProducts(n) {
            // eslint-disable-next-line prefer-const
            let loaded = [];
            // eslint-disable-next-line no-plusplus
            for (let index = 0; index < n; index++) {
                // eslint-disable-next-line no-await-in-loop
                loaded.push(await this.getProduct());
            }
            this.products.push(...loaded);
            this.fetched += n;
        },
        async getProduct() {
            return {
                name: 'Barang dijual',
                thumbnail: (await fetch('https://picsum.photos/150')).url,
                price: Math.floor(Math.random() * 100),
                ratings: +(Math.random() * 5).toString().substring(0, 3),
            };
        },
    },
    async mounted() {
        await this.$refs.productsList.trigger();
    },
    components: {
        HomeCarousel,
        ProductItem,
    },
};
</script>

<style lang="scss">
.products {
    &__container {
        overflow-x: auto;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;

        & > .q-infinite-scroll__loading {
            width: 100%;
        }
    }
}
</style>
