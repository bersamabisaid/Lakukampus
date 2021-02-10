<template>
  <q-page
    padding
    style="min-height: 100vh;"
  >
    <product-list
      :title="sectionTitle"
      :products="[]"
      class="q-pa-md"
    />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import ProductList from 'components/modules/ProductList.vue';

export interface SearchQuery {
  q?: string;
  category?: string;
  faculty?: string;
  sortBy?: string;
  priceMin?: number;
  priceMax?: number;
  tags?: string[] | string;
}

export default defineComponent({
  name: 'SearchPage',

  components: {
    ProductList,
  },

  computed: {
    searchQuery(): SearchQuery {
      return this.$route.query;
    },

    itemNameSearch(): string {
      return this.searchQuery.q || '';
    },

    sectionTitle(): string {
      return `Hasil pencarian: ${this.itemNameSearch}`;
    },
  },
});
</script>
