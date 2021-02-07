<template>
  <q-page
    padding
    style="min-height: 100vh;"
  >
    <product-list
      :title="`Hasil pencarian: ${itemNameSearch}`"
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
}

export default defineComponent({
  name: 'SearchPage',

  components: {
    ProductList,
  },

  computed: {
    searchQuery(): SearchQuery {
      return this.$route.query as unknown as SearchQuery;
    },

    itemNameSearch() {
      return this.searchQuery.q;
    },
  },
});
</script>
