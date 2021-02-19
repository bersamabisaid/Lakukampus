<template>
  <q-page
    class="max-w-sm q-pa-xl row content-start q-col-gutter-md"
    style="min-height: 100vh"
  >
    <div class="col-12 q-pb-md">
      <q-banner
        inline-actions
        rounded
        class="bg-red text-white"
      >
        Silahkan verifikasi akun kamu sebelum membuat toko...
        <q-btn
          slot="action"
          flat
          color="white"
          label="Verifikasi akun"
          :to="{name: 'SettingsVerifyAccount'}"
        />
      </q-banner>
    </div>

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
              :to="{name: 'MyShop', params: {shopName: 'toko-bagus'}}"
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
        :to="{name: 'CreateShop'}"
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
