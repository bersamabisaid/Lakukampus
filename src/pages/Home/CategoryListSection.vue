<template>
  <section-layout
    title="Kategori Pilihan"
    class="column"
  >
    <div class="row q-col-gutter-lg">
      <div
        v-for="category in TrimmedCategories"
        :key="category.name"
        class="col-2"
      >
        <q-img
          :src="category.thumbnail"
          height="100px"
          class="rounded-borders shadow-2"
        />

        <h5 class="text-h6 text-center q-ma-none">
          {{ category.name }}
        </h5>
      </div>
    </div>
  </section-layout>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api';
import SectionLayout from './SectionLayout.vue';

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

  computed: {
    TrimmedCategories(): Category[] {
      return this.categories!.slice(0, 6);
    },
  },
});
</script>
