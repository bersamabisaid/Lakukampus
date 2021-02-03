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
  </q-page-container>
</template>

<script>
import DetailCard from 'pages/MyCart/DetailProduct/DetailCard.vue';

export default {
  name: 'DetailProduct',

  data: () => ({
    selected: [],
    data: [
      {
        item: 'dsaddsad',
        qty: 1,
        price: 10,
      },
      {
        item: 'item',
        qty: 1,
        price: 10,
      },
    ],
    footerTransition: false,
  }),

  components: {
    DetailCard,
  },
};
</script>

<style lang="scss" scoped>
.cart-total-card {
    position: sticky;
    top: 12vh;
    width: 100%;
}
</style>
