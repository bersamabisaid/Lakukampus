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
    />

    <div class="row q-col-gutter-lg">
      <div
        v-for="product in products"
        :key="product.name"
        class="col-6 col-sm-4 col-md-2"
      >
        <product-card v-bind="product" />
      </div>
    </div>

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

export default defineComponent({
  name: 'ProductListSection',

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

    moreActionLabel: {
      type: String,
      required: false,
    },
  },
});
</script>
