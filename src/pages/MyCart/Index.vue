<template>
    <q-page padding>
        <div class="row">
            <div class="col-1" />
            <div class="col">
                <h1>My Cart</h1>
                <div class="row q-col-gutter-lg">
                    <div class="col-9">
                        <div class="row full-width q-mb-md">
                            <cart-item-list
                                title="Anonymous"
                                :cols="cols"
                                :data="data"
                                row-key="number"
                                @selection="onSelection"
                            />
                        </div>
                    </div>
                    <div class="col relative-position">
                        <q-card class="cart-total-card">
                            <q-card-section>
                                Total
                            </q-card-section>
                        </q-card>
                    </div>
                </div>
            </div>
            <div class="col-1" />
        </div>
    </q-page>
</template>

<script>
import CartItemList from './CartItemList';

export default {
    name: 'MyCartIndex',

    data: () => ({
        selected: [],
        cols: [
            {
                name: 'number',
                field: 'number',
                required: true,
                label: '#',
                align: 'left',
            },
            {
                name: 'item',
                field: 'item',
                required: true,
                label: 'Item',
                align: 'left',
            },
        ],
        data: [
            {
                number: 1,
                item: 'dsaddsad',
            },
            {
                number: 2,
                item: 'item',
            },
        ],
    }),

    methods: {
        onSelection(selected) {
            console.log(selected);
        },
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
