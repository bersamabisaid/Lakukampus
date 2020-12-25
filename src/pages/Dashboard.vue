<template>
  <q-page padding>
    <h1>Ini Dashboard</h1>
    <div class="column">
      <q-btn
        label="to Login page"
        to="/"
      />
      <q-btn
        label="Logout"
        color="negative"
        @click="logout"
      />
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import useAuth from 'composition/useAuth';
import useAuthGuard from 'composition/useAuthGuard';

export default defineComponent({
  name: 'PageDashboard',

  setup(props, ctx) {
    useAuthGuard(props, ctx);
    return { ...useAuth() };
  },
});
</script>
