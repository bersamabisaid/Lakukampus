<template>
  <q-card class="category-card">
    <q-img
      :src="img"
      width="100%"
      height="200px"
      class="category-card__img q-mr-md"
    >
      <div class="category-card__img__overlay absolute-bottom-left fit q-pa-md column reverse">
        <h6 class="q-my-none">
          {{ name }}
        </h6>
      </div>
    </q-img>

    <q-list dense>
      <q-item
        v-for="(tag, i) in tags.slice(0, tagLimit)"
        :key="`${tag.name}_${i}`"
        clickable
        v-ripple
      >
        <q-item-section>
          <q-item-label>{{ tag.name }}</q-item-label>
        </q-item-section>
      </q-item>

      <q-item
        clickable
        v-ripple
        class="bg-blue-grey-1 text-primary"
      >
        <q-item-section
          class="text-weight-medium"
          @click="onLoadMoreTags"
        >
          <q-item-label>
            Lihat lebih banyak <b>{{ name }}</b>
          </q-item-label>
        </q-item-section>

        <q-item-section
          avatar
          side
        >
          <q-btn
            :icon="isExpanded ? 'expand_more' : 'expand_less'"
            size="sm"
            round
            flat
            @click.prevent="isExpanded = !isExpanded"
          />
        </q-item-section>
      </q-item>
    </q-list>
  </q-card>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api';

export interface Tag {
  name: string;
  link: string;
}

export interface Category {
  name: string;
  img: string;
  tags: Tag[];
}

export default defineComponent({
  name: 'CategoryCard',

  props: {
    name: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    tags: {
      type: Array as PropType<Tag[]>,
      default: [],
    },
  },

  data() {
    return {
      isExpanded: true,
    };
  },

  computed: {
    tagLimit(): 10 | undefined {
      return this.isExpanded ? undefined : 10;
    },
  },

  methods: {
    onLoadMoreTags() {
      if (this.isExpanded) {
        this.$emit('load-more-tags');
      } else {
        this.isExpanded = true;
      }
    },
  },
});
</script>
