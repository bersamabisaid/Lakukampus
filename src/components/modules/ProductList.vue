<template>
  <section-layout
    :title="title"
    class="column"
  >
    <div class="row q-col-gutter-lg">
      <div
        v-for="product in products"
        :key="product.name"
        class="col-6 col-sm-4 col-md-2"
      >
        <product-card v-bind="product" />
      </div>
    </div>
  </section-layout>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api';
import ProductCard, { Product } from 'components/ui/ProductCard.vue';
import SectionLayout from 'layouts/SectionLayout.vue';

export default defineComponent({
  name: 'HomePageProductListSection',

  components: {
    SectionLayout, ProductCard,
  },

  props: {
    title: {
      type: String,
      required: true,
    },
    products: {
      type: Array as PropType<Product[]>,
      required: true,
    },
  },
});
</script>
