<template>
  <q-page
    padding
    class="row items-center"
    style="min-height: 100vh;"
  >
    <div
      v-if="categories.length"
      class="row items-baseline q-col-gutter-lg"
    >
      <div
        v-for="(category, i) in categories"
        :key="`${category.name}_${i}`"
        class="col-12 col-sm-6 col-md-3"
      >
        <category-card
          v-bind="category"
          @load-more-tags="onLoadMoreTags(i)"
        />
      </div>
    </div>

    <h2
      v-else
      class="text-center"
    >
      Daftar kategori kosong &gt;.&lt;
    </h2>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { random, internet } from 'faker';
import CategoryCard, { Category, Tag } from 'components/ui/Category/CategoryCard.vue';

const getTag = function (): Tag {
  return {
    name: random.word(),
    link: internet.url(),
  };
};

export default defineComponent({
  name: 'CategoryPage',

  components: {
    CategoryCard,
  },

  data() {
    return {
      categories: Array.from(Array(10), () => ({
        name: random.word(),
        img: random.image(),
        tags: Array.from(Array(10), getTag),
      })) as Category[],
    };
  },

  methods: {
    onLoadMoreTags(i: number) {
      /* eslint-disable
        @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call */
      this.categories[i].tags.push(...Array.from(Array(10), getTag));
      /* eslint-enable
        @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call */
    },
  },
});
</script>
