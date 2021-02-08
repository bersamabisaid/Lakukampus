<template>
  <q-page padding>
    <h1>{{ shopName }}</h1>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'ShopPage',

  computed: {
    shopName(): string {
      return this.$route.params.shopName;
    },
  },
});
</script>
