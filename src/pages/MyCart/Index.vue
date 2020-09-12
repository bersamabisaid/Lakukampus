<template>
    <q-page
        padding
        style="padding-bottom: 20vh"
    >
        <div class="row">
            <div class="col-1" />
            <div class="col">
                <h1 class="text-h3">
                    <q-icon name="shopping_cart" />
                    My Cart
                </h1>
                <div class="row q-col-gutter-lg">
                    <div class="col row full-width q-mb-md">
                        <cart-item-list class="col full-width" />
                    </div>
                </div>
            </div>
            <div class="col-1" />
        </div>

        <q-card
            ref="cartPagefooter"
            class="fixed-bottom shadow-24"
        >
            <q-card-section>
                <div class="flex items-center q-mx-sm">
                    <q-btn
                        icon="delete"
                        color="red"
                        round
                        outline
                    />
                    <q-space />
                    <span class="text-h6 text-weight-regular q-mx-lg">
                        <small class="text-caption text-grey-7">total</small>
                        Rp 0
                    </span>
                    <template v-if="false">
                        <q-separator vertical />
                        <q-btn
                            flat
                            color="positive"
                        >
                            Proceed Transaction
                            <q-icon name="keyboard_arrow_right" />
                        </q-btn>
                    </template>
                </div>
            </q-card-section>
        </q-card>
    </q-page>
</template>

<script>
import { dom } from 'quasar';
import CartItemList from './CartItemList';

export default {
    name: 'MyCartIndex',

    data: () => ({
        selected: [],
        data: [
            {
                item: 'dsaddsad',
                qty: 1,
                price: 10,
            },
            {
                item: 'item',
                qty: 1,
                price: 10,
            },
        ],
    }),

    mounted() {
        const pageFooterEl = this.$refs.cartPagefooter.$el;
        const pageFooterElHeight = dom.height(pageFooterEl);

        dom.css(this.$el, {
            paddingBottom: dom.style(this.$el, 'padding-bottom') + pageFooterElHeight,
        });
    },

    components: {
        CartItemList,
    },
};
</script>

<style lang="scss" scoped>
.cart-total-card {
    position: sticky;
    top: 12vh;
    width: 100%;
}
</style>
