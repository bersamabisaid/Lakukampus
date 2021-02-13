<template>
  <q-page
    class="q-pa-xl row content-start q-col-gutter-md"
    style="min-height: 100vh"
  >
    <div
      v-for="e in 2"
      :key="`${_uid}_${e}`"
      class="col-4"
    >
      <q-card class="fit">
        <q-img
          src="https://picsum.photos/100"
          height="100px"
        >
          <div
            slot="loading"
            class="fit bg-light-blue"
          />

          <div class="absolute-top full-height">
            <router-link
              :to="{name: 'MyProduct', params: {shopName: 'toko bagus'}}"
              class="normalize-anchor row items-center q-gutter-x-md"
            >
              <q-avatar
                color="secondary"
                text-color="white"
              >
                A
              </q-avatar>

              <h6 class="shop-card__title q-my-none text-white">
                Toko Bagus
              </h6>
            </router-link>

            <div class="absolute-top-right q-mt-xs q-mr-xs">
              <q-btn
                icon="more_vert"
                round
                flat
                color="white"
              />
            </div>
          </div>
        </q-img>
      </q-card>
    </div>

    <div class="col-4">
      <q-btn
        label="Buat toko baru"
        icon="add"
        size="lg"
        color="light-blue"
        text-color="white"
        class="fit"
      />
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'MyShopPage',

  data() {
    return {};
  },
});
</script>

<style lang="scss">
.shop-card {
  &__title {
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
