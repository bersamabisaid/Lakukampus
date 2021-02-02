<template>
  <q-page-container
    padding
    style="padding-bottom: 20vh"
  >
    <div class="row">
      <div class="col-1" />
      <div class="col">
        <h1 class="text-h3">
          <q-icon name="shopping_cart" />
          My Cart
        </h1>
        <div class="row q-col-gutter-lg">
          <div class="col row full-width q-mb-md">
            <cart-item-list
              class="col full-width"
            />
          </div>
        </div>
      </div>
      <div class="col-1" />
    </div>

    <q-page-sticky
      expand
      position="bottom"
    >
      <q-card
        ref="cartPagefooter"
        class="fixed-bottom shadow-24"
      >
        <div class="flex items-stretch">
          <q-btn
            icon="delete"
            color="red"
            flat
            padding="lg"
            class="q-ml-sm"
          />
          <q-space />
          <q-card-section>
            <span
              class="text-h6 text-weight-regular q-mx-lg"
            >
              <small class="text-caption text-grey-7">total</small>
              Rp 0
            </span>
          </q-card-section>

          <template v-if="true">
            <q-separator vertical />
            <q-btn
              :to="{name: 'Chat', params: {id: 10101}}"
              flat
              color="positive"
              class="q-px-sm"
            >
              Proceed Transaction
              <q-icon name="keyboard_arrow_right" />
            </q-btn>
          </template>
        </div>
      </q-card>
    </q-page-sticky>
  </q-page-container>
</template>

<script>
import CartItemList from 'pages/MyCart/CartItemList.vue';

export default {
  name: 'CartIndex',

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
    CartItemList,
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
