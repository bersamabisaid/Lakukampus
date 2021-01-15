<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import Shop from 'models/Shop';

export default defineComponent({
  name: 'App',

  async mounted() {
    const myShop = await Shop.find('00KtNHYzssMnSrMbz2rB');
    console.log(myShop.data());
  },
});
</script>
