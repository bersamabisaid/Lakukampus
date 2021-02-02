<template>
  <q-list>
    <q-item
      v-for="(contact, i) in contacts"
      :key="i"
      class="q-my-sm"
      clickable
      v-ripple
    >
      <q-item-section avatar>
        <q-avatar
          size="md"
          color="primary"
          text-color="white"
        >
          {{ contact.name.charAt(0) }}
        </q-avatar>
      </q-item-section>

      <q-item-section>
        <q-item-label lines="1">
          {{ contact.name }}
        </q-item-label>

        <q-item-label
          caption
          lines="1"
        >
          {{ contact.lastMessage }}
        </q-item-label>
      </q-item-section>

      <q-item-section
        v-if="contact.unreadMessages"
        side
      >
        <q-badge
          :label="contact.unreadMessages"
          color="red"
        />
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api';
import type { Contact } from 'components/ChatWindow/model';

export default defineComponent({
  name: 'ChatList',

  props: {
    contacts: {
      type: Array as PropType<Contact[]>,
      required: true,
    },
  },
});
</script>
