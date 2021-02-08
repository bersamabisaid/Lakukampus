<template>
  <q-card class="product-card shadow-1">
    <router-link
      :to="productLink"
      class="normalize-anchor text-black"
    >
      <q-img
        height="150px"
        :src="photo"
        img-class="product-card__img"
        :placeholder-src="require('assets/images/lakukampus-no-text.png')"
      />

      <q-card-section
        class="column items-baseline"
        style="height: 6rem;"
      >
        <h6
          class="q-mt-none q-mb-sm full-width text-body1 text-weight-regular ellipsis"
          style="line-height: 1.1;"
        >
          {{ name }}
        </h6>

        <small
          v-if="isDiscount"
          class="text-grey text-strike"
        >
          Rp. {{ price }}
        </small>

        <span class="text-body2 text-weight-medium">
          Rp. {{ isDiscount ? discount[0] : price }}
        </span>
      </q-card-section>

      <q-badge
        v-if="discount[1]"
        :label="`${discount[1]}%`"
        floating
        class="z-index-10"
      />
    </router-link>

    <q-separator />

    <div class="q-mx-sm overflow-hidden row no-wrap">
      <router-link
        :to="shopLink"
        class="col text-grey truncate"
      >
        <small>{{ shopName }}</small>
      </router-link>

      <router-link
        :to="facultyLink"
        class="col-4 text-grey truncate text-center"
      >
        <small>{{ facultyName }}</small>
      </router-link>

      <div class="text-grey-7 col-shrink text-right">
        <q-icon
          name="star_rate"
          color="amber"
        />
        <small> {{ rating.toPrecision(1) }}</small>
      </div>
    </div>
  </q-card>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api';
import slugify from 'slugify';
import { uid } from 'quasar';
import type { RawLocation } from 'vue-router';

export interface Product {
  name: string;
  price: number;
  photo: string;
  shopName: string;
  facultyName: string;
  rating: number;
  bestChoice: boolean;
  discount: number[];
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
    discount: {
      type: Array as PropType<number[]>,
      default: [],
    },
  },

  computed: {
    productLink(): RawLocation {
      return {
        name: 'Product',
        params: {
          shopName: slugify(this.shopName),
          id: uid(),
          prodName: slugify(this.name),
        },
      };
    },

    shopLink(): RawLocation {
      return {
        name: 'Shop',
        params: {
          shopName: slugify(this.shopName),
        },
      };
    },

    facultyLink(): RawLocation {
      return {
        name: 'Search',
        query: {
          faculty: this.facultyName,
        },
      };
    },

    isDiscount(): boolean {
      return Boolean(this.discount.length);
    },
  },
});
</script>

<style lang="scss">
.product-card {
  min-width: 180px;
  max-width: 250px !important;

  &__img {
    border-radius: $generic-border-radius $generic-border-radius 0 0;
  }
}
</style>
