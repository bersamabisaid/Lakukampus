<template>
  <q-card class="danusan-card q-ma-xs q-mt-md q-mx-xs">
    <q-img :src="photo" />

    <q-card-section>
      <div class="row no-wrap items-center">
        <div class="col text-h6 ellipsis">
          {{ name }}
        </div>
      </div>

      <!-- <q-rating
        v-model="stars"
        :max="5"
        size="32px"
      /> -->
      <div
        class="text-negative float-right"
        style="margin-right: 80px"
      >
        -33%
      </div>
      <div
        class="done"
        style="font-size: 12px"
      >
        Rp. {{ price }}
      </div>
      <div class="text-weight-bolder">
        Rp. 999
      </div>
    </q-card-section>

    <q-card-section
      class="q-pt-none q-pl-xs"
    >
      <q-badge
        color="white"
        flat
      >
        <q-icon
          :name="outlinedLocationOn"
          color="teal-7"
          class="q-mr-xs"
        />
        <div
          class="text-subtitle-2 text-teal-7"
        >
          FMIPA
        </div>
      </q-badge>
      <q-badge
        color="white"
        flat
      >
        <q-icon
          :name="outlinedMoped"
          color="teal-7"
          class="q-mr-xs"
        />
        <div
          class="text-subtitle-2 text-teal-7"
        >
          Bisa Antar
        </div>
      </q-badge>
      <q-icon
        v-if="bestChoice"
        name="stars"
        color="warning"
        class="q-ml-sm"
        style="font-size: 20px"
      />
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { outlinedLocationOn, outlinedMoped } from '@quasar/extras/material-icons-outlined';

export default defineComponent({
  name: 'productCard',

  props: {
    name: String,
    photo: String,
    price: Number,
    bestChoice: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      outlinedLocationOn, outlinedMoped,
    };
  },
});
</script>
