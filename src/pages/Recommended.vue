<template>
  <q-page
    padding
    class="column q-gutter-y-md"
    style="min-height: 100vh"
  >
    <q-card
      flat
      class="self-center fit max-w-screen-sm q-pt-md"
    >
      <q-tabs
        v-model="tab"
        align="justify"
        indicator-color="primary"
        narrow-indicator
        outside-arrows
        mobile-arrows
      >
        <q-tab
          v-for="(content, i) in groupContent"
          :key="`tab_${i}`"
          :name="i"
          no-caps
          :ripple="false"
          content-class="full-width"
        >
          <q-card class="full-height">
            <q-img
              :src="content.img"
              width="200px"
              height="100px"
            >
              <div class="q-img__overlay fit">
                <h6 class="q-my-none">
                  {{ content.title }}
                </h6>
              </div>
            </q-img>
          </q-card>
        </q-tab>
      </q-tabs>

      <q-separator />

      <q-tab-panels
        v-model="tab"
        animated
        keep-alive
        infinite
        swipeable
      >
        <q-tab-panel
          v-for="(content, i) in groupContent"
          :key="`panel_${i}`"
          :name="i"
          class="q-pa-md-xl"
        >
          <product-list
            :products="content.products"
            class="full-width"
            list-class="q-col-gutter-md-x-xl"
            item-class="col-6 col-sm-4 col-md-3"
          >
            <!-- @todo UPCOMING FEATURE
            <div
              slot="bottom"
              class="q-pt-xl q-pb-lg column"
            >
              <q-separator spaced />

              <q-pagination
                v-model="recomendedPaginationCursor"
                :max="10"
                :max-pages="6"
                size="1rem"
                boundary-links
                direction-links
                class="self-center"
              />
            </div> -->
          </product-list>
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import {
  commerce, random, image, company,
} from 'faker';
import ProductList from 'components/modules/ProductList.vue';
import type { Product } from 'components/ui/ProductCard.vue';

const getProduct = () => ({
  name: commerce.productName(),
  price: random.number({ min: 1000, max: 100000, precision: 1000 }),
  photo: image.food(),
  bestChoice: random.boolean(),
  facultyName: random.word(),
  shopName: company.companyName(),
  rating: random.float({ min: 0, max: 5, precision: 0.1 }),
  discount: random.arrayElement([[], [1000], [1000, 50]]),
});

const component = defineComponent({
  name: 'RecommendedPage',

  components: {
    ProductList,
  },

  data() {
    return {
      /* @todo UPCOMING FEATURE
      recomendedPaginationCursor: 1,
      */
      groupContent: {
        default: {
          title: 'Rekomendasi',
          img: 'https://picsum.photos/200',
          products: Array.from(Array(12), getProduct) as Product[],
        },
        promo: {
          title: 'Promo',
          img: 'https://picsum.photos/200',
          products: Array.from(Array(12), getProduct) as Product[],
        },
        fakultas: {
          title: 'Fakultas kamu',
          img: 'https://picsum.photos/200',
          products: [] as Product[],
        },
      },
    };
  },

  computed: {
    tab: {
      get() {
        return this.$route.query.group || 'default';
      },
      async set(v: string) {
        await this.$router.replace({ query: { group: v } });
      },
    },
  },
});

export default component;
</script>
