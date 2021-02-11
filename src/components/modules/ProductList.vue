<template>
  <section-layout
    :title="title"
    class="column"
  >
    <q-btn
      v-if="moreActionLabel"
      slot="right-header"
      :label="moreActionLabel"
      color="primary"
      flat
      :to="moreActionTo"
    />

    <div
      v-if="products.length"
      :class="['row q-col-gutter-lg', listClass]"
    >
      <div
        v-for="product in products"
        :key="product.name"
        :class="['col-6 col-sm-4 col-md-2', itemClass]"
      >
        <product-card v-bind="product" />
      </div>
    </div>

    <h3
      v-else
      class="text-center"
    >
      Tidak dapat menampilkan daftar :(
    </h3>

    <slot
      name="bottom"
      class="self-center q-pt-xl"
    />
  </section-layout>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api';
import ProductCard, { Product } from 'components/ui/ProductCard.vue';
import SectionLayout from 'layouts/SectionLayout.vue';
import type { Route } from 'vue-router';

export default defineComponent({
  name: 'ProductListSection',

  components: {
    SectionLayout, ProductCard,
  },

  props: {
    title: {
      type: String,
      default: '',
    },

    products: {
      type: Array as PropType<Product[]>,
      required: true,
    },

    moreActionLabel: {
      type: String,
      required: false,
    },

    moreActionTo: {
      type: Object as PropType<Route>,
      required: false,
    },

    listClass: {
      type: String,
      required: false,
    },

    itemClass: {
      type: String,
      required: false,
    },
  },
});
</script>
