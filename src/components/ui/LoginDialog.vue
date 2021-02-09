<template>
  <q-dialog
    ref="dialog"
    @hide="onDialogHide"
  >
    <q-card class="q-dialog-plugin">
      <q-card-section class="q-pt-lg q-pb-lg column">
        <h5 class="q-my-none text-center">
          Daftar/Masuk Lakukampus
        </h5>

        <q-separator spaced />

        <div class="q-px-lg q-pt-xl column items-center">
          <q-btn
            push
            @click="login"
          >
            <q-avatar
              square
              size="md"
              class="q-mr-md"
            >
              <img :src="require('assets/images/g-logo.png')">
            </q-avatar>
            <span>Masuk dengan google</span>
          </q-btn>

          <div class="q-mt-xl q-mb-lg">
            <span>Dengan mendaftar, saya menyetujui </span>
            <a
              href="#"
              class="text-primary"
            >Syarat dan Ketentuan</a>
            <span> serta </span>
            <a
              href="#"
              class="text-primary"
            >Kebijakan Privasi</a>
          </div>
        </div>
      </q-card-section>

      <q-btn
        icon="close"
        v-close-popup
        flat
        round
        dense
        class="absolute-top-right q-mt-sm q-mr-sm"
      />
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { mdiGoogle } from '@quasar/extras/mdi-v5';
import useAuth from 'composition/useAuth';
import type { QDialog } from 'quasar';

export default defineComponent({
  name: 'LoginDialog',

  setup() {
    return {
      login: useAuth().login,
    };
  },

  data() {
    return {
      mdiGoogle,
    };
  },

  methods: {
    show() {
      (this.$refs.dialog as QDialog).show();
    },
    hide() {
      (this.$refs.dialog as QDialog).hide();
    },
    onDialogHide() {
      this.$emit('hide');
    },
    onOKClick() {
      this.$emit('ok'/* , { payload } */);
      this.hide();
    },
    onCancelClick() {
      this.hide();
    },
  },
});
</script>
