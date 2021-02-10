<template>
  <q-page-container
    padding
    style="padding-bottom: 20vh"
  >
    <div class="row">
      <div class="col-1" />
      <div class="col">
        <div class="row q-col-gutter-lg">
          <div class="col row full-width q-mb-md">
            <detail-card class="col full-width" />
          </div>
        </div>
      </div>
      <div class="col-1" />
    </div>

    <div class="row q-mt-xl">
      <div class="col-1" />
      <div class="col">
        <div class="row q-col-gutter-lg">
          <div class="col row full-width q-mb-md">
            <detail-content class="col full-width" />
          </div>
        </div>
      </div>
      <div class="col-1" />
    </div>
  </q-page-container>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import DetailCard from './DetailCard.vue';
import DetailContent from './DetailContent.vue';

interface RouteParams {
  id: string;
  shopName: string;
  productName: string;
}

export default defineComponent({
  name: 'DetailProduct',

  components: {
    DetailCard, DetailContent,
  },

  data() {
    return {
      selected: [],
      data: [],
    };
  },

  computed: {
    shopName(): string {
      return (this.$route.params as unknown as RouteParams).shopName;
    },
    productId(): string {
      return (this.$route.params as unknown as RouteParams).id;
    },
  },
});
</script>

<style lang="scss">
  .done {
    text-decoration: line-through;
    color: #bbb;
  }

  em {
  font-style: normal;
  text-decoration: none;
  }
</style>
