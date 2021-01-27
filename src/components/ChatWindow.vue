<template>
  <q-layout
    view="lHh lpr lFr"
    container
    class="chat-window"
  >
    <q-header elevated>
      <q-bar>
        <div>Chats ({{ unreadMessages }})</div>

        <q-space />

        <q-btn
          dense
          flat
          icon="close"
        />
      </q-bar>
    </q-header>

    <q-drawer
      v-model="contactListOpen"
      side="right"
      :breakpoint="200"
      :width="220"
      bordered
    >
      <q-scroll-area class="fit">
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
      </q-scroll-area>
    </q-drawer>

    <q-footer elevated>
      <q-toolbar class="bg-white">
        <q-form
          class="fit q-py-sm"
          ref="chatMessageForm"
          @submit="onChatMessageSubmit"
          @reset="onChatMessageReset"
        >
          <q-input
            v-model="chatInput"
            label="Type a message here..."
            dense
            autogrow
            class="fit"
            @keypress.enter.prevent="onChatMessageSubmit"
          >
            <template #after>
              <q-btn
                type="submit"
                dense
                flat
                round
                icon="send"
                @click="onChatMessageSubmit"
              />
            </template>
          </q-input>
        </q-form>
      </q-toolbar>
    </q-footer>

    <q-page-container>
      <q-page
        padding
        class="bg-white"
      >
        <q-chat-message
          bg-color="primary"
          text-color="white"
          stamp="17 seconds ago"
          :text="['dasdasda']"
        />
        <q-chat-message
          sent
          :text="['dasdasda']"
          stamp="1 seconds ago"
        />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { lorem, internet, random } from 'faker';

export default defineComponent({
  name: 'ChatWindow',

  data() {
    return {
      chatInput: '',

      contactListOpen: true,
      contacts: Array.from(Array(10)).map(() => ({
        name: internet.userName(),
        lastMessage: lorem.words(),
        unreadMessages: random.number({ min: 0, max: 50, precision: 1 }),
      })),
    };
  },

  computed: {
    unreadMessages() {
      return this.contacts.reduce(
        (total: number, { unreadMessages }) => total + (unreadMessages as number),
        0,
      ) as number;
    },
  },

  methods: {
    onChatMessageSubmit() {
      this.onChatMessageReset();
    },
    onChatMessageReset() {
      this.chatInput = '';
    },
  },
});
</script>

<style lang="scss">
.chat-window {
  min-width: $breakpoint-xs;
  max-width: 100vw;
  min-height: 500px;
  max-height: 100vh;
  box-shadow: $shadow-2;
  border-radius: $generic-border-radius;
}
</style>
