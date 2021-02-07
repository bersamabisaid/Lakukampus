<template>
  <q-card class="product-card">
    <q-img
      height="150px"
      :src="photo"
    />

    <q-card-section>
      <div class="q-mb-sm">
        <h6
          class="q-my-none text-body1 text-weight-regular ellipsis"
          style="line-height: 1.1;"
        >
          {{ name }}
        </h6>
      </div>

      <div class="column">
        <small class="text-grey text-strike">
          Rp. {{ price }}
        </small>

        <span class="text-body2 text-weight-medium">
          Rp. 99.999.999
        </span>
      </div>
    </q-card-section>

    <q-separator />

    <div class="q-mx-sm overflow-hidden row no-wrap">
      <a
        href="#"
        class="col text-grey truncate"
      >
        <small>{{ shopName }}</small>
      </a>

      <a
        href="#"
        class="col-4 text-grey truncate text-center"
      >
        <small>{{ facultyName }}</small>
      </a>

      <div class="text-grey-7 col-shrink text-right">
        <q-icon
          name="star_rate"
          color="amber"
        />
        <small> {{ precisionedRating }}</small>
      </div>
    </div>
  </q-card>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export interface Product {
  name: string;
  price: number;
  photo: string;
  shopName: string;
  facultyName: string;
  rating: number;
  bestChoice: boolean;
}

export default defineComponent({
  name: 'productCard',

  props: {
    name: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    shopName: {
      type: String,
      required: true,
    },
    facultyName: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    bestChoice: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    precisionedRating(): string {
      return this.rating.toPrecision(1);
    },
  },
});
</script>

<style lang="scss">
.product-card {
  min-width: 180px;
  max-width: 250px !important;
}
</style>
