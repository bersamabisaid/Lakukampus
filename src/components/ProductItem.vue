<template>
    <router-link
        :to="{name: ''}"
        class="product-card"
    >
        <q-card>
            <img
                :src="imgSrc"
                style="height: 150px"
            >

            <q-card-section class="flex column">
                <span class="text-body2 text-weight-regular">
                    {{ title }}
                </span>
                <div class="full-width flex justify-between">
                    <span class="self-end">
                        <q-icon
                            name="star"
                            color="yellow-7"
                        />
                        <small> {{ ratings }}</small>
                    </span>
                    <span class="text-h6 text-weight-regular">
                        Rp{{ price }}
                    </span>
                </div>
            </q-card-section>

            <q-separator />

            <q-card-actions vertical>
                <q-btn-group
                    flat
                    stretch
                >
                    <q-btn
                        icon="favorite"
                        size="sm"
                        color="grey"
                        flat
                    >
                        <q-tooltip>Add to wishlist</q-tooltip>
                    </q-btn>
                    <q-btn
                        color="blue"
                        flat
                    >
                        <q-icon name="add" />
                        Add to Cart
                    </q-btn>
                </q-btn-group>
            </q-card-actions>
        </q-card>
    </router-link>
</template>

<script>
export default {
    name: 'ProductItem',
    props: {
        title: {
            type: String,
            required: true,
        },
        imgSrc: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        ratings: {
            type: Number,
            required: true,
        },
    },
};
</script>

<style lang="scss">
.product-card {
    width: 200px;
    margin: map-get($space-md, y) map-get($space-md, x);
}
</style>
