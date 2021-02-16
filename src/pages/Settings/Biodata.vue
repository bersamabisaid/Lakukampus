<template>
  <section-layout title="Biodata pengguna">
    <div class="row">
      <div class="order-sm-last col-12 col-sm-3 column items-center">
        <q-avatar
          color="primary"
          text-color="white"
          size="5rem"
          class="q-my-sm"
        >
          <q-img
            v-if="photo"
            :src="photo"
          />
          <span v-else>{{ name.charAt(0).toUpperCase() }}</span>
        </q-avatar>

        <q-btn
          label="Ganti foto profil"
          dense
          flat
          color="primary"
        />
      </div>

      <q-form class="col-grow">
        <q-list
          padding
          class="q-gutter-y-md"
        >
          <item-input
            label="Nama"
            v-model="name"
          />

          <item-input
            label="NIM mahasiswa"
            v-model="studentId"
          />

          <item-input
            label="Email"
            v-model="email"
            type="email"
            disable
          />

          <item-input
            label="Nomor telepon"
            v-model="phoneNumber"
            type="tel"
          />

          <item-input
            label="Jurusan"
            v-model="department"
          />

          <item-input
            label="Fakultas"
            v-model="faculty"
          />

          <item-input
            label="Angkatan"
            v-model="batchYear"
            type="number"
          />

          <item-input
            label="Alamat asal"
            v-model="originAddress"
          />

          <item-input
            label="Alamat sekarang"
            v-model="currentAddress"
          />
        </q-list>
      </q-form>
    </div>
  </section-layout>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import SectionLayout from 'layouts/SectionLayout.vue';
import useUserProfileData from 'composition/useUserProfileData';
import useAuthGuard from 'composition/useAuthGuard';
import ItemInput from './ItemInput.vue';

export default defineComponent({
  name: 'SettingsBiodataPage',

  components: {
    SectionLayout, ItemInput,
  },

  setup(props, ctx) {
    useAuthGuard(props, ctx);

    return {
      ...useUserProfileData(),
    };
  },
});
</script>
