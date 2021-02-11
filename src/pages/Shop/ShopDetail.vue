<template>
  <q-card class="my-card">
    <q-card-section>
      <div class="text-h6">
        Etalase
      </div>
    </q-card-section>

    <q-separator />

    <q-card-actions vertical>
      <q-btn
        flat
        align="left"
      >
        Semua Produk
      </q-btn>
      <q-btn
        align="left"
        flat
        v-for="n in 5"
        :key="n"
      >
        Produk 1 Gear second
      </q-btn>
    </q-card-actions>
  </q-card>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'ShopDetail',

  data: () => ({
  }),

});
</script>
