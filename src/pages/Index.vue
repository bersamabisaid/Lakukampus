<template>
  <q-page class="row items-center justify-evenly">
    <example-component
      title="Example component"
      active
      :todos="todos"
      :meta="meta"
    />

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
import { Todo, Meta } from 'components/models';
import ExampleComponent from 'components/CompositionComponent.vue';
import { defineComponent, ref } from '@vue/composition-api';
import useAuth from 'composition/useAuth';
import useGuestOnlyGuard from 'composition/useGuestOnlyGuard';

export default defineComponent({
  name: 'PageIndex',

  components: { ExampleComponent },

  setup(props, ctx) {
    useGuestOnlyGuard(props, ctx);
    const todos = ref<Todo[]>([
      {
        id: 1,
        content: 'ct1',
      },
      {
        id: 2,
        content: 'ct2',
      },
      {
        id: 3,
        content: 'ct3',
      },
      {
        id: 4,
        content: 'ct4',
      },
      {
        id: 5,
        content: 'ct5',
      },
    ]);
    const meta = ref<Meta>({
      totalCount: 1200,
    });
    return { todos, meta, ...useAuth() };
  },
});
</script>
