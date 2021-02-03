<template>
  <section-layout
    :title="title"
    class="column"
  >
    <div class="row q-col-gutter-lg">
      <div
        v-for="product in products"
        :key="product.name"
        class="col-12 col-sm-4 col-md-2"
      >
        <product-card v-bind="product" />
      </div>
    </div>
  </section-layout>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api';
import productCard from 'components/ui/productCard.vue';
import SectionLayout from './SectionLayout.vue';

export interface Product {
  name: string;
  price: number;
  photo: string;
  bestChoice: boolean;
}

export default defineComponent({
  name: 'HomePageProductListSection',

  components: {
    SectionLayout, productCard,
  },

  props: {
    title: String,
    products: Array as PropType<Product[]>,
  },
});
</script>
