<template>
  <q-page class="row items-center justify-evenly">
    <q-btn
      v-if="!signedInUser"
      label="Login"
      color="primary"
      @click="login"
    />
    <template v-else>
      <q-btn
        label="Logout"
        color="negative"
        @click="logout"
      />
    </template>
    <q-btn
      label="to dashboard"
      to="/dashboard"
    />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'PageIndex',
});
</script>
