<template>
  <section-layout
    title="Kategori Pilihan"
    class="column"
  >
    <q-btn
      slot="right-header"
      label="Lihat semua kategori"
      color="primary"
      flat
      :to="{name: 'Category'}"
    />

    <div class="row q-col-gutter-md q-col-gutter-md-lg">
      <router-link
        v-for="(category, i) in categories"
        :key="`${i}_${_uid}`"
        class="block normalize-anchor col-12 col-sm-4 col-md-2"
        :to="{name: 'Search', query: {category: category.name}}"
      >
        <q-img
          :src="category.thumbnail"
          height="100px"
          class="rounded-borders shadow-1"
        />

        <h5 class="text-h6 text-center q-ma-none">
          {{ category.name }}
        </h5>
      </router-link>
    </div>
  </section-layout>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api';
import SectionLayout from 'layouts/SectionLayout.vue';

export interface Category {
  name: string;
  thumbnail: string;
}

export default defineComponent({
  name: 'HomePageCategoryListSection',

  components: {
    SectionLayout,
  },

  props: {
    categories: Array as PropType<Category[]>,
  },
});
</script>
