<template>
  <q-card>
    <q-img
      height="150px"
      :src="photo"
    />

    <q-card-section>
      <div class="row no-wrap items-center">
        <h6 class="col q-my-none text-h6 ellipsis">
          {{ name }}
        </h6>
      </div>

      <div class="relative-position">
        <span class="text-grey text-strike">
          Rp. {{ price }}
        </span>
        <span class="absolute-top-right text-negative">
          -33%
        </span>
      </div>

      <div class="text-weight-bolder">
        Rp. 999
      </div>
    </q-card-section>

    <q-card-section class="q-pt-none row justify-between items-center">
      <div>
        <q-icon
          :name="outlinedLocationOn"
          color="teal-7"
        />

        <small class="text-subtitle-2 text-teal-7">
          FMIPA
        </small>
      </div>

      <div>
        <q-icon
          :name="outlinedMoped"
          color="teal-7"
        />

        <small class="text-subtitle-2 text-teal-7">
          Bisa Antar
        </small>
      </div>

      <q-icon
        v-if="bestChoice"
        name="stars"
        color="warning"
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
