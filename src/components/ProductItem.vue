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
                <span class="text-subtitle2 text-weight-regular ellipsis full-width">
                    {{ title }}
                    <q-tooltip>
                        {{ title }}
                    </q-tooltip>
                </span>
                <small class="text-caption">
                    Anonymous
                </small>
                <div class="full-width flex justify-between">
                    <span
                        v-if="!minimalsm"
                        class="self-end"
                    >
                        <q-icon
                            name="star"
                            color="yellow-7"
                        />
                        <small> {{ ratings }}</small>
                    </span>
                    <span :class="['text-h6 text-weight-regular', minimalsm ? 'q-ml-auto' : '']">
                        Rp{{ price }}
                    </span>
                </div>
                <div
                    v-if="!minimalsm"
                    class="product-card__chips"
                >
                    <q-chip
                        label="promo"
                        size="sm"
                        dense
                        color="info"
                        text-color="white"
                    />
                    <q-chip
                        label="rent only"
                        size="sm"
                        dense
                        color="info"
                        text-color="white"
                    />
                    <q-chip
                        label="most popular"
                        size="sm"
                        dense
                        color="info"
                        text-color="white"
                    />
                </div>
            </q-card-section>

            <template v-if="!noAction">
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
                            @click="$emit('product:add-to-cart')"
                        >
                            <q-icon name="add" />
                            Add to Cart
                        </q-btn>
                    </q-btn-group>
                </q-card-actions>
            </template>
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
        noAction: {
            type: Boolean,
            default: false,
        },
        minimalsm: {
            type: Boolean,
            default: false,
        },
    },
};
</script>

<style lang="scss">
.product-card {
    display: block;
    width: 200px;
    margin: map-get($space-md, y) map-get($space-md, x);

    &__chips {
        width: 100%;
        display: flex;
        justify-content: flex-start;

        & > .q-chip:nth-child(n+4) {
            display: none;
        }
    }
}
</style>
